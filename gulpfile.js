var gulp = require('gulp'),
    less = require('gulp-less'),
    ugly = require('gulp-uglify'),
    cssmin = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('less', function () {
  var dev = './bin/dev/css';

  gulp.src('./less/jquery.jcrop.less')
    .pipe(less())
    .pipe(gulp.dest(dev));

  gulp.src('./less/**/*.!(less)')
    .pipe(gulp.dest(dev));
});

gulp.task('less.minify', ['less'], function () {
  var dist = './bin/dist/css';

  gulp.src('./bin/dev/css/jquery.jcrop.css')
    .pipe(rename('jquery.jcrop.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest(dist));

  gulp.src('./bin/dev/css/**/*.!(css)')
    .pipe(gulp.dest(dist));
});

gulp.task('script', function () {
  gulp.src('./js/jquery.jcrop.js')
    .pipe(gulp.dest('./bin/dev/js'));
});

gulp.task('script.minify', ['script'], function () {
  gulp.src('./bin/dev/js/jquery.jcrop.js')
    .pipe(rename('jquery.jcrop.min.js'))
    .pipe(ugly({
      preserveComments: "some"
    }))
    .pipe(gulp.dest('./bin/dist/js'));
});

gulp.task('default', ['script.minify', 'less.minify']);
