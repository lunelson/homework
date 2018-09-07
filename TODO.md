## type (-) VS value/medium (--) ??

.wrap
.wrap-right
.wrap-left
.wrap-[m]
.wrap-last
.wrap-each __m

.frame __[m]
.frame-right __[m]
.frame-left __[m]
.frame-y __[m]
.frame-top __[m]
.frame-bottom __[m]

.bleed __[m]
.bleed-right __[m]
.bleed-left __[m]
.bleed-y __[m]
.bleed-top __[m]
.bleed-bottom __[m]

.stack
.stack-[y]

.chain
.chain-[y]

(SHOULD THIS BE ATOMIC??)

.font
.font-[name]-[size/line]
.[font-alias]-[size/line]

.flow
.flow-[y]

.span
.span-[n]
.span-i
.span-i-[n]

.mr-[n]
.mr-i-[n]
.mr-neg-[n]
.mr-i-neg-[n]

## new refinements

global conditions
  - should we trim typography? (exclude all reference to trim values, if not)
  - should we output explicit grid-span classes (hard spans)?
  - should the font names be used as the class base, and not with .font-[name]

## co-incident classes

.fgrid > *.stack
fgrid -> flow?



## name system revisions

// grid -> fgrid
// frame/bleed-t,r,b,l -> top, right, bottom, left
// [font] -> f-[font]
// span -> 'n' classes only
// atomic
//   w, w-0, w-100, -n-d
//   h, h-0, h-100
//   m, mx, my, mt, mr, mb, ml, -0, -auto, -n-d
//   m-neg, mx-neg, my-neg, mt-neg, mr-neg, mb-neg, ml-neg, -n-d
//   p, px, py, pt, pr, pb, pl, -0
//   none, flex, grid, block, iblock, inline
helper
  hold, stop, clip, hide, show,
  aspect

frame [& bleed], -top, -right, -bottom, left __bp
wrap [& peel], -right, -left -bp, -each __bp
stack, -y, chain, -x
[font], -fz
fgrid (flow-grid), -y, -x-x
ggrid (grid-grid), -y, -x-x
span, -n

stack
  .stop
    .flow-l.flow-x-custom
      span-1
      span-3
  grid

w, w-0, w-100, -n-d
h, h-0, h-100
m, mx, my, mt, mr, mb, ml, -0, -auto, -n-d
m-neg, mx-neg, my-neg, mt-neg, mr-neg, mb-neg, ml-neg, -n-d
p, px, py, pt, pr, pb, pl, -0


## curr
classnames
  frame, bleed
  frame-l__bp
  bleed-l__bp
  mx-0__bp

  grid
  row
  row-m
  flow
  flow-m
  grid-s
  grid-x-l

  stack-s
  chain-l

  span
  span-2
  ml-2
  mr-neg-1.mr-0__l
  push-2
  pull-1
  push-n
  push-r-neg-n__bp
  push-r-1

  pull-n__bp



renames
  font-mods
  inner-y-mods
  inner-x-mods
  column-count (not 'grid-columns')

othernames
  inset-r__m
  hang-r__m
  tuck
  slip
  edge
  shim

  drop
  slide
  lip
  rim
  lap
  well
  dent
  bump
  hump
  rise
  card
  bind
  bound

  lead


  wrap
  edge
  slip

  shift
  spread
  fringe
  verge
  skirt


## util

- move atomic and basic to 'util'
-

## basic, wrap, outer

- review the grid functions for "inside" of columns, create m-/p- classes
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
@include set-css-data((media: $media, base: $root));
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


## libsass error tracing

- "invalid null operation" -- no backtrace


## class names

inset-r__m
hang-r__m

tuck
slip
edge
shim
drop
slide
lip
lap
rise
bind
bound

lead


wrap
edge
slip

frame
bleed

shift
spread
fringe
verge
rim
skirt
