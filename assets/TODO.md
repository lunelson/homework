## preflight

** merge recent changes from kaminski branch
.flow and .grid alone, apply base inner-x/-y values
.flow and .grid support concurrent .cols/.rows classes
  .grid.cols-[n]
  .flow.cols-[n]
.col-start-[n] / .col-end-[n], to be combined with .span-[n]
.flow and .grid support span-all, span-auto ?
? is it illegal to write grid-column: span 2 / span 2;
.trim is the determinator for .f trimming, not .stack
  .stack.trim > .f-
  .trim > .f-
stack
  - no need for separate mixins;
  - refactor for common stack/plain styles
  - delete old shit

## re-org

homework/
  reset
      [element].reset -- element specific resets
  setup-modern-core (implicit)
      (m), :root
  setup-modern-page (explicit)
      wrap, peel, frame, bleed,
  setup-modern-stack (implicit)
      stack, plain, chain, (shim)
  setup-modern-grid (implicit)
      grid, flow, cols, rows
  setup-modern-cell (explicit)
      span, push, pull, col, row
  setup-modern-typo (implicit)
      f, trim
      `.caps` (and `.smcp`) co-class(es) for `.f-` classes, with different spacing
  setup-modern-atomic (explicit)
      m+, p+, w, h, minh, maxh, minw, maxw
        NB: add w-viewport, h-viewport
      d, z (00-90)
      rel, fix, abs, show, hide, vhide, vshow
      ? fs- italic, normal
      ? fw- bold, bolder, light, etc. normal
      a, ac, as, jc, ai, flex, fit
      op -- (opacity) 00,02,04,06,08,10
      * replace fit with obj: .obj-contain /-cover /-fill /-none /-scale-down /-bottom /-center /-left /-left-bottom /-left-top /-right /-right-bottom /-right-top /-top
      (scroll-[auto|touch]) -- should maybe just be in reset
  setup-modern-helper (static||explicit)
      (optional) clearfix, flt-left/-right/-none, clr-left/-right/-none
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
  setup-modern-theme
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
  setup-modern-state
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

## renames
  column-count (not 'grid-columns')

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
