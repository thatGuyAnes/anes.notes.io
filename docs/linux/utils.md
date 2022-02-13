---
title: Utils
---

### Network password

- list connections:

```Bash
$ ls /etc/NetworkManager/system-connections
```

- display passwords:

```Bash
# grep psk= /etc/NetworkManager/system-connections/*
```

### Installed packages(Fedora)

- List all user-installed packages:

```Bash
$ dnf repoquery --qf '%{name}' --userinstalled \
 | grep -v -- '-debuginfo$' \
 | grep -v '^\(kernel-modules\|kernel\|kernel-core\|kernel-devel\)$' > pkgs.lst
```

- Install from list:

```Bash
# < pkgs.lst xargs dnf -y install
```

### Create bootable USB from ISO image

- Identify device with `$ lsblk -p | grep "disk"` or `$ df -hT`
- Unmount device: `# umout [DEVICE_NAME]`
- Write ISO to USB: `# dd if=[ISO_FILE] of=[DEVICE_NAME] bs=4M conv=fdatasync status=progress`

### Installing fonts:

- Download the font package.
- Extract the files from the archive.
- Copy the font files to a system font folder:

  - `/usr/share/fonts/` (system font folder)
  - `~/.local/share/fonts/` or `/usr/local/share/fonts` (user font folder)

- Regenerate the font cache and indexes:
  - `# fc-cache -fv`
