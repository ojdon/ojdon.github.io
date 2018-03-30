var sass_dir = [
    './scss/style.scss'],
    js_dir = [
    './node_modules/popper.js/dist/umd/popper.js',
    './node_modules/bootstrap/dist/js/bootstrap.js',
    './js/scripts.js'],
    js_output_dir = './js',
    css_dir = './css',
    fonts_dir = ['./node_modules/font-awesome/fonts/*'],
    fonts_output_dir = './fonts/';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    path = require('path'),
    uglify = require('gulp-uglify'),
    cat = require('gulp-concat'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['sass', 'js-build', 'fonts']);

/*Watch Task*/
gulp.task('watch', function() {
    gulp.watch(sass_dir, ['sass-main']);
    gulp.watch(js_dir, ['js-build-dev']);
});
/*Compile LESS*/
gulp.task('sass', ['sass-main']);
gulp.task('scss', ['sass-main']);
gulp.task('less', ['sass-main']);

gulp.task('sass-main', function() {
    return gulp
    .src(sass_dir)
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer())
    .pipe(cat('style.min.css'))
    .pipe(gulp.dest(css_dir));
});

/*Compile JS*/
gulp.task('js-build', ['js-build-main']);

gulp.task('js-build-main', function() {
  return gulp.src(js_dir)
    .pipe(cat('scripts.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest(js_output_dir))
});

/*Compile JS UNMINIFIED!!*/
gulp.task('js-build-dev', ['js-build-main-dev']);

gulp.task('js-build-main-dev', function() {
  return gulp.src(js_dir)
    .pipe(cat('scripts.min.js'))
    .pipe(gulp.dest(js_output_dir))
});

/*Copy FontAwesome fonts to the public directory*/
gulp.task('fonts', function() {
  return gulp.src(fonts_dir)
  .pipe(gulp.dest(fonts_output_dir));
});
