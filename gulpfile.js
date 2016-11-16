var gulp = require('gulp'),
requireDir = require('require-dir')('./gulp-tasks');

// Watch for file changes
gulp.task('watch', function() {
	// Watches for changes in style.sass and runs the sass task
	gulp.watch('sass/style.scss', ['sass']);
	gulp.watch('src/main.jsx', ['browserify']);
});

// Default 'gulp' terminal command
gulp.task('default', ['watch']);
