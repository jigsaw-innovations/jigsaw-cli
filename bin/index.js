#! /usr/bin/env node
const chalk = require('chalk')
const yargs = require("yargs");
const packageInfo = require('../package.json');
const {hideBin} = require("yargs/helpers"); // Replace './package.json' with the actual path to your package.json if different
const createNewProject = require('./new');

// Retrieve the application name and version
const appName = packageInfo.name;
const appVersion = packageInfo.version;

const usage = chalk.keyword('violet')(
    `${appName} [OPTIONS] COMMAND [ARGS]...\n\n  ${appName} core CLI v${appVersion} ✨ \n\n
      The ${appName} CLI supports the creation of ${appName} projects. For more
      detailed usage, visit: https://github.com/jigsaw-innovations/jigsaw.\n\n
© Patrick Prunty, Maarten Handels`
);

const argv = yargs(hideBin(process.argv))
    .usage(usage)
    .command('new [projectName]', 'Create a new jigsaw project 🏯', (yargs) => {
        yargs.positional('[projectName]:', {
            describe: 'Name of the new project',
            type: 'string'
        });
    }, async (argv) => {
        if (argv.projectName) {
            await createNewProject(argv.projectName);
        } else {
            console.log(chalk.keyword('yellow')('You did not provide a project name.'));
            // TODO: Add inquirer for project name

            // console.log('Please provide a project name.');
        }
    })
    .option('version', {
        alias: 'v',
        type: 'boolean',
        describe: 'Show the version and exit.',
    })
    .option('help', {
        // TODO: Fix -h flag not printing help
        alias: 'h',
        type: 'boolean',
        describe: 'Show this message and exit.',
    })
    .help()
    .showHelpOnFail(true)
    .argv;

// Check if any command or flag is provided
if (Object.keys(argv).length <= 2) {
    yargs.showHelp();
}

