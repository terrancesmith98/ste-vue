const mix = require('laravel-mix');
module.exports = {
    module: {
      rules: [
        // ... other rules omitted

        // this will apply to both plain `.scss` files
        // AND `<style lang="scss">` blocks in `.vue` files
        {
            test: /\.sass$/,
            use: [
              'vue-style-loader',
              'css-loader',
              {
                loader: 'sass-loader',
                options: {
                    indentedSyntax: true,
                    // sass-loader version >= 8
                    sassOptions: {
                      indentedSyntax: true,
                    },
                    extractVueStyles: true,
                    globalVueStyles: 'resources/scss/utilities/_variables.scss',


                }
              }
            ]
          }
      ]
    },
    // plugin omitted
  }

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);
