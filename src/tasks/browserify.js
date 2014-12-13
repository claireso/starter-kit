var gulp = require('gulp'),
    browserify = require('browserify'),
    paths = require('../config.js'),
    source = require('vinyl-source-stream');

gulp.task('browserify', ['cleanScripts'], function() {
    return browserify('./' + paths.scripts + 'base.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(paths.dist + paths.scripts));
});
