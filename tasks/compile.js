// const del = require('del');
// const cp = require('child_process');
// const path = require('path');
const webpack = require('webpack');

module.exports = {
  name: 'compile',
  run() {
    const config = require('../webpack.config');

    return new Promise((resolve, reject) => {
      webpack(config).run((error, stats) => {
        if (error) {
          reject(error);
        } else {
          console.log(stats.toString(config.stats));
          resolve(stats);
        }
      });
    });
  },
};
