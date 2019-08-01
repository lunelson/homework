<h1 align="center">
  <img src="https://github.com/lunelson/homework/raw/master/homework.svg?sanitize=true" width="200px" alt="Homework.css Logo">
  <p>Homework</p>
</h1>

<h3 align="center">Über-responsive CSS design primitives using custom-properties</h4>

<p align="center">
  <a href="#releases"><img src="https://img.shields.io/npm/v/@lunelson/homework.svg?style=flat-square" alt=""></a>
  <a href="#license"><img src="https://img.shields.io/github/license/lunelson/homework.svg?style=flat-square" alt=""></a>
  <a href="#download"><img src="https://img.shields.io/npm/dt/@lunelson/homework.svg?style=flat-square" alt=""></a>
</p>

<p align="center">
  <a href="#getting-started">Getting started</a>&nbsp;|&nbsp;
  <a href="#backstory">Backstory</a>
</p>

## Concept

## Setup

### Install from NPM
This Sass library has dependencies on a few other Sass libraries, but they have been declared as `peerDependencies` rather than `dependencies`, due to the fact that Sass does not actually have a module system, which is to say no path-resolution nor caching nor de-duplication mechanisms. Sass will attempt to import every file for which it sees an `@import` statement (even if it has already been imported), and while Sass can be configured to look in `node_modules` for imports, it does not use the Node path-resolution algorithm so it will not find nested modules (although this is less a problem with more recent versions of Node/NPM). For this reason the recommended setup is for the user to install all the peer-dependencies and import them all explicitly at the top of the Sass codebase.

```bash
# main library
npm i @lunelson/homework
# peer dependencies
npm i @lunelson/sass-calc @lunelson/sass-maps-next @lunelson/sass-throw @lunelson/sass-u mathsass
```

### Import Sass entry file(s)
This assumes you have a Sass setup which includes `node_modules` among its import paths. As noted above, the peer dependencies must be explicitly imported; the recommended import source-order is below. NOTE: mathsass is optional; it can be left out if you have a Sass setup which injects math functions, or if you are not using the `theme` module.
```scss
// peer dependencies
@import '@lunelson/sass-throw/index';
@import '@lunelson/sass-maps-next/index';
@import '@lunelson/sass-calc/index';
@import '@lunelson/sass-lerp/index';
@import '@lunelson/sass-u/index';

// main library
@import '@lunelson/homework/index';
```

Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores obcaecati tempora at commodi nulla tempore harum, officia distinctio doloremque quibusdam illo error ad laborum rem vitae, illum sit impedit quis.

### Import/Require the JS entry
```js
// ES6+
import '@lunelson/homework';

// ...or CommonJS
require('@lunelson/homework);
```

## Usage and walkthrough
    @include homework-reset;
    @include homework-setup;

### The "reset" module

- imports [destyle.css](https://nicolas-cusan.github.io/destyle.css/)
-

### The "core" and "root" setup modules
#### the internal Sass maps which run the system and shadow the custom properties
#### the `:root` custom properties generated

### The "atomic" setup module
  iy, ix -- see stack, column
  px, py, pt, pr, pb, pl
  mx, my, mt, mr, mb, ml
  mx-neg, my-neg, mt-neg, mr-neg, mb-neg, ml-neg
  mx-auto, my-auto, mt-auto, mr-auto, mb-auto, ml-auto

### The "outer" setup module
    wrap, peel
    wrap-left/-right, peel-left/-right
    frame, bleed
    frame-left/-right, bleed-left/-right

### The "stack" setup module
    stack, plain, chain
    shim

### The "columns" setup module
    multi-[c], flow-[y], grid-[y]
    columns-[c], rows-[r]
    push-[c], pull-[c], push-r-[c], pull-r-[c],
    span-[c], start-[c], end-[c], column-[s]-[e]
    span-all, span-auto, span-safe
    (CSS4) span-max-[c], span-min-[c]
    row-span-[r], row-start-[r], row-end-[r], row-[s]-[e]
#### the approach

#### the mechanisms in play
- [Multi-column Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Columns)
- [Flexible Box Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout)
- [Grid Layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
#### on the border-box barrier
some of these classes are inside the border, some outside

### typography
  f, trim, stack > f, plain > *

### theme
### utils
### debug

## on the design process

To me, the whole idea of custom properties is that they should work efficiently with inheritance and cascade enabling precise and powerful control.

So bare base classes like ‘f-sans’ and ‘aspect’ are good, even when they have little or no styles on their own: they are waiting for a different CP value to be plugged in.

For TYPO classes, these could be both —font-size and —line-height; or if you’ve got an expression for line-height you could get away with just —font-size

Similarly when you’re scaffolding out a site, especially if you’re ‘designing in code’ you you can tweak —stack-gap, —chain-gap, —column-gap and —row-gap as you go, and then review your rogue values later to see what kinds of values you need to plug back in to your base config

...Because the standard config can be restrictive or tedious when you are building, if you have to keep going back to define a value at multiple breakpoints before you can use it.

Homework is a WIP Sass CSS framework, focused on design-oriented generic-object and utility classes on a basis of responsive (`@media`-scoped) CSS custom properties.

- hybrid utility-first / object-oriented approach, focused on layout and typography "primitives"
- responsive (@media-scoped) values

## Compatibility

<p>
  <img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1564649826/caniuse-embed/css-variables-2019-8-1.png" alt="Data on support for the css-variables feature across the major browsers from caniuse.com">
</p>

As stated above, this framework heavily uses CSS Custom Properties. There is a legacy branch, but it generates way more code.

### About post-processing

- no browser-prefixing is provided, so use autoprefixer with grid: true
- be careful about broad use of postcss however, many minification packages will break complex `calc()` expressions, which are used extensively here

### About the `#legacy` branch
(embed caniuse for custom properties)
talk about legacy branch
- not officially supported
- will generate more code

## FAQ

- why is this package name-spaced to `@lunelson` on NPM?

## Acknowledgements

Automated browser testing services provided by BrowserStack

<a href="//browserstack.com/">
  <img src="assets/browserstack-logo.png" width="300">
</a>
