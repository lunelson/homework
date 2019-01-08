    @function solo-span
    @function solo-push

    @function flow-span
    @function flow-push

    @mixin solo-cell($span, $push-l, $push-r) {}
    @mixin solo-cells($span, $push-l, $push-r) {}

    @mixin flow-cell($span, $push-l, $push-r) {}
    @mixin flow-cells($span, $push-l, $push-r) {}

    .span-[n]
    .push-[l|r]-[n]

    .flow-[y], .flow-x-[x]

      .span-all
      .span-auto
      .span-[x]
      .push-[l|r]-[x]

    .grid-[y], .grid-x-[x]

      .span-all
      .span-auto
      .span-[x]
      .span-y-[y]
      .row-[s]-[e],
      .col-[s]-[e],



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
