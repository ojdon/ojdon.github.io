---
layout: post
title:  "HTML5 Game Development Gulp Workflow"
description: A gulp workflow that is specifically optimised for HTML5 Game Development.
date:   2015-08-24 22:00:00
categories: programming, gamedev, HTML5
---
Last week, my friend [Jordan](https://twitter.com/DivineOmega) and I have started work on a game for the [js13kgames competition](http://js13kgames.com/). For those who don't know what the rules of the competition involve, you have an entire month to create a game in a 13kb zip archive. 

Luckily, as it's targeting HTML5 game developers to use JavaScript in order to create their games, this means that all the technology that goes into creating other web-based projects, such as your everyday websites, can be used into an HTML5 game development workflow.

Introducing... [Gulp](http://gulpjs.com/)!

Gulp is a task runner that is designed to automate common tasks within a web development process, whether it's for a traditional website project or can even be used for HTML5 game development. Written in JavaScript, Gulp allows developers to create tasks for automating processes such as compressing images, compiling stylesheet preprocessors such as LESS or SASS and so much more. 

This blog post will cover how to install Gulp and use it within your HTML5 Game Development workflow.

##Requirements
* OSX or Linux
* Nodejs + NPM

## Installing NodeJS + NPM
### Within OSX
`brew install nodejs npm`
### Within Ubuntu, Debian, Elementary OS, etc
`sudo apt-get install nodejs npm`
### Within Red Hat, Fedora, CentOS, etc
`sudo yum install nodejs npm` 

##Installing Gulp
Please refer to Gulp’s getting started guide [here](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md).

##Gulp Tasks
There are literally [thousands upon thousands](https://www.npmjs.com/search?q=gulp) of gulp related tasks to install. However, I have hand selected a few gulp tasks that will be used frequently in a HTML5 game development with a brief description of what action each gulp task performs:

* gulp-zip: Compresses files into a zip folder.
* gulp-concat: Combines (JS) files together, smaller footprint size and fewer HTTP requests = quicker loading of the game.
* gulp-uglify: Minifies JavaScript code to be as small as possible in file size.
* gulp-watch: Keeps a check for file changes

You can install the list of gulp tasks above by using the following command below: 
`npm install gulp gulp-zip gulp-watch gulp-jshint gulp-concat gulp-uglify gulp-image-optimization gulp-minify-html gulp-rename run-sequence`

##Gulpfile
In order to use these tasks and specify the different actions and files to target we need to create `gulpfile.js` in the base directory for the game. Once you have installed the gulp tasks above, then add the following lines of code to your freshly created gulpfile and save:

    //All the Gulp tasks and dependencies
    var gulp = require('gulp'),
    zip = require('gulp-zip'),
    watch = require('gulp-watch'),
    jshint = require('gulp-jshint'),
    gp_concat = require('gulp-concat'),
    gp_uglify = require('gulp-uglify'),
    imageop = require('gulp-image-optimization'),
    minifyHTML = require('gulp-minify-html'),
    rename = require('gulp-rename'),
    runSequence = require('run-sequence');

    //All your paths for JS, HTML and Image files
    var zip_files = ['game.js', 'index.html'], //Files to be added to the zip folder use "<directory goes here>/*" for all files inside the directory
        js_files = ['js/main.js', 'scenes/*'], //All your JS files to be combined and minified
        img_files = ['assets/*.png','assets/*.jpg','src/**/*.gif','assets/*.jpeg'];

    //Zip up the JS/HTML required for the game
    gulp.task('zip', function () {
        return gulp.src(zip_files, {base: "."})
            .pipe(zip('release.zip'))
            .pipe(gulp.dest('build'));
    });


    //Run this task once the game is ready to ship!
    gulp.task('publish', function() {
        runSequence('build-js', 'build-html', 'zip');
    });

    //Compress Images
    gulp.task('images', function(cb) {
        gulp.src(img_files).pipe(imageop({
            optimizationLevel: 5,
            progressive: true,
            interlaced: true
        })).pipe(gulp.dest('assets')).on('end', cb).on('error', cb);
    });

    //Minify the HTML
    gulp.task('build-html', function() { 
      return gulp.src('./index.unmin.html')
        .pipe(minifyHTML())
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./'));
    });

    //Build the JS and minify
    gulp.task('build-js', function() {
        return gulp.src(js_files)
            .pipe(jshint())
            .pipe(jshint.reporter('default')) //Report on errors found by jshint
            .pipe(gp_uglify()) //Minify JS
            .pipe(gp_concat('game.js')) //Merge all the JS files into one game.js file 
            .pipe(gulp.dest('./'));
    });

    //Build the JS without minifying
    gulp.task('build-dev', function() {
        return gulp.src(js_files)
            .pipe(jshint())
            .pipe(jshint.reporter('default'))
            .pipe(gp_concat('game.js'))
            .pipe(gulp.dest('./'));
    });

    //Watch for any JS or HTML file changes
    gulp.task('watch', function () {
        watch(js_files, function () {
            runSequence('build-dev');
        });

        watch('./index.unmin.html', function () {
            runSequence('build-html');
        });
    });

##Commands
You will now be able to run the following commands in order to achieve different tasks:

`gulp zip` - Adds your minified JS file and index.html to a zip file, great for quick distribution of your game

`gulp publish` - The command you run when you are ready to release your game. It will run the build commands for your JS and HTML, one last time before zipping them up. 

`gulp images` - Compresses images for a lower file size

`gulp build-html` - minifies your HTML file(s)

`gulp build-js` - Checks your JS for errors, concatenates all your JS files down to one file before minifying the JavaScript code.

`gulp build-dev` - Checks your JS for errors and concatenates all your JavaScript files down to one file but *doesn't* minify (Easier for debugging!!)

`gulp watch` - Keeps a close eye on your specific JS files / folders and will run uglify whenever a change has been made, just like the `gulp build` command.

*Update: * I have made a [GitHub repository](https://github.com/ojdon/html5-game-development-gulp-workflow) for other HTML5 Game Developers to suggest tasks to be added to the 'gulpfile.js' by either opening an 'Issue' with your suggestion, or by creating a pull request. 