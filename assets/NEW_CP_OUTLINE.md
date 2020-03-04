## ROOT properties

(core)
  --breakpoint-[m]
  --outer-width-[m]
  [per m]
    --breakpoint
    --root-size
    --base-columns
    --outer-top, right, bottom, left
    --outer-width (breakpoint / root-size)
    --inner-x-[x]
    --inner-y-[y]
    --font-size-[f]-[s]
    --line-height-[f]-[s] (if given)

(typo)
  --font-family-[f]
  --line-height-[f]
  --letter-spacing-[f]
  --feature-settings-[f]

(theme)
  --color-[c]
  --contrast-color-[c]
  --overlay-color-[c]

(grid)
  X--column-count / base-columns / root-columns

## CLASS properties

(page)
  X--wrap-width ?? seems like I can just use outer-width ...

(grid, flow, span, push, pull, col, row, cols, rows)
  --gap-x
  --gap-y
  --push-r
  --push-l
  --span-x
  --span-y
  --cols
  --rows
  --col-start
  --col-end
  --row-start
  --row-end

(stack, chain)
  --gap-x
  --gap-y

(atomic)
  --mt, r, b, l
  --pt, r, b, l

(typo)
  --font-family -> --font-family-[f]
  --letter-spacing -> --letter-spacing-[f]
  --line-height -> --line-height-[f]
  --font-size
  --trim-sides
  --trim-top
  --trim-bottom
  --trim-top-adjust
    --trim-capline
    --trim-baseline
    --diff-ascender

(theme)
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
