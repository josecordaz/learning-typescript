
var gulp = require('gulp');
var ts = require('gulp-typescript');

gulp.task('default', function () {
    return gulp.src('source/*.ts')
        .pipe(ts({
            noImplicitAny: true,
            outFile: 'output.js'
        }))
        .pipe(gulp.dest('built/local'));
});

// var gulp = require('gulp');
// var ts = require('gulp-typescript');
// var tsProject = ts.createProject('tsconfig.json');
// var sourcemaps = require('gulp-sourcemaps');

// gulp.task('scripts', function() {
//  return gulp.src('src/**/*.ts')
//  .pipe(tsProject())
//  .pipe(gulp.dest('build'));
// });

// gulp.task('watch', ['scripts'], function() {
//  gulp.watch('src/**/*.ts', ['scripts']);
// });

// gulp.task('scriptswithsourcemap', function () {
//     return gulp.src('src/**/*.ts')
//     .pipe(sourcemaps.init())
//     .pipe(tsProject())
//     .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '.'}))
//     .pipe(gulp.dest('build'));
// });