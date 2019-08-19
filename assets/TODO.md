## what to test

columns
  span-max, span-min, span-safe
    - can't exceed global max (current)
    - can't exceed local max (css 4)

theme
  .theme-[theme] switching
  .key-[color] switching

typo
  lerp expressions in font defs
    font-size ?? can I use decalc() ?
    line-height (works with decalc())
    letter-spacing (works with decalc())
  lerp expressions in font-mod defs (unclear WRT unit/unitless...?)
  plain, plain-[f], plain-[f]-[mod] declinations/fallbacks
    !! correct minimum behaviour even if no user .plain- styles have been defined



## rule color, width: column/theme setup

multi-column and grid support drawing rules
need a shorthand class and way to drive like borders and outlines

## inheritance

- !!! re-check inheritance mechanisms, as with --stack-gap
- need a test/proof suite here

      .stack-l -> --stack-gap: unset
        .stack-m -> --stack-gap: l
          .stack-s -> --stack-gap: m
            * -> --stack-gap: s
        .stack -> --stack-gap: l (could set --stack-gap: --inner-x on bare class!?)
          .stack-s -> --stack-gap: l
            * -> --stack-gap: s

      .flow-l -> --row-gap: l
        .span-(x) -> --row-gap: l
          .flow -> --row-gap: l (could set --row-gap: --inner-x on bare class!?)
        .span-(x) -> --row-gap: l
          .flow-m -> --row-gap: m

      .grid-l -> --row-gap: l
        .span-(x) -> --row-gap: l

      .grid-l -> --row-gap: l
        .grid-m -> --row-gap: m

## wrap vs. peel logic

!! test these at the same time

    wrap-last, wrap-[m],
    wrap-each, [m__]wrap-each
    wrap(-center)
      [m__]peel(-center)-center -> peel
      [m__]peel(-center)-right -> peel-right
      [m__]peel(-center)-left -> peel-left
    wrap-right
      [m__]peel(-right)-center -> peel-from-right
      [m__]peel(-right)-right -> peel-from-right
      [m__]peel(-right)-left -> peel-from-right
    wrap-left
      [m__]peel(-left)-center -> peel-from-left
      [m__]peel(-left)-right -> peel-from-left
      [m__]peel(-left)-left -> peel-from-left

## global options

create a $homework-options map:
  core
    element on which to define all globals (default is :root)
      e.g. use-root: true -- whether to set homework CPs on :root object or on .homework-root class
  theme
    dark or lite
  typo
    trim or not
    non-trim elements in .plain



## font and trim logics

- plain-(y) classes should get a --stack-gap variable pre-set
- lh-loose and lh-tight classes to be somehow auto-generated?

## reset

1. extreme; for resetting children of an element
http://cleanslatecss.com/#Why-would-I-need-it

2. meyer and adaptations thereof
http://meyerweb.com/eric/tools/css/reset/
http://html5doctor.com/html-5-reset-stylesheet/

3. ben frain's new one
https://benfrain.com/a-modern-css-reset-with-caveats/

4. destyle
https://github.com/nicolas-cusan/destyle.css

## core setup

review mechanics of font-size vs root-scale, vs outer-width
  apply to :root selector, not html?

## more classes

(max-) `aspect` base class (use flex max aspect method)
  .aspect-3-2, etc.

`xn` transition base class
  xn { transition: ... }
  --transition-delay: 0s
  --transition-duration: 0s
  --transition-property: all
  --transition-timing-function: ease

`xf` transform base class (complicated!!)
  .xf { transform: translate3d(var(--translate-x),var(--translate-y),var(--translate-z),) scale(var(--scale)) rotate(var(--rotate)); }
  --translate-x -y -z
  --rotate
  --scale

  xf-origin, xf-... (more classes required)


## re-org

homework/
  reset
      [element].reset -- element specific resets
  setup-core (implicit)
      (m), :root
  setup-outer (explicit)
      wrap, peel, frame, bleed,
  setup-stack (implicit)
      stack, plain, chain, (shim)
  setup-grid (implicit)
      grid, flow, cols, rows
  setup-cell (explicit)
      span, push, pull, start, end
      span + start/end
      start-end-s-e
      col, row
  setup-typo (implicit)
      f, trim
      ? fs- italic, normal
      ? fw- bold, bolder, light, etc. normal
      `.caps` (and `.smcp`) co-class(es) for `.f-` classes, with different spacing
  setup-inner (explicit)
      m+, p+, w, h, minh, maxh, minw, maxw
        NB: add w-viewport, h-viewport
      d, z (00-90)
      rel, fix, abs, show, hide, vhide, vshow
      a, ac, as, jc, ai, flex, fit
      op -- (opacity) 00,02,04,06,08,10
      * replace fit with obj: .obj-contain /-cover /-fill /-none /-scale-down /-bottom /-center /-left /-left-bottom /-left-top /-right /-right-bottom /-right-top /-top
      (scroll-[auto|touch]) -- should maybe just be in reset
  setup-utilities (static||explicit)
      (optional) clearfix, flt-left/-right/-none, clr-left/-right/-none
      skip -- see https://medium.freecodecamp.org/how-to-design-website-layouts-for-screen-readers-347b7b06e9cc
      clip, over-[auto|scroll|hidden|visible], clip-[x|y], over-[x|y]-[auto|scroll|hidden|visible]
      trim, trap, stop,
      fade (opacity)
      pill (border-radius: 50vmin)
      truncate, break, ws (white-space)
      aspect
      pe (pointer-events)
      resize -- x|y|none|both
      cursor -- pointer|default
      select -- none, auto, text
  setup-theme
      $colors, $patterns, $widths, $radii, $shadows, $outlines
      theme-[color]
      fg-, bg-, bd- ,fill- ,stroke-, rule-
        -[color]
        -theme
        -contrast
        -current
      bd- bdt-, bdr-, bdb-, bdl-
        -0,-1,-2,-3,-4,-5,-6,-7
          0,1,2,3,4,6,8
          0,4,8,12,16,20,24
        -s,-m,-l,...
      bg-none/0, bd-none/0, ol-0/none
      ~~bg-[position], bg-[attachment]
      ~~bd-collapse/-separate
      radius- t-, r-, b-, l-, tl-, tr-, bl-, br-,
        s, m, l, max,
        oval
      shadow
        sm, md, lg
        none/0
        -ol-
          sm, md, lg
  setup-state
      .hover__
      .focus__
      .active__
      .gr-hover__
      .group-hover__ (requires group)
      .focus-in__
      .focus-within__


## next level

- review icon alignment from nova-lbz; can it be generalized; does it depend upon font metrics


## new CSS

- check out css containment
https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/

## othernames

inset
hang
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
alpha/omega
  (see that saved tweet, from earlier)

```scss
$root-defaults: (

  // bases
  font-size: 16px,
  line-height: 1.25,
  inner-x: 1rem,
  inner-y: 1.25rem,
  outer-top: 2rem,
  outer-right: 2rem,
  outer-bottom: 2rem,
  outer-left: 2rem,
  column-count: 12,

  // variations
  font-mods: ( sans: ( m: 16px 1.25 ) ),
  inner-x-mods: ( m: 1rem ),
  inner-y-mods: ( m: 1rem ),
);

$media-defaults: (
  s: (breakpoint: 30em),
  m: (breakpoint: 45em),
  l: (breakpoint: 67.5em),
);
```
