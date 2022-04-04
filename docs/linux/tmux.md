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
