var gulp = require('gulp');
const eslint = require('gulp-eslint');

var SCRIPTS_PATH = 'testJS/*.js';
 
gulp.task('eslint', () => {
    return gulp.src(SCRIPTS_PATH)
        .pipe(eslint({
            "rules":{
                "camelcase": 1,
                "comma-dangle": 2,
                "quotes": 0
            }
        }))
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('watch',()=>{
    gulp.watch(SCRIPTS_PATH,['eslint']);  //文件一旦发生变化 调用eslint检查
})

gulp.task('default',['eslint','watch']);