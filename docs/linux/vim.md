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
