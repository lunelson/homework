homework-setup

- run m-setup, if not done-m
- calculate the gcd-columns thing
- set $done-homework to true, at end
-

defaults/index

- factor out the stack and typo mixins, so they can work with WYSIWYG custom defs
- bring all globals back to defaults, or setup-index
- run a setup mixin, which inits sass-m, then runs all local setups

    curr-m

    curr-font
    curr-size
    curr-line
    curr-stack


# homework

functions
mixins
resets
setups
  support
    atomic-support
    stack-support
    general-support
  atomic
  general
  grid
  stack


## abstract
  homework/
    lib/
      0-variables
        base,media,fonts,colors,layers
      1-functions
        media,grid,etc...
    resets/
      0-root,elem
      1-form,input
      2-table
      3-image,embed
    setups/
      00-atomic
      01-general
      10-debug
      11-modal (layer, scroll)
      20-outer, spread
      21-wrap, peel
      30-grid, cell
      31-row, col
      40-inset, outset, chain
      50-font, stack, trim
      60-icon
  config
    base media fonts colors layers|z-index
  import

## global
  10-root
  20-elem
  30-image
  31-embed
  40-table
  50-form
  51-input
  60-button
  61-link
  62-theme

## module
