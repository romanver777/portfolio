'use strict';

global.$ = {
  package: require('./package.json'),
  config: require('./gulp/config'),
  path: {
    task: require('./gulp/paths/tasks.js'),
    jsFoundation: require('./gulp/paths/js.foundation.js'),
    cssFoundation: require('./gulp/paths/css.foundation.js'),
    app: require('./gulp/paths/app.js')
  },
  gulp: require('gulp'),
  babel: require('gulp-babel'),
  del: require('del'),
  browserSync: require('browser-sync').create(),
  gp: require('gulp-load-plugins')(),
  uglify: require('gulp-uglify'),
};

$.path.task.forEach(function(taskPath) {
  require(taskPath)();
});

$.gulp.task('default', $.gulp.series(
  'clean',
  $.gulp.parallel(
    'sass',
    'pug',
    'js:foundation',
    'js:process',
    'copy:image',
    'copy:fonts',
    'css:foundation',
    'sprite:svg'
  ),
  $.gulp.parallel(
    'watch',
    'serve'
  )
));
