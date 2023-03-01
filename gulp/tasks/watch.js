'use strict';

module.exports = function() {
  $.gulp.task('watch', function() {
    $.gulp.watch('./source/js/*.js', $.gulp.series('js:process'));
    // $.gulp.watch('./source/js/foundation/*.js', $.gulp.series('js:foundation'));
    $.gulp.watch('./source/style/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('./source/template/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('./source/images/**/*.*', $.gulp.series('copy:image'));
    $.gulp.watch('./source/style/fonts/**/*.*', $.gulp.series('copy:fonts'));
  });
};
