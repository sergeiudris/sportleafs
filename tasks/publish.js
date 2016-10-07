const fs = require('fs');
const path = require('path');
const config = require('../config');
const firebase = require('firebase-tools');
const run = require('./_run');
const build = require('./build');

module.exports = {
  name: 'publish',
  run() {
    return Promise.resolve()
            .then(() => run(build))
            .then(() => firebase.login({ nonInteractive: false }))
            .then(() => firebase.deploy({
              project: config.project,
              cwd: path.join(__dirname, '../'),
            }))
            .then(() =>  setTimeout(() => process.exit()));
  },
};

