let mix = require("laravel-mix");

mix
  .setPublicPath("dist")
  .js("app/js/app.js", "dist/app.js")
  .sass("app/style/style.scss", "dist/style.css")
  .options({
    processCssUrls: false,
  })
  .version();
