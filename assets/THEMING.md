/*

ui props:
  fg, bg,
    border -> fg
    outline -> fg
    rule -> fg
    fill -> fg
    stroke -> fg
  link,
    visited -> link
    hover -> link
    focus -> hover, link
    active -> hover, link


for each prop-alias in theme (e.g. fg, bg, bd, ol, rule, fill, stroke)
  set the color to the theme color for that
  ...with fallbacks to fg-color for all non-bg/fg colors

:root {
  --#{$prop-alias}-color: var(--theme-#{$prop-alias}-color, var(--fg-color);
}

// each alias, color in theme
:root, .theme-lite {
  --theme-#{$alias}: var(--color-#{$color});
}

// each alias, color in theme
.theme-dark {
  --theme-#{$alias}: var(--color-#{$color});
}

NAMING

--color-(color)
--contrast-(color)

--(prop)-color
--(prop)-contrast

--theme-(prop)-color
--theme-(prop)-contrast

*/

:root {
  // --#{$alias}-color: var(--theme-#{$alias}-color);
}
/*
// each alias, color in theme
:root, .theme-lite {
  --theme-#{$alias}-color: var(--color-#{$color});
}

// each alias, color in theme
.theme-dark {
  --theme-#{$alias}-color: var(--color-#{$color});
}

 */// $themes: (
//   root: (
//     fg: '', // --base-fg
//     bg: '', // --base-bg
//     pippin: #FFDFDF,
//     blue: #ADDDFF,
//     green: #10ce00,
//     dark: #141414,
//     lite: #f5f5f5,
//     rose: #EBD8D9,
//     gray: (
//       darker: #222222,
//       dark: #545454,
//       mid: #858585,
//       light: #B7B7B7,
//       lighter: #E9E9E9,
//     ),
//   ),
//   foo: (
//     fg: '', // --base-fg
//     bg: '', // --base-bg
//   )
// );



// themes
//   alpha
//     base
//     primary
//     secondary
//   bravo
//     base
//     primary
//     secondary

// --base-alpha

// .theme-alpha
//   --color-base
//   --color-primary
//   --color-secondary

---

## rules

1. all colors should be named with `--color-#{$name}` pattern
2. all themes must have same number and names of keys
3. theme keys can and should include prop names, at least bg and fg, but not `key`
4. no colors may be named the same as prop names or `key`

```scss

$colors: (
  myblue: blue,
  myred: red,
  lite: #f5f5f5,
  dark: #121212,
);

$themes: (
  lite: (
    bg: lite,
    fg: dark,
    cta: myblue,
    alt: myblue,
  ),
  dark: (
    bg: dark,
    fg: lite,
    cta: myred,
    alt: myred,
  ),
);

// add :root because it's the first one
// each alias, color in theme
:root {
  --#{$alias}-color: var(--theme-#{$alias});
  // --fg-color: var(--theme-fg);
  // --bg-color: var(--theme-bg);
  // --action-color: var(--theme-action);
}

// each alias, color in theme
:root, .theme-lite {
  --theme-#{$alias}: var(--color-#{$color});
  // --theme-fg: var(--color-dark);
  // --theme-bg: var(--color-lite);
  // --theme-action: var(--color-myblue);
}

// each alias, color in theme
.theme-dark {
  --theme-#{$alias}: var(--color-#{$color});
  // --theme-fg: var(--color-lite);
  // --theme-bg: var(--color-dark);
  // --theme-action: var(--color-myred);
}

// each $prop in fg, bg, bd, ol, key
  // each $color in $colors
.#{$prop}-#{$color} { --#{$prop}-color: var(--color-#{$color}); }
  // each $alias in theme
.#{$prop}-theme-#{$alias} { --#{$prop}-color: var(--theme-#{$alias}); }
.#{$prop}-key { --#{$prop}-color: var(--color-key); }

.#{$prop}-theme-fg { --#{$prop}-color: var(--theme-fg); }
.#{$prop}-theme-bg { --#{$prop}-color: var(--theme-bg); }
.#{$prop}-theme-action { --#{$prop}-color: var(--theme-action); }

.key-theme-fg { --key-color: var(--theme-fg); }
.key-theme-bg { --key-color: var(--theme-bg); }
.key-theme-action { --key-color: var(--theme-action); }

.fg-theme[-fg] { --fg-color: var(--theme-fg); }
.fg-theme-bg { --fg-color: var(--theme-bg); }
.fg-theme-action { --fg-color: var(--theme-action); }
.bg-theme[-bg] { --bg-color: var(--theme-fg); }


body {
  color: var(--fg-color);
  background-color: var(--bg-color);
}

a { color: var(--action-color); }

#{base-class(fg)} { color: var(--fg-color); }

.fg-myblue { --fg-color: var(--color-myblue); }



```

themes
  [name]
    bg:
      bg-color
        bg-contrast
    text:
      text-color
        text-contrast
    action:
      action-color
        action-contrast
    [color]
    [color]
    [color]
    [color]
    [color]
field
ground
text
paper
base
action
active
done
primary
secondary
