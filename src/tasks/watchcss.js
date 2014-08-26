var gulp = require('gulp'),
    paths = require('../config.js');

gulp.task('watchcss', function() {
    gulp.watch(paths.styles + '**/*.styl', ['styles']);
});