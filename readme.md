# Phaser Test project
This project shows a configuration for phaser development.

## Table of Contents
- [Features](#Features)
- [Installation and Usage](#Installation)
- [Structure](#Structure) Explanation of features

## Features
- Package management with [npm](https://www.npmjs.com/) and [bower](http://bower.io/)
- [Gulp](http://gulpjs.com/) for extremely fast automated workflow
- Ecmascript 6 Javascript compilation with module [loading](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import) see [Structure](#Structure)

## Installation
First you need to install Node.js. Gulp is built in Node.js. You can think of Node.js as a scripting shell in some ways (it can do lots more though). [Download Node.js here](https://nodejs.org/en/)

Use NPM to install some global dependencies. Run the following command in a command line.<br>`npm install -g bower gulp` or on Mac `sudo npm install -g bower gulp`  

Next, get the source code of the project. The simplest way is to click the 'save chrisUsick/phaserTest to your computer and use it in Github Desktop'  button to download the code using Github desktop. (you may need to install github desktop first)

Next you'll install the dependencies of this app. NPM is Node.js's package manager and Bower is a client-side (for browsers) package manager. In the project directory, Run `npm install` to install Node.js dependencies and run `bower install` to install bower dependencies.

Now the dependencies are installed. The `node_modules` directory and `bower_components` directory contain the dependencies.

### Run development server
To run the development server run the following command in a command line in the project directory `gulp serve` This will automatically open a web browser, if you edit the source code it will automatically refresh the page.

### creating the custom build to include Ninja physics
Phaser doesn't include Ninja physics by default. This project uses Ninja physics so you need to create a custom build. This is an easy step.
1. run `npm install -g grunt-cli`
2. open a command line in the `bower_components/phaser` directory
3. run `grunt custom --exclude net --uglify --filename phaser-all`. This creates a file in the `dist` that is automatically included in the project.

All done!

## Structure
The soure code for the project is in the `app/` directory. The dependencies are stored in `bower_components/`. The gulp file is responsible for the development server, compiling the javascript, performing minification and other tasks.<br>Some important features that are in this project are as follows:
- Ecmascript 6 javascript
  - In `app/scripts` you'll see only ES6 code. ES6 has many advantages over normal (ES5) javascript.
  - The most important feature is [ES6 modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import)

- Unit testing
  - The gulp configuration has a task for running unit test. None have been created so far but it could become invaluable in the future

- production build
  - The gulp configuration has a task to build the project production for production. This is also very important because it ensures that our scripts and HTML are minified for protection and fast loading.
