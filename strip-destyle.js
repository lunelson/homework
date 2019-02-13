const fs = require('fs');
const path = require('path');
const stripCssComments = require('strip-css-comments');

fs.readFile(require.resolve('destyle.css'), (err, data) => {
  const out = stripCssComments(data, { preserve: false }).replace(/(\n|\s)+/g,' ').trim();
  fs.writeFileSync(path.resolve(__dirname, 'scss/_reset-destyle.scss'), `@mixin homework-reset-destyle() { ${out} }`);
});
