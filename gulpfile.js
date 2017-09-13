/* https://gist.github.com/michalochman/d64360541a484e16817c */

const gulp = require('gulp');
const browser = require('gulp-browser');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

const transforms = [
  {
	  transform: 'babelify',
	  options: {
	    presets: ['env', 'react', 'minify'],
      global: false, // true for production
      sourceMaps: true
	  }
  }
];

gulp.task('default', function() {
  return gulp.src('src/index.js')
    .pipe(sourcemaps.init())
    .pipe(browser.browserify(transforms))
    .pipe(rename('app.js'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dest'));
});
