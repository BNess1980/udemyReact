var gulp = require('gulp'),
connect = require('gulp-connect'),
requireDir = require('require-dir')('./gulp-tasks');

// Watch for file changes
gulp.task('watch', function() {
	// Watches for changes in style.sass and runs the sass task
	gulp.watch('sass/style.scss', ['sass']);
	gulp.watch('src/**/*.jsx', ['browserify']);
});

// Simple Local Server
gulp.task('connect', function () {
	connect.server({
		root: 'public',
		port: 8026
	});
});

// Default 'gulp' terminal command
gulp.task('default', ['connect','watch']);
