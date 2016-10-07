const del = require('del');
const path = require('path');

const webpack = require('webpack');

const run = require('./_run');
const html = require('./html');

module.exports = {
  name: 'start-bs',
  run() {
    let count = 0;
    global.HMR = !process.argv.includes('--no-hmr'); // Hot Module Replacement (HMR)
    return Promise.resolve()
            .then(() => del(['public/dist/*', '!public/dist/.git'], { dot: true }))
            .then(() => new Promise((resolve) => {
              const bs = require('browser-sync').create();
              const config = require('../webpack.config');
              const compiler = webpack(config);
              const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, {
                publicPath: config.output.publicPath,
                stats: config.stats,
              });
              const webpackHotMiddleware = require('webpack-hot-middleware')(compiler);
              compiler.plugin('done', (stats) => {
                run(html, {
                  scripts: [`./dist/${stats.compilation.chunks.find(chunk => chunk.name === 'main').files[0]}`],
                }).then(() => {
                  if (++count === 1) {
                    bs.init({
                      server: {
                        baseDir: 'public',
                        middleware: [
                          webpackDevMiddleware,
                          webpackHotMiddleware,
                                        // Serve index.html for all unknown requests
                          (req, res, next) => {
                            if (req.headers.accept && req.headers.accept.startsWith('text/html')) {
                              req.url = '/index.html'; // eslint-disable-line no-param-reassign
                            }
                            next();
                          },
                        ],
                      },
                    }, resolve);
                  }
                });
              });
            })
            );
  },

};
