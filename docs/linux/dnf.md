---
title: DNF
---

# Managing copr repos

Configuration files in `/etc/yum.repos.d/`

List all enabled repos:

```sh
dnf repolist
```

Disable repos:

```sh
dnf config-manager --set-disabled repoid
```

or

```sh
dnf copr disable name/project
```

For more information see:

```sh
man dnf
man dnf config_manager
man dnf copr
```
