// @ts-nocheck

var hooks = require('require-extension-hooks');

hooks('.scss').push(function() {
  return `
    const path = require('path');
    const writeFile = require('write');
    const globby = require('globby');
    const test = require('ava');

    const compilers = {
      dartsass: require('sass'),
      libsass: require('node-sass'),
    };

    function sassRender(sass, file, outFile) {
      return new Promise((resolve, reject) => {
        sass.render({
          file,
          outFile,
          includePaths: [path.resolve(__dirname, '../node_modules')],
          outputStyle: 'expanded',
          precision: 10
        }, (err, data) => {
          if (err) reject(err.formatted);
          else resolve(data.css.toString());
        });
      });
    }

    Object.keys(compilers).forEach(compiler => {
      const outFile = path.join(__dirname, 'scratch', path.relative(__dirname, __filename)).replace(/\.scss$/, '.'+compiler+'.css');
      test(path.basename(__filename, path.extname(__filename))+'['+compiler+']', t => {
        return sassRender(compilers[compiler], __filename, outFile).then(css => {
          writeFile.sync(outFile, css);
          t.snapshot(css);
        });
      });
    });
  `;
});

require('../output-grid.scss');

// var hook = require('node-hook');
// hook.hook('.scss', (source, filename) => {
//   return `const bar = "hello world"`;
// });
// console.log(require('../output-core.scss'));
