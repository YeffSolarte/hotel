var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');

var paths = {
  sass: ['./src/scss/**/*.scss']
};

/*gulp.task('default', ['styles']);*/

gulp.task('styles', function(done) {
  gulp.src('./src/scss/custom-style/*.scss')
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(gulp.dest("./src/assets/css/"))
    .on('end', done);
});

gulp.task('default', function () {
  gulp.watch('./src/scss/custom-style/*.scss', ['styles']); // Vigila cambios en los estilos
});