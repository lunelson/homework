### thotz

- use the match flag in ava to only run certain tests
  https://github.com/avajs/ava/blob/master/docs/05-command-line.md


    .flow-[y] .cols-[x] .rows-[y]
      .span-all
      .span-auto
      .span-[n] / w-[n]
      .push-r-[n] / mr-[n]

    .grid-[y] .cols-[x] .rows-[y]
      .col-2-6
      .row-1-5

      @include solo-cell((...))
            @include flow-cell((...))

```scss
.test {
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-template-areas: inherit;
}

.thing {
  grid-column-start: span 2;
  grid-column-end: auto;
}

.span {
  grid-column-start: span 2;
  grid-column-end: span 2;
  grid-column: span 2;
  grid-row-start: span 2;
  grid-row-end: span 2;
  grid-row: span 2;
  grid-area: span / span;
}

.span-x {}
.push-l-x {}
.push-r-x {}

.solo.span-2 {

}

.stack
  .shim-l
.solo.span-4.push-l-2 {

}
```
