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

**This `cargo` can be used to**:

- Build a project: `cargo build`
- Compile and run the code: `cargo run`
- Checks the code and make sure it compiles: `cargo check`

> These commands are self descriptive !!!

### Rustfmt: rust formatter.

`rustfmt` formats code in a particular style.

### Initial Observations

So in rust there exist function and macros; `println!` calls a macro where
`printls` (without `!`) calls a function.

Same as with a say a webpack project, `cargo` build a "dev" version and a
release version using respectively `cargo build` and `cargo build --release`.

- `build` outputs to a `target/debug` directory
- `build --release` outputs to a `target/release` dir.

## Chapter II: Programming a guessing game

So in rust, variable are immutable by default.
We must use `mut` keyword to indicate that this variable is mutable.
(very interesting!!!)

```rust
let mut myVar = String::new();
```

The variable is bound to `String::new()`; A bit weird but it simply
implies that our value is a new instance of an empty String, the result of
calling a 'String::new()' function.

Also the `new` here in`::new` is referred to as 'associated function'.
