
TODO: Add jigsaw badges below:

[![Documentation Status](https://readthedocs.org/projects/pprunty-shapeshifter/badge/?version=latest)](https://pprunty-shapeshifter.readthedocs.io/en/latest/?badge=latest)
![npm - Downloads](https://img.shields.io/npm/dw/react-native)
![npm - Version](https://img.shields.io/npm/v/react-native)
![GitHub Contributors](https://img.shields.io/github/contributors/jigsaw-innovations/jigsaw-cli/shapeshifter.svg)

# jigsaw-cli

The `jigsaw-cli` facilitates the creation, build, and release of React Native and jigsaw projects for Android and iOS 
mobile application stores. `jigsaw`, through the [`jigsaw-template`]() empowers continuous integration and continuous 
deployment (CI/CD) of mobile applications by building on top of [GitHub Actions]() and [FastLane](), to minimize the time
it takes from the conception of an idea, to the release of an MVP or production ready mobile application to the Android
and iOS application stores.

The `jigsaw-cli` enables user's to create a React Native project using the [`jigsaw-template`](). The `jigsaw` template 
provides out-of-the-box:

1. A stable and up-to-date [`react-native`]() template project.
2. Basic bottom tab and screen stack navigation.
3. An icon library built on `heroicons`.
5. The running of the mobile application on local iOS and Android simulators.
6. GitHub actions for the following:
   1. **Continuous Integration (CI)**: Automated build, test, and linting of pull requests to the default GitHub branch.
   2. **Continuous Deployment (CD)**: Automated beta distributions to Android and iOS beta stores upon PR merge.
   3. **Production Releases (CD)**: Automated distributions to Google Play and Apple App Stores for tagged semantic version releases (`MAJOR.MINOR.PATCH`).
   4. **Automated Screen Capture and Metadata Management**: Language support, application description, and screen grabs via FastLane. 
   5. **Code Signing**:
   6. **Dependency Management**: Automated node and cocoapods dependency upgrades and PR creation through [GitHub Dependabot]().
7. 


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

### Installation

To install the `jigsaw-cli`, run the following command in a terminal:

```bash
$ npm install jigsaw-cli --global
```

This will install the `jigsaw-cli` globally on the system. 

### Project creation

To create a `jigsaw` project, run the following:

```bash
$ jigsaw new [projectName]
```

where `projectName` is the name of your new jigsaw react native project.

### Questioner

Once the project is created, you will be prompted a series of questions:

TODO: add more details here:
1. 


## Development

## Project structure

