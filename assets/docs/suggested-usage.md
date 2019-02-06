### Suggested use patterns

HW can generate a lot of CSS as your config file grows; there are two suggestions I'll make concerning that.

#### in development

In a live-reloading development workflow such as with BrowserSync or Webpack Dev Server, it can slow things down to have Homework's code repeatedly regenerated, when you may be changing component CSS that comes later in the source order. I generally split my CSS in to a config file which imports Homework and it's peerDependencies, sets up global variables and then runs `homework-setup-core`. This file is then imported by a lib.scss file which further runs the remaining `homework-setup-*` mixins; while component CSS is imported in to an app.scss file that imports only the config.scss, meaning the Sass runtime variables are present but not any CSS output.

#### in production

For production, I recommend using [purgecss](https://www.purgecss.com/). This analyzes your HTML, and then strips rules and selectors from your CSS file which are not referenced. In systematically generated CSS like Homework this often results in massive savings. For statically built HTML projects, it's very straightforward to configure as an NPM script or to execute via CLI or npx; for other workflows there are How To guides in the purgecss docs.
