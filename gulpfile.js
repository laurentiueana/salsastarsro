var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function(){
	return gulp.src('./resources/sass/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('./resources/css'));
});

gulp.task('watch', function() {
	gulp.watch('./resources/sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.parallel('sass','watch'));
