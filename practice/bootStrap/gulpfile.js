

var gulp = require('gulp');
var scss = require('gulp-sass');

gulp.task('build',()=>{
   gulp.src('./src/*.scss')
        .pipe(scss().on('error', scss.logError))
        .pipe(gulp.dest('./dist'));
})

gulp.task('watch',()=>{
    gulp.watch('./src/**/*.scss',['build']);
})

gulp.task('default',['build','watch']);
