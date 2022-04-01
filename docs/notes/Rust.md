---
title: Learning Rust
---

### Install

Curl the following command to download and install `rustup` tool:

```sh
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

**_Make sure that `gcc` is installed on your machine(Linux)._**

The installation includes a local documentation, accessed by `rustup doc`.

### Rust files and compiler

Rust files have the .rs extension
`rustc` is the compiler.

### Cargo: a package manager and a build tool.

- we can use cargo to initialize a rust project with `cargo new`.
- `cargo new` creates a project with a .git, if the project is inside a repo,
  `cargo new` will note create a new repo. To override this , we pass `--vcs=git`
  option to `cargo new` command like this: `cargo new my_project --vcs=git`.

### Rustfmt: rust formatter.
