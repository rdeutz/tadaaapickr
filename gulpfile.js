var gulp            = require('gulp');
var concat          = require('gulp-concat');
var less            = require('gulp-less');
var clean           = require('gulp-rimraf');
var rename          = require('gulp-rename');
var minifycss       = require('gulp-minify-css');
var uglify          = require('gulp-uglify');
var sym             = require('gulp-sym');

/* dirs */
var dist   = 'dist';
var jsDir  = 'js';
var cssDir = 'css';

// Clean
gulp.task('clean', function() {
    return gulp.src([dist + '/*.css', dist + '/*.js'], {read: false})
        .pipe(clean());
});


var scriptsEn = [
    jsDir + '/CalendarTools.js',
    jsDir + '/tadaaapickr.js'
]

gulp.task('mergeEn', function(){
    return gulp.src(scriptsEn)
        .pipe(concat('tadaaapickr.en.js'))
        .pipe(gulp.dest(dist))
        .pipe(rename('tadaaapickr.en.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

var scriptsAll = [
    jsDir + '/CalendarTools.js',
    jsDir + '/tadaaapickr.js',
    jsDir + '/locales/dates.locales.fr.js',
    jsDir + '/locales/dates.locales.ja.js',
    jsDir + '/locales/dates.locales.de.js'
]

gulp.task('mergeAll', function(){
    return gulp.src(scriptsAll)
        .pipe(concat('tadaaapickr.pack.js'))
        .pipe(gulp.dest(dist))
        .pipe(rename('tadaaapickr.pack.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dist));
});

gulp.task('merge', function(){
    gulp.start('mergeEn');
    gulp.start('mergeAll');
});

gulp.task('copy', function() {
    gulp.src(cssDir + '/*')
        .pipe(gulp.dest(dist));

});

gulp.task('default', ['clean'], function (){
    gulp.start('merge', 'copy');
});

