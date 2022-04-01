---
title: Vim
slug: /
---

## Errors

Get the error's help pages: (i.e: _E72 Close error on swap file_)

```bash
:help E72
```

If the error is removed, you can see it again with:

`:echo errmsg` or `:messagses`

## Detect filetype

```sh
:set filetype?
```

## Spell Checking

### Activating Spell Checking

#### Turn on Spell checking in command mode

```
:set spell spelllang=en_us
```

#### Turn off Spell checking in command mode

```
:set nospell
```

#### Turn on spell check for markdown files

Add the following to .vimrc file:

```vim
autocmd BufRead,BufNewFile *.md setlocal spell
set complete+=kspell
spelllang=en_us
```

#### Turn spell checking in local buffer

```
:setlocal spell spelllang=en_us
```

### Using Spell Checking

#### Move to misspelled word

- `]s` --> move to next word.
- `[s` --> move to previous word.

#### Correct a word

With cursor on the misspelled word, use `z=` and choose form the list of
alternatives by typing the number of the word from the list and hit enter.

#### Add to dictionary

`zg` --> Add word to dictionary.

#### Mark word as misspelled

`zw` --> Mark current word as misspelled.

## Keymaps

## Life changing ones

- `%`: jump to matching parentheses/brackets.

## Useful but not so practical ?? :man-shrugging:

- `Ctrl-o`: in insert mode run a single normal mode command and return back to
  insert mode (e.i: when typing at the bottom of the window and we want to use
  `zz` and go back to typing).
- `Shift-d`: in normal mode delete until end of line.
- `Shift-c`: Same as `Shift-d` but gets into insert mode after delete.
