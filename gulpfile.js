var gulp = require('gulp'),
    imagemin = require('gulp-imagemin'),
    config = {
      src: 'src/css/images/*',
      dist: 'dist/css/images',
      build: 'build/css/images'
    };

gulp.task('imagemin:build', function () {
  return gulp.src(config.src)
    .pipe(imagemin({
      optimizationLevel: 5,
      progressive: true
    }))
    .pipe(gulp.dest(config.build));
});

gulp.task('imagemin:dist', function () {
  return gulp.src(config.src)
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true
    }))
    .pipe(gulp.dest(config.dist));
});

gulp.task('build', ['imagemin:build']);
gulp.task('dist', ['imagemin:dist']);
