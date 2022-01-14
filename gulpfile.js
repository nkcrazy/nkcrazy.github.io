function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

const gulp = require('gulp');
const sass = require('gulp-dart-sass');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const cssmin = require('gulp-cssmin');
const dependents = require('gulp-dependents');
const debug = require('gulp-debug'); // Add this

// styles only for admin pages
gulp.task( 'styles', () => {
    return gulp.src('./assets/css/style.scss', { since: gulp.lastRun( 'styles' ) })
        .pipe(dependents())
        .pipe(debug({title: 'dependents:'}))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('./assets/css/'))
        .pipe(browserSync.stream());
});

gulp.task( 'watch', function () {
    watch('src/assets/scss/style.scss', gulp.series( 'styles' ));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task( 'build', gulp.series( 'styles' ));

gulp.task( 'default', gulp.parallel( gulp.series( 'styles' ), 'watch', 'browsersync' ));