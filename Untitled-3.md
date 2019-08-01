## intrinsic responsivity

Minto seeks grid which responds based on size of its container, _without media queries_
His technique sets a minimum size on contained elements, and auto-fill to determine number of columns

My technique is to make the column widths completely flexible, but to explicitly set the number of columns, and then pass this column-span/-count information down through the nested levels of grid composition by leveraging custom-properties' inheritability down the DOM tree.

This combines with a classing approach where components are able to declare how many columns of the global grid they "span", and this will hold true regardless of their place in the DOM or the width of the current viewport. This requires using media queries at a global level, but not at a component level.

Two basic mechanisms are offered:

2. keep a consistent number of grid columns across breakpoints and apply breakpoint-specific span classes to control the width of the component and when it changes
1. apply only a single span value to a component, but change the number of global columns at breakpoints
3. a combination of the above

The demo pens below all invoke my CSS framework Homework, which is imported from a different pen. Notes on the classes being used are in the HTML section.

### notes

- the max() thing can be achieved with a .span-safe co-class
- todo: intro the flow grid as well
- todo: talk about the declarative .span class system conforms to the border-box barrier question, allowing components to declare their dimensions rather than have the grid manage them

### refs

* http://evanminto.com/blog/intrinsically-responsive-css-grid-minmax-min/


## native properties

MULTI

    column-gap
      normal = 1em in MULTI, 0 in FLEXBOX an GRID
    column-span
      (none) | all | x
      none = spans only 1 column
    column-width
      auto = width is calculated from other props
    column-count
    column-rule -- same syntax as border
    column-fill
      auto | (balance) | balance-all
      balance = balance content across columns

MULTI > *

    break-inside
      auto|avoid
    break-before
      auto|avoid|always|all
    break-after
      auto|avoid|always|all

FLEXBOX

    column-gap (no support)
    row-gap (no support)
    gap (no support)

GRID

    (grid-)column-gap
    (grid-)row-gap
    (grid-)gap -- sets both of the above (don't use it)
    grid-auto-columns
    grid-auto-rows
    grid-auto-flow
    grid-template
      grid-template-columns
      grid-template-rows
    grid-column
      grid-column-start
      grid-column-end
    grid-row
      grid-row-start
      grid-row-end


## custom properties

--column-count (--local-column-count)
--column-span (--multi-column-count)
--column-gap

--row-span
--row-gap

--column-push (can be negative, i.e. pull)
--column-push-r (can be negative, i.e. pull)

## TO BE TESTED

* width/max-width combinations with flow and solo-cell ?
* what happens in grids where .cols- and/or .rows- are explicitly declared
TODO: note about which classes are outside the border-box barrier
* all combinations of span and push within cols, flow, grid
* a "reverse stack" abstraction for using inside or coincident with stack
* span-safe co-class, preventing span-n values from exceeding available global columns
* span-max- and span-min- classes -- working only in Safari right now
* verify the following logic:

    .span-6
      --column-span = 6
      > * --local-column-count = 6
      .mcol.cols-3
        --column-count = 3
        > * --local-column-count = 3
        --column-span = 3
        --multi-column-count = 3

    .mcol-3.span-6
      --multi-column-count = 3
      --column-span = 6
      > * --local-column-count = 6

    .mcol-3
      --multi-column-count = 3
      --column-span = default
