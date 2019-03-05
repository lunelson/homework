## Documentation

### core (implicit)
    (m), :root
    $root, $media, $fonts, $colors

#### resets
- use destyle
- resets

#### variables: global responsive values
#### variables: global static values
#### function and mixins
- fundament of homework is the idea of responsive values , linked in turn to Sass maps and various media-query-related functions/mixins.
- it encourages the creation of dynamic ranges of values to support a systematic approach to layout and styling
  - font-size
  - line-height
  - inner/outer x/y top/right/bottom/left
  - font size/line definitions
  - global grid, with number of columns
- global values
  - font families and metrics
  - colors, grays, borders, shadows
  - z-indexes
...these are built mobile-first, recursively merged in to a sass map, as well as output to the `:root` element as global custom properties

### page classes (explicit)
    wrap, peel, frame, bleed,

### stack classes (implicit)
    stack, plain, chain, (shim)

### grid classes (implicit)
    grid, flow, cols, rows

### cell classes (explicit)
    span, push, pull, col, row

### typo classes (implicit)
    f, trim
    ? fs- italic, normal
    ? fw- bold, bolder, light, etc. normal
    `.caps` (and `.smcp`) co-class(es) for `.f-` classes, with different spacing

### atomic (explicit)
    m+, p+, w, h, minh, maxh, minw, maxw
      NB: add w-viewport, h-viewport
    d, z (00-90)
    rel, fix, abs, show, hide, vhide, vshow
    a, ac, as, jc, ai, flex, fit
    fade -- (opacity) 00, 02, 04, 06, 08, 10
    * replace fit with obj: .obj-contain /-cover /-fill /-none /-scale-down /-bottom /-center /-left /-left-bottom /-left-top /-right /-right-bottom /-right-top /-top
    (scroll-[auto|touch]) -- should maybe just be in reset

### helper (static||explicit)
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

### theme
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

### state
      .hover__
      .focus__
      .active__
      .parent-hover__ (requires .parent on the actual hover target)
      .parent-focus__ (requires .parent on the actual focus target)
      .parent-active__ (requires .parent on the actual active target)
      .focus-within__
