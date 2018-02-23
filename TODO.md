## take over from sass-m

inner-x($mult)
inner-y($mult)
outer-top
outer-right
outer-bottom
outer-left
size
line
auto-line

```scss
// output media and base as json
@include set-css-data((media: $media, base: $base));
```

## removals: these belong in 'homework'

inner-x($mult)
inner-y($mult)
outer-top
outer-right
outer-bottom
outer-left
size
line
auto-line

## testing

add a couple of test on value-getter-base functions

## confirm

- update mm-for related functions
- update references to line-height, font-size etc.

## keep on with structure

_index

stylesheets/

  grid/
    functions.scss
      _grid-width
      cell-width // for pushing elements

    mixins.scss
      _cell-padding
      _grid-margins
      _float-cell
      _float-grid
      _flex-cell
      _flex-grid
      _degrid
      cell
      grid
      regrid
      ungrid
      cell-push
      cell-span
      cell-cycle
      grid-debug
    setup.scss
      setup-grid

  page/
    mixins/
      outer
      wrap
      unwrap

  stack/
    mixins.scss
      stack
    setup.scss
      setup-stack

  typo/
    mixins.scss
      typo
    setup.scss
      setup-typo

  util/
    functions.scss
    mixins.scss
      clip, hide, show, hold
    setup.scss
      setup-fonts
      setup-outer
      setup-wrap
      setup-unwrap
      setup-hold
