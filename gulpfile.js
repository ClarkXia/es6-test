const gulp = require('gulp');
const babel = require('gulp-babel');
const livereload = require('gulp-livereload');
const webserver = require('gulp-webserver');

gulp.task('es6',function(){
	gulp.src('scripts/**/*.es6')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('temp/scripts'))
		.pipe(livereload());
})
gulp.task('watch',function(){
	livereload.listen();
	gulp.watch('scripts/**/*.es6',['es6']);
})

gulp.task('server',function(){
	gulp.src('').pipe(webserver({
		livereload : true,
		open:true
	}))
})

gulp.task('start',['server','watch']);