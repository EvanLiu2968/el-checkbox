
var gulp = require('gulp');
var less = require('gulp-less'); //compile less
var webserver = require('gulp-webserver'); //web server
var rename = require('gulp-rename'); //rename file
var basedir='';

//default task
gulp.task('default',['server','watch'],function(){
	console.info("gulp start running！");
});
//web server
gulp.task('server',function(){
	gulp.src(basedir).pipe(webserver({
		port:9988,
		path:'',
		livereload: true,         //auto reload
		directoryListing: false,  //list
		open: true,               //open broswer
		fallback: 'index.html'    //default open
	}));
});
// watch task
gulp.task('watch', function() {
	gulp.watch(basedir + 'dist/checkbox.css');
	gulp.watch(basedir + 'index.html');
	gulp.watch(basedir + 'src/*.less',['less']);
});

//compile less
gulp.task('less', function () {
	gulp.src(basedir+'src/checkbox.less')
		.pipe(less({
			compress:true
		}))
		.pipe(rename('checkbox.min.css'))
		.pipe(gulp.dest(basedir+'dist/')); //minify version
	gulp.src(basedir+'src/checkbox.less')
		.pipe(less({
			compress:false
		}))
		.pipe(gulp.dest(basedir+'dist/')); //unminify version
});
