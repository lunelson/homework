## NEW NEW

mcol-(gap)
mcol-grid-(row-gap)
flow-(gap)
flow-(col-gap)-(row-gap)
flow-grid-(row-gap)

- mcol-grid should default to span the number of local grid columns at that point
- base flow-grid child should default to span one column, like grid and mcol-grid

### questions
- can flow and mcol classes self-trim ? NO because their margins are on the outside
-
## new naming structure

--root-columns
--global-columns
--local-columns
--multi-columns
--multi-divisor

--column-span
  --column-span-proxy
--column-push
--column-push-r

## start/end span logic

base(start)
  --column-start: 1

base(end)
  --column-end: var(--global-columns + 1)
  --column-span: calc(end)

.start-(s)
  --column-start: s;
  --column-span: calc(var(--column-span-proxy, var(--column-count)) - var(--column-start));
  --column-rest: calc(var(--column-span, var(--column-count)) - var(--column-start));

.end-(e)
  --column-end: e;
  --column-span: calc(var(--column-span-proxy, var(--column-count)) - var(--column-end));
  --column-rest: calc(var(--column-span, var(--column-count)) - var(--column-end));

.span-(n);
  --column-span: n !important;
  --column-rest: var(--column-span) !important;

.start-(s).span-(n)
  (should work)

.end-(n).span-(n)
  (should work)

.start-(s).end-(e)
  --column-span: calc(var(--column-end) - var(--column-start)) !important;
  --column-span: #{abs(e - s)} !important;

## INHERITANCE LOGIC II

grid
  columns: --local-columns, --global-columns

flow > span
  width: (--column-span, --global-columns) / (--local-columns, --global-columns)

grid > *
  column: span --column-span OR --column-count / span --column-span OR --column-count

mcol-(n)
  --multi-columns: n
  & > *
    --column-span: (--local-columns, --global-columns) / (--multi-columns, 1)
    //--local-columns: (--column-span, --global-columns) / (--multi-columns, 1)

flow > span-(n)
  --column-span: n
  > * --local-columns: n

grid > span-(n)
  --column-span: n
  --local-columns: n

start-(s).end-(e)
  --column-span: e - s

start-(s).end-neg-(e)
  --column-span: (--local-columns, --global-columns) - e - s
==

flow > *
  width = span OR global / local OR global

grid
  columns = span OR global

grid > *
  span = span OR global

span-n
  span = n

span-n > *
  local = n

flow > span-n.grid
  span = n
  columns = span

flow > span-n.mcol-k
  span = n
  multi = k
  > * > *
    local = span OR global / multi

## this is something

mcol-3
  --multi = 3
  > grid
    --span = -local OR global / 3 = 4
    columns = --span = 4
  > flow
    --span = -local OR global / --multi = 12/3 = 4
    --child = -local OR global / --multi = 12/3 = 4
    > *
      -local = child = 4
      width: --span OR global / -local OR global = 4 / 4
    > span-2
      -local = child = 4
      span = 2
      width: --span OR global / -local OR global = 2 / 4

mcol-3.span-6
  span = 6
  multi = 3
  > grid
    -local = 6
    span = (-local OR global) / multi = 2
    columns = span = 2
  > flow
    -local = 6
    span = (-local OR global) / multi = 2
    > *
      -local: span
      width = span OR global / -local OR global = 3 / 6

mcol-k.span-n
  span = n
  multi = k
  > grid
    columns = span (false)
