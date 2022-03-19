---
title: Snippets
---

## Update Grub on fedora

With root privileges run:

```bash
grub2-mkconfig -o /boot/efi/EFI/fedora/grub.cfg
```

## Installing fonts

- Download the font package.
- Extract the files from the archive.
- Copy the font files to a system font folder:
  - System font folder: `/usr/share/fonts/`
  - User font folder: `~/.local/share/fonts/` or `/usr/local/share/fonts`
- Regenerate the font cache and indexes:
  - `$ fc-cache -fv`

## Customize cursor

### Gnome session

Change the cursor size with (depending on the theme, sizes are 24, 32, 48, 64):

```bash
gsettings set org.gnome.desktop.interface cursor-size cursor_theme_size
```

## Backup

### Compress a single file

```bash
tar -jcvf FILE_NAME.tar.bz2 .mozilla
```

### Extract file

```bash
tar -xvf FILE_NAME.tar.bz2
```

### Encrypt a file

After compression use GPG encryption to protect the file and setup a password.

**_Make sure that GnuPG is installed_**

```bash
gpg -c FILE_NAME.tar.bz2
```

Setup a secure password. Make sure to delete the `.bz2` file, we just need the
`.gpg` file.

### Decrypt a file

```bash
gpg FILE_NAME.tar.bz2.gpg
```
