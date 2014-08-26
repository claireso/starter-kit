var gulp = require('gulp'),
    paths = require('../config.js');

gulp.task('watchjs', function() {
    gulp.watch(paths.scripts + '**/*.js', ['scripts']);
});