### root (global) properties

One of Homework's main ideas, is not only to drive it's various utility-object classes with responsive, cascading CSS custom properties, but also to expose them in a way that allows project-specific additions and extensions, as well as on-the-fly customization of any of its classes.

The following is a list of the custom properties that are generated from a typical configuration:

#### core

layout, global, static

    --breakpoint-[m]
    --outer-width-[m]

layout, global, responsive

    --breakpoint
    --base-font-size
    --outer-width (breakpoint / base-font-size)
    --base-columns
    --outer-top
    --outer-right
    --outer-bottom
    --outer-left
    --inner-x
    --inner-y
    --inner-x-[x] (inner-x-mods || inner-mods)
    --inner-y-[y] (inner-y-mods || inner-mods)

typography, global, responsive

    --font-size-[f]-[s]
    --line-height-[f]-[s] (if given)

#### typo

typography, global, static

    --font-family-[f]
    --font-feature-settings-[f]
    --line-height-[f] (if configured globally)
    --letter-spacing-[f] (if configured globally)

#### theme

theme, global, static

    --color-[c]
    --contrast-color-[c]
    --overlay-color-[c] (coming soon)
    --radius-[r]
    --stroke-[w]
    --opacity-[0] ?? (no, should just be 1-10)

### base-classes and class (local) properties

Local custom properties are static in the sense that they are not declared at different breakpoints; but they often refer to dynamic ones which are.

layout, local -- (grid, flow, span, push, pull, col, row, cols, rows) (stack, chain)

    --gap-x
    --gap-y
    --push-r
    --push-l
    --span-x
    --span-y
    --col-start / start-x
    --col-end / end-x
    --row-start / start-y
    --row-end / end-y
    --cols
    --rows

atomic, local -- m-, m-neg- p-

    --mt, r, b, l
    --pt, r, b, l

typography, local -- (f-, plain > *)

    --font-family -> --font-family-[f]
    --letter-spacing -> --letter-spacing-[f]
    --line-height -> --line-height-[f]
    --font-size
    --trim-sides
    --trim-top
    --trim-bottom
    --trim-top-adjust
      --offset-capline
      --offset-baseline
      --adjust-adjacent

theme -- fg, bg, bd, ol, fill, stroke, round,

    --fg-color
    --bg-color
    --bd-color
    --ol-color
    --fill-color
    --stroke-color
    --fg-contrast-color
    --bg-contrast-color
    --bd-contrast-color
    --ol-contrast-color
    --fill-contrast-color
    --stroke-contrast-color
    --theme-color
    --theme-contrast-color
    --fg-opacity
    --bg-opacity
    --bd-opacity
    --ol-opacity
    --fill-opacity
    --stroke-opacity
