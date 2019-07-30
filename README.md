<h1 align="center">
  <img src="https://github.com/lunelson/homework/raw/master/homework.svg?sanitize=true" width="200px" alt="Homework.css Logo">
  <p>Homework</p>
</h1>

<h3 align="center">Über-responsive CSS custom-property-driven design abstractions</h4>

<p align="center">
  <a href="#releases"><img src="https://img.shields.io/npm/v/@lunelson/homework.svg?style=flat-square" alt=""></a>
  <a href="#license"><img src="https://img.shields.io/github/license/lunelson/homework.svg?style=flat-square" alt=""></a>
  <a href="#download"><img src="https://img.shields.io/npm/dt/@lunelson/homework.svg?style=flat-square" alt=""></a>
</p>

<p align="center">
  <a href="#getting-started">Getting started</a>&nbsp;|&nbsp;
  <a href="#backstory">Backstory</a>
</p>

## Concepts
### reset

- imports [destyle.css](https://nicolas-cusan.github.io/destyle.css/)
-

### core
### root
### atomic
### wrap/peel
### frame/bleed
### stack, chain
### flow/grid
### span, push, pull, col, row
### font, plain
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

## Getting started

### Install via NPM
```bash
# install main library
npm i @lunelson/homework

# install its peer dependencies
npm i @lunelson/sass-calc @lunelson/sass-maps-next @lunelson/sass-throw @lunelson/sass-u mathsass
```

### Import Sass entry file(s)
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


## Acknowledgements

Automated browser testing services provided by BrowserStack

<a href="//browserstack.com/">
  <img src="assets/browserstack-logo.png" width="300">
</a>
