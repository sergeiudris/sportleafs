const fs = require('fs');
const path = require('path');
const config = require('../config');

module.exports = {
  name: 'html',
  run({ scripts }) {
    const html = require('../templates/html')({
      title: 'sportleafs',
      scripts,
      config,
      isDebug: !process.argv.includes('--release'),
    });

    fs.writeFileSync(
            path.join(__dirname, '../public/index.html'),
            html
        );
  },
};

