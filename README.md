# jigsaw-cli

The `jigsaw-cli` is a project to support the creation, build and release of React Native and `jigsaw` projects to the Android and iOS 
mobile application stores. `jigsaw`, through the [`jigsaw-template`]() empowers continuous integration and continuous 
deployment (CI/CD) of mobile applications by building on top of [GitHub Actions]() and [FastLane](), to minimize the time
it takes from the conception of an idea, to the release of an MVP or production ready mobile application to the Android
and iOS application stores.

The `jigsaw-cli` enables user's to create a React Native project using the [`jigsaw-template`](). The `jigsaw` template 
provides out-of-the-box:

1. A stable and up-to-date [`react-native`]() template project.
2. The running of the mobile application on local iOS and Android simulators.
2. GitHub actions for the following:
   1. **Continuous Integration (CI)**: Automated build, test and linting of pull requests to the project's default 
GitHub branch.
   2. **Continuous Deployment (CD)**: Automated beta distributions of the project to Android and iOS beta stores when
a PR is merged to the default GitHub branch.
   3. **Production Releases (CD)**: Automated production distributions of the project to the Google Play Apple App Stores
when a tagged release of [semantic versioning]() (versions of type `MAJOR.MINOR.PATCH`) is created.
   4. **Automated Screen Capture and Metadata Management**: Manage application metadata including language support, 
application description and automated screen grabs using FastLane. 
   5. **Code Signing**:
   6. **Dependabot (Dependency Management)**: Automated `node` and `cocaopods` dependency upgrade management and PR 
creation using [GitHub Dependabot]().
4.


## Prerequisites:

TODO: Add details on how to install all the below...

* node
* git (and a registered GitHub account)
* Xcode 
* Android 
* FastLane

## Getting started

To install the `jigsaw-cli`, run the following command in a terminal:

```bash
$ npm install jigsaw-cli --global
```

This will install the `jigsaw-cli` globally on the system. 

To create a `jigsaw` project, run the following:

```bash
$ jigsaw new [projectName]
```

where `projectName` is the name of your new jigsaw react native project.

Once the project is created, you will be prompted a series of questions:

TODO: add more details here:
1. 
