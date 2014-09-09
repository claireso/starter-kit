var gulp = require('gulp'),
    paths = require('../config.js');

gulp.task('watch', function() {
    gulp.watch(paths.styles + '**/*.styl', ['styles']);
    gulp.watch(paths.scripts + '**/*.js', ['scripts']);
});