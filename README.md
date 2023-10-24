
TODO: Add jigsaw badges below:

[![Documentation Status](https://readthedocs.org/projects/pprunty-shapeshifter/badge/?version=latest)](https://pprunty-shapeshifter.readthedocs.io/en/latest/?badge=latest)
![npm - Downloads](https://img.shields.io/npm/dw/react-native)
![npm - Version](https://img.shields.io/npm/v/react-native)
![GitHub Contributors](https://img.shields.io/github/contributors/jigsaw-innovations/jigsaw-cli/jigsaw.svg)

# jigsaw-cli 

The `jigsaw-cli` facilitates the creation, build, and release of React Native and jigsaw projects for Android and iOS 
mobile application stores. `jigsaw`, through the [`jigsaw-template`]() empowers continuous integration and continuous 
deployment (CI/CD) of mobile applications by building on top of [`react-native`](), [`FastLane`]() and [`GitHub Actions`](), to minimize the time
it takes from the conception of an idea, to the release of an MVP or production ready mobile application to the Android
and iOS application stores.

The `jigsaw-cli` enables user's to create a React Native project using the [`jigsaw-template`](). The `jigsaw` template 
provides out-of-the-box:

1. **React Native Template**: A stable and up-to-date [`react-native`]() template project.
2. **Navigation**: Basic bottom tab and screen stack navigation.
3. **Icon Library**: A static icon library built on `heroicons`.
4. **Android and/or iOS Simulator**: The running of the mobile application on local iOS and Android simulators.
5. **GitHub Actions**:
   1. **Continuous Integration (CI)**: Automated build, test, and linting of pull requests to the default GitHub branch.
   2. **Continuous Deployment (CD)**: Automated beta distributions to Android and iOS beta stores upon PR merge.
   3. **Production Releases (CD)**: Automated distributions to Google Play and Apple App Stores for tagged semantic version releases (`MAJOR.MINOR.PATCH`).
   4. **Automated Screen Capture and Metadata Management**: Language support, application description, and screen grabs via FastLane. 
   5. **Code Signing**:
   6. **Dependency Management**: Automated node and cocoapods dependency upgrades and PR creation through [GitHub Dependabot]().
6. 


## Prerequisites:

TODO: Add details on how to install all the below...

* node
* git (and a registered GitHub account)
* FastLane

### iOS

* Xcode

### Android

* Android SDK


## Getting started

### Step 1: Installation

To install the `jigsaw-cli`, run the following command in a terminal:

```bash
npm install jigsaw-cli --global
```

This will install the `jigsaw-cli` globally on the system. 

### Step 2: Project creation

To create a `jigsaw` project, run the following:

```bash
jigsaw new [projectName]
```

where `projectName` is the name of your new jigsaw react native project.

### Step 3: Questioner

Once the project is created, you will be prompted a series of questions:

TODO: add more details here:

1. 

### Step 4: Start your application

#### For Android

```bash
jigsaw build android
```

You will be prompted to select from the available Android simulators with a default option. To continue using the
default Android simulator, click enter. To select a specific simulator, copy and paste the name of the chosen simulator
into the prompt.

A new Android simulator can be created using the `Android SDK`. You can do this by following the instructions [here]().
Once complete, the new simulator option will be available next time you run the above command.

#### For iOS

```bash
jigsaw build ios
```

You will be prompted to select from the available iOS simulators with a default option. To continue using the
default iOS simulator, click enter. To select a specific simulator, copy and paste the name of the chosen simulator into
the prompt.

If you would like to run on a simulator running a later iOS version, make sure to update `Xcode`. You can do this by following the instructions
[here](). Once complete, the new simulator options will be available next time you run the above command.

### Step 5: Modifying the project

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations 🎉

You've successfully run and modified your first `jigsaw` app. 🥳

For further development details on the project structure, navigation, icons and firebase authentication,
continue reading the next section.

NOTE TO SELF: People will probably stop reading so it's important to include comments and
documentation in the code itself to instruct developement on the `jigsaw` project.

## Development

### Project structure

### Navigation

Navigation in `react-native` is a non-trivial task. That is why `jigsaw` provides basic navigation for your
react native `jigsaw` project out-of-the-box. 

In a basic `react-native` application, the project is split into what is referred to as `screens`. `screens` are
higher-level components which render the lower-level components which make-up that `screen`. For example, a
`LoginScreen` react component may render lower-level button and/or form components for logging into the application.

`jigsaw` provides basic navigation across `screens` using two types of navigation systems.

* `tab`: Tab navigation provides a bottom navigation across multiple `stacks`.
* `stack`: Stack navigation provides 'horizontal' navigation across the `screens` within the `stack`.

### Icons

### Firebase Authentication

## Releasing

### Locally

### GitHub Actions
