import svgSprite from 'gulp-svg-sprite';

export const svgsprite = () => {
  return app.gulp
    .src(app.path.src.svgsprite)
    .pipe(
      app.plugins.gulpPlumber(
        app.plugins.notify.onError({
          title: 'SVG_SPRITES',
          message: 'Error: <%= error.message %>',
        })
      )
    )
    .pipe(
      svgSprite({
        mode: {
          stack: {
            sprite: '../icons/icons.svg',
            example: true,
          },
        },
      })
    )
    .pipe(app.gulp.dest(app.path.build.images))
    .pipe(app.plugins.browsersync.stream());
};
