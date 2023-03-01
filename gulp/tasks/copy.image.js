'use strict';

module.exports = function () {
  $.gulp.task('copy:image', function () {
    $.gulp
      .src('./source/images/*.ico')
      .pipe($.gulp.dest($.config.root + '/'));

    return $.gulp
      .src('./source/images/{content,icons,slider}/*.*', {
        since: $.gulp.lastRun('copy:image'),
      })
      .pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};
