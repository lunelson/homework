## basic, wrap, outer

- margin/padding need a 'zero' version e.g. `mr-0` or `mr-zero`
- grid/row need grid--null and row--null classes (no gutter)
- review the grid functions for "inside" of columns, create m-/p- classes
- differentiate a classed .cell/.col behaviour from that of unclassed direct child
- try to abstract mixins back out, so they are usable without classes
  - wrap(w), outer(l,r), spread(l,r)
  - grid(y), cell, row, col
  - stack(y), font(f), typo(t), trim?

- utility classes
  - inset-r/-l, outset-r/-l -- 1,2
  - push-r/-l, pull-r/-l, span -- n-d

- atomic classes
  - n-d
  - col-n-d
  - inner, outer

# grid, typo|type|font, stack

potential mixins

grid
cell
row
col


```scss
.stack--foo {
  @include stack('foo') {
    h3 { @include typo(xl); }
    h4 { @include typo(l); }
    p { @include typo(m); }
  }
}

```

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
