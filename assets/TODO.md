## reset

1. extreme; for resetting children of an element
http://cleanslatecss.com/#Why-would-I-need-it

2. meyer and adaptations thereof
http://meyerweb.com/eric/tools/css/reset/
http://html5doctor.com/html-5-reset-stylesheet/

ben frain's new one
https://benfrain.com/a-modern-css-reset-with-caveats/?ref=heydesigner-weekly

https://github.com/nicolas-cusan/destyle.css


## core setup

review mechanics of font-size vs root-scale, vs outer-width
  apply to :root selector, not html?
test the y-/x- class usage and other co-classes on grid and flow
revamp reset
  as merge of destyle and remedy
  saving only opinionated typo resets

## about hover

add the hover media query to the hover classes!! in theme
https://twitter.com/souporserious/status/1075053627025149955

## more classes

`xf` transform base class
  .xf { transform: translate(var(--trans-x),var(--trans-y),var(--trans-z),) scale(var(--scale)) rotate(var(--rotate)); }
  translate-x -y -z
  rotate
  scale

`aspect` base class
  .aspect-3-2, etc.


## re-org

homework/
  reset
      [element].reset -- element specific resets
  setup-core (implicit)
      (m), :root
  setup-page (explicit)
      wrap, peel, frame, bleed,
  setup-stack (implicit)
      stack, plain, chain, (shim)
  setup-grid (implicit)
      grid, flow, cols, rows
  setup-cell (explicit)
      span, push, pull, col, row
  setup-typo (implicit)
      f, trim
      ? fs- italic, normal
      ? fw- bold, bolder, light, etc. normal
      `.caps` (and `.smcp`) co-class(es) for `.f-` classes, with different spacing
  setup-atomic (explicit)
      m+, p+, w, h, minh, maxh, minw, maxw
        NB: add w-viewport, h-viewport
      d, z (00-90)
      rel, fix, abs, show, hide, vhide, vshow
      a, ac, as, jc, ai, flex, fit
      op -- (opacity) 00,02,04,06,08,10
      * replace fit with obj: .obj-contain /-cover /-fill /-none /-scale-down /-bottom /-center /-left /-left-bottom /-left-top /-right /-right-bottom /-right-top /-top
      (scroll-[auto|touch]) -- should maybe just be in reset
  setup-helper (static||explicit)
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
      $colors, $patterns, $weights, $radii, $shadows, $outlines
      theme-[color]
      c-, bgc-, bdc- ,fill- ,stroke-
        -[color]
        -theme
        -contrast
        -current
      bd- bdt-, bdr-, bdb-, bdl-
        -1,-2,-3,-4,-5,-6,-7
        -s,-m,-l,...
      bg-none/0, bd-none/0, ol-0/none
      bg-[position], bg-[attachment]
      bd-collapse/-separate
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

- consider placing globals on a .homework-root class rather than :root, to reduce recalc tree size
- review icon alignment from nova-lbz; can it be generalized; does it depend upon font metrics
- create a $homework-options map
  - use-root: true -- whether to set homework CPs on :root object or on .homework-root class
  - do-trim: true -- whether to trim fonts
- implement wrap vs. peel logic:
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

## new CSS

- check out css containment
https://blogs.igalia.com/mrego/2019/01/11/an-introduction-to-css-containment/

## font and trim, v stack

This should be the new way

    .plain-ml
      p,h1,h2

    .stack.trim
      p.f-sans-m
      p.f-sans-s
      p.f-sans-xs

    f-[family]-[size]
      &.lh-loose/-tight
    fw-[weight]
    fs-[style]

## reset

consider adding this as peerDep, to reduce noise
https://github.com/nicolas-cusan/destyle.css/blob/master/Readme.md

## renames
  column-count (not 'column-count')

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
