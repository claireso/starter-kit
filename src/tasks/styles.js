var gulp   = require('gulp'),
    stylus = require('gulp-stylus'),
    paths  = require('../config.js'),
    notify = require("gulp-notify");

gulp.task('styles', ['cleanStyles'], function() {
    return gulp.src(paths.styles + 'styles.styl')
    .pipe(stylus())
    .on('error', notify.onError(function (error) {
        return "Stylus: " + error.message;
    }))
    .pipe(gulp.dest(paths.dist + paths.styles));
});
