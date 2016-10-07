// const del = require('del');
// const cp = require('child_process');
// const path = require('path');
const webpack = require('webpack');

const run = require('./_run.js');
const clean = require('./clean');
const compile = require('./compile');
const html = require('./html');
const sitemap = require('./sitemap');


module.exports = {
  name: 'build',
  run() {
    return Promise.resolve()
            .then(() => run(clean))
            .then(() => run(compile))
            .then((stats) => run(html, { scripts: [`./dist/${stats.compilation.chunks.find(chunck => chunck.name === 'main').files[0]}`] }))
            .then(() => run(sitemap));
  },
};
