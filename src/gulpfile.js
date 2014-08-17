var gulp = require('gulp'),
    concat = require('gulp-concat'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    merge = require('merge-stream'),
    stylus = require('gulp-stylus'),
    minifyCSS = require('gulp-minify-css');

/**
 * GLOBAL CONFIGATION PATH
 */
var paths = {
    scripts: 'js/',
    styles: 'css/',
    dist: '../assets/'
};

gulp.task('default', function() {
    
});

/*****************************************************************************
    JAVSCRIPT TASKS
*****************************************************************************/

/**
 * CLEAN SCRIPTS TASK
 */
gulp.task('cleanScripts', function() {
    del([paths.dist + paths.scripts + '**/*.js', '!' + paths.dist + paths.scripts + 'vendor/*.js'], {force: true});
});


/**
 * CONCATENATION TASK
 */
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

/**
 * BUILD SCRIPTS TASK
 */
gulp.task('buildjs', ['scripts'], function() {
    return gulp.src([paths.dist + paths.scripts + '**/*.js', '!' + paths.dist + paths.scripts + 'vendor/'])
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + paths.scripts));
});

/**
 * WATCH SCRIPTS TASK
 */
gulp.task('watchjs', function() {
    gulp.watch(paths.scripts + '**/*.js', ['scripts']);
});


/*****************************************************************************
    CSS TASKS
*****************************************************************************/
/**
 * CLEAN CSS TASK
 */
gulp.task('cleanStyles', function() {
    del([paths.dist + paths.styles + '**/*.css'], {force: true});
});

/**
 * COMPILE STYLES TASK
 */
gulp.task('styles', ['cleanStyles'], function() {
    return gulp.src(paths.styles + '**/*.styl')
    .pipe(stylus())
    .pipe(gulp.dest(paths.dist + paths.styles));
});

/**
 * BUILD STYLES TASK
 */
gulp.task('buildcss', ['styles'], function() {
    return gulp.src(paths.dist + paths.styles + '**/*.css')
    .pipe(minifyCSS({keepBreaks:false}))
    .pipe(gulp.dest(paths.dist + paths.styles))
});

/**
 * WATCH CSS TASK
 */
gulp.task('watchcss', function() {
    gulp.watch(paths.styles + '**/*.styl', ['styles']);
});

/*****************************************************************************
    DEPLOY TASKS
*****************************************************************************/
gulp.task('deploy', ['buildjs', 'buildcss'], function() {
    return true
});