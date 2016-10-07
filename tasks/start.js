// const del = require('del');
const path = require('path');

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');

const run = require('./_run');
const html = require('./html');

module.exports = {
  name: 'start',
  run() {
    let count = 0;
    global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
    return new Promise((resolve, reject) => {
      const config = require('../webpack.config');

      const compiler = webpack(config);
      const app = express();
      const port = 5000;

      app.use(webpackDevMiddleware(compiler, {
        stats: config.stats,
        noInfo: false,
        publicPath: config.output.publicPath,
      }));


      app.use(webpackHotMiddleware(compiler));

      compiler.plugin('done', stats =>
        run(html, {
          scripts: [`./dist/${stats.compilation.chunks.find(chunk => chunk.name === 'main').files[0]}`],
        }).then(() => {
          if (++count === 1) {
            app.use(express.static(path.join(__dirname, '../public')));

            app.get('*', (req, res) => {
              res.sendFile(path.join(__dirname, '../public/index.html'));
            });

            app.listen(port, (error) => {
              if (error) {
                console.error(error);
              } else {
                console.info(`Server is running. open http://localhost:${port}/ in your browser `);
              }
            });
          }
        })
      );
    });
  },
};
