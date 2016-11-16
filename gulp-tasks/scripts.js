var gulp = require('gulp'),
browserify = require('browserify'),
babelify = require('babelify'),
source = require('vinyl-source-stream');

gulp.task('browserify', function() {

    return browserify('./src/main.jsx')
         .transform(babelify.configure({
            presets: ["react"]
          }))
    	   // bundles it and creates a file called main.js
        .bundle()
        .pipe(source('main.js'))
        // saves it the public/js/ directory
        .pipe(gulp.dest('./public/js/'));
});
