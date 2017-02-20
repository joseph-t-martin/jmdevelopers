var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('browserify', function() {
    return browserify()
        .require('js/app.js', { entry: true,
            extensions: ['.js'],
            debug: true
        })
        .transform(babelify, {presets: ["es2015", "stage-0", "react"]})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('js'));
});

gulp.task('watch', function() {
    gulp.watch('**/*.js', ['browserify']);
});