var gulp       = require('gulp'),
    browserify = require('browserify'),
    paths      = require('../config.js'),
    source     = require('vinyl-source-stream')
    notify     = require("gulp-notify");

gulp.task('browserify', ['cleanScripts'], function() {
    return browserify('./' + paths.scripts + 'base.js')
        .bundle()
        .on('error', notify.onError(function (error) {
            return "Js: " + error.message;
        }))
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist + paths.scripts));
});
