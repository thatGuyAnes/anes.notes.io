---
title: Utils
---

### Network password
* list connections:
```
$ ls /etc/NetworkManager/system-connections
```
* display passwords:
```
# grep psk= /etc/NetworkManager/system-connections/*
```

### Installed packages(Fedora)

* List all user-installed packages:
```
$ dnf repoquery --qf '%{name}' --userinstalled \
 | grep -v -- '-debuginfo$' \
 | grep -v '^\(kernel-modules\|kernel\|kernel-core\|kernel-devel\)$' > pkgs.lst
```
* Install from list:
```
$ < pkgs.lst xargs dnf -y install
```
