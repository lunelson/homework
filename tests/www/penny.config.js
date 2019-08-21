const mdiContainer = require('markdown-it-container');
const mdiBlocks = require('markdown-it-custom-block');
const mdiMentions = require('markdown-it-mentions');
const mdiPrism = require('markdown-it-prism');

module.exports = {
  browsers: [ '>1% in DE', 'last 5 years' ],
  markdownItPlugins(mdi) {
    return mdi
      .use(require('markdown-it-attrs'))
      .use(mdiPrism, {
        plugins: [
          'show-language',
          'normalize-whitespace',
          'remove-initial-line-feed',
        ],
      })
      .use(mdiContainer, 'div', {
        render: function(tokens, idx, _options, env, self) {
          tokens[idx].tag = 'div';
          tokens[idx].attrs && self.renderAttrs(tokens[idx]);
          return self.renderToken(tokens, idx, _options, env, self);
        },
      })
      .use(mdiContainer, 'figure', {
        render: function(tokens, idx, _options, env, self) {
          tokens[idx].tag = 'figure';
          tokens[idx].attrs && self.renderAttrs(tokens[idx]);
          return self.renderToken(tokens, idx, _options, env, self);
        },
      })
      .use(mdiBlocks, {
        /* CUSTOM BLOCKS
          img, imgix, svg, video, youtube, twitter, codepen, codesandbox
        */
        example (arg) { return `<example-${arg}/>`; },
        video (url) {
          return `<video controls><source src="${url}" type="video/mp4"></video>`;
        },
      })
      .use(mdiMentions, { external: true, parseURL(user) { return `https://twitter.com/${user}`; } })
      .use(require('markdown-it-footnote'))
      .use(require('markdown-it-deflist'))
      .use(require('markdown-it-emoji'))
      .use(require('markdown-it-mark'))
    ;
  }
};
