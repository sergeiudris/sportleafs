const del = require('del');
// const path = require('path');

module.exports = {
  name: 'clean',
  run() {
    return del(['public/dist/*', '!public/dist/.git'], { dot: true });
  },
};
