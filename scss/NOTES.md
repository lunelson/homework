## additions

`.caps` (and `.smcp`) co-class(es) for `.f-` classes, with different spacing

## refactoring

stack
  - no need for separate mixins;
  - refactor for common stack/plain styles

flow
  - see setup-flow.md
  - add span-all and span-auto classes
  - add some basic css grid support

font
  - seems pretty much done

## setups

core
- sass-m processes and API
- setup root and media maps
- output core (m) custom properties

root
- html
  - font-size, line-height

wrap
  - wrap class
  - (peel class)

frame
  - frame
  - bleed

stack
  - stack
  - plain
  - chain

font
  - setup font map
  - output font custom properties

flow
  - flow classes
  - span/-i classes (w)/-i
  - push/pull/-i (ml,mr,ml-neg,mr-neg)/-i classes

## file naming

basis-grid
basis-font
basis-core

reset-*
setup-*
