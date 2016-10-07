const fs = require('fs');
const path = require('path');
const config = require('../config');

module.exports = {
  name: 'sitemap',
  run() {
    const urls = require('../routes.json')
            .filter(x => !x.path.includes(':'))
            .map(x => ({ loc: x.path }));
    const html = require('../templates/sitemap')({
      config,
      urls,
    });

    fs.writeFileSync(
            path.join(__dirname, '../public/sitemap.xml'),
            html
        );
  },
};

