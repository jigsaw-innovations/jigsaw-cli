/**
 * Required modules.
 */
const chalk = require("chalk");
const {exec} = require('child_process');
const axios = require('axios');
const fs = require('fs');
const path = require('path');

/**
 * Downloads a file from a given URL and saves it to a specified destination path.
 * @param {string} url - The URL of the file to download.
 * @param {string} destPath - The path where the downloaded file will be saved.
 * @returns {Promise} - Resolves when the file is successfully downloaded.
 */
const downloadFile = async (url, destPath) => {
    const {data} = await axios.get(url, {responseType: 'stream'});
    const writer = fs.createWriteStream(destPath);

    return new Promise((resolve, reject) => {
        data.pipe(writer);
        writer.on('finish', resolve);
        writer.on('error', reject);
    });
};

/**
 * Replaces content in a file.
 * @param {string} filePath - The path of the file whose content will be replaced.
 * @param {string} projectName - The new string that will replace the old content.
 */
const replaceContent = (filePath, projectName) => {
    const content = fs.readFileSync(filePath, 'utf8');
    const newContent = content.replace(/jigsaw/g, projectName);
    fs.writeFileSync(filePath, newContent);
};

/**
 * Downloads content from a GitHub repository and replaces specific content.
 * @param {string} url - The URL of the GitHub repository.
 * @param {string} destDir - The destination directory where the content will be saved.
 * @param {string} projectName - The name of the project, used for replacing content.
 */
const downloadRepoContent = async (url, destDir, projectName) => {
    const githubToken = process.env.GITHUB_TOKEN; // Use environment variable
    const response = await axios.get(url, {
        headers: {
            'Authorization': `token ${githubToken}`
        }
    });

    const items = response.data;

    for (const item of items) {
        const itemPath = path.join(destDir, item.name);

        // Skip the directories named "ios", "android", and "node_modules"
        if (['ios', 'android', 'node_modules'].includes(item.name)) {
            continue;
        }

        if (item.type === 'dir') {
            fs.mkdirSync(itemPath);
            await downloadRepoContent(item.url, itemPath, projectName);
        } else {
            await downloadFile(item.download_url, itemPath);
            replaceContent(itemPath, projectName);
        }
    }
};

/**
 * Creates a new project directory.
 * @param {string} projectName - The name of the new project directory.
 * @returns {string} - The path of the new project directory.
 * @throws {Error} - Throws an error if the directory already exists.
 */
const createProjectDirectory = (projectName) => {
    // Get the current working directory where the command was run
    const cwd = process.cwd();

    // Create the full path for the new project directory
    const projectDir = path.join(cwd, projectName);

    // Check if the directory already exists
    if (fs.existsSync(projectDir)) {
        throw new Error(`Project directory "${projectName}" already exists.`);
    }

    // Create the new directory
    fs.mkdirSync(projectDir);

    return projectDir;
};



/**
 * Checks if CocoaPods is installed.
 * @returns {Promise} - Resolves with the CocoaPods version if installed, otherwise rejects with an error.
 */
const checkCocoaPodsInstallation = () => {
    return new Promise((resolve, reject) => {
        exec('pod --version', (error, stdout, stderr) => {
            if (error) {
                reject(new Error('CocoaPods is not installed.'));
            } else {
                resolve(stdout.trim());
            }
        });
    });
};

/**
 * Runs `pod install` in the project's `ios` directory.
 * @param {string} projectPath - The path of the project where `pod install` will be run.
 * @returns {Promise} - Resolves when `pod install` completes successfully, otherwise rejects with an error.
 */
const runPodInstall = (projectPath) => {
    return new Promise((resolve, reject) => {
        const iosPath = path.join(projectPath, 'ios');
        exec(`cd ${iosPath} && pod install`, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error during 'pod install': ${error}`);
                reject(error);
            } else {
                resolve(stdout);
            }
        });
    });
};

/**
 * Installs react-native-eject and react-native-cli globally.
 * @returns {Promise} - Resolves when the packages are successfully installed, otherwise rejects with an error.
 */
const installEjectGlobally = () => {
    return new Promise((resolve, reject) => {
        exec('npm install -g react-native-eject react-native-cli', (error, stdout, stderr) => {
            if (error) reject(error);
            else resolve(stdout);
        });
    });
};

/**
 * Runs `npm install` and `react-native eject` in the project directory.
 * @param {string} projectPath - The path of the project where the commands will be run.
 * @returns {Promise} - Resolves when the commands complete successfully, otherwise rejects with an error.
 */
const runEjectInProject = async (projectPath) => {
    return new Promise(async (resolve, reject) => {
        try {
            exec(`cd ${projectPath} && npm install > /dev/null 2>&1`, async (error, stdout, stderr) => {
                if (error) {
                    console.error(`Error during npm install: ${error}`);
                    return reject(error);
                }

                exec(`cd ${projectPath} && react-native eject > /dev/null 2>&1`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error during react-native eject: ${error}`);
                        return reject(error);
                    }
                    resolve();
                });
            });
        } catch (e) {
            reject(e);
        }
    });
};


let ora;

/**
 * Creates a new project.
 * @param {string} projectName - The name of the new project.
 */
const createNewProject = async (projectName) => {
    ora = await import('ora');  // Dynamic import
    ora = ora.default;  // Access the default export
    let projectDir;

    try {
        projectDir = createProjectDirectory(projectName);
    } catch (error) {
        console.error(chalk.keyword('violet')(`Directory '${projectName}' already exists.`));
        return;
    }

    // Use a single spinner and update its text for different steps
    const spinner = ora('Initializing...').start();

    try {
        spinner.text = 'Step 1/4: Downloading jigsaw template 📁';
        const repoUrl = 'https://api.github.com/repos/jigsaw-innovations/jigsaw/contents';
        await downloadRepoContent(repoUrl, projectDir, projectName);
        spinner.succeed();

        spinner.text = 'Step 2/4: Installing package dependencies 🛒';
        spinner.start();
        await installEjectGlobally();
        spinner.succeed();

        spinner.text = 'Step 3/4: Installing iOS and Android native modules 🤖🖥️';
        spinner.start();
        await runEjectInProject(projectDir);
        spinner.succeed();

        spinner.text = 'Step 4/4: Running pod install';
        spinner.start();
        await runPodInstall(projectDir);
        spinner.succeed();

        // TODO: Print project complete and now time for some questions

        // TODO: Ask user if they intent to deploy to Google store
        // TODO: Ask user if they intent to deploy to Apple store
        // Add sub questions if N
        // Add spinner for clearing out directories if N

        // TODO: Ask user what default GitHub branch they would like (default main)
        // programmatically update GitHub action yaml files

        // TODO: Ask user for CODEOWNERS list (detect git user programmatically and default)
        // init github project somewhere here

        // TODO: Ask user if they want to enable Firebase authentication
        // If Y, take them through the process

    } catch (error) {
        spinner.fail();
        console.error('An error occurred:', error);
    }
};

module.exports = createNewProject;
