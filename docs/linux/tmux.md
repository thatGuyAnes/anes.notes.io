---
title: Tmux
---

## Swap window

### Using command mode

1- Enter command mode with `<PREFIX>+:`. (default prefix: `Ctrl+B` )

2- `swap-windo -s <WINDOW_INDEX> -T <TARGET_WINDOW_INDEX>`.

### Using key bindings

ctrl+shift+h moves window left.

```bash
bind-key -n C-S-h swap-window -t -1
bind-key -n C-S-l swap-window -t +1
```

## New Session while inside a session

`Prefix` + `:new-session -s <SESSION_NAME> -c <DIRECTORY>`

From man page:

      new-session [-AdDEP] [-c start-directory] [-F format] [-n window-name]
      [-s session-name] [-t group-name] [-x width] [-y height] [shell-command]
      (alias: new) Create a new session with name session-name.
