var gulp = require('gulp'),
    concat = require('gulp-concat'),
    merge = require('merge-stream'),
    paths = require('../config.js');

gulp.task('scripts', ['cleanScripts'], function() {
    //app.js
    var base = gulp.src(paths.scripts + '*.js')
        .pipe(concat('app.js', {newLine: ';'}))
        .pipe(gulp.dest(paths.dist + paths.scripts));

    //modules.js
    var modules = gulp.src(paths.scripts + 'modules/*.js')
        .pipe(concat('modules.js', {newLine: ';'}))
        .pipe(gulp.dest(paths.dist + paths.scripts + 'modules/'));

    return merge(base, modules);
});