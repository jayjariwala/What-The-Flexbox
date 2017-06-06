var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
gulp.task('styles',function(){
 gulp.src('assets/css/styles.css')
  .pipe(autoprefixer())
  .pipe(gulp.dest('build'))
})
gulp.task('watch',function(){
  gulp.watch('assets/css/styles.css',['styles'])
})
