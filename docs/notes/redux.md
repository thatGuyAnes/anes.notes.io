---
title: Redux
---

## Thinking in react-redux

### Overview

Redux mental modal have two big repetitive points:

- To change data inside the store we call an **action**.
- To retrieve data out of store into a component we use a mapStateToProps function.

### Publish/Subscribe pattern(better to write a blog post about it and event driven programming):

'subscribe()' is the low-level interface that lets us know every time the store changes.
with react-redux there is no need for it.

react-redux's **connect** implements subscribe under the hood to watch for changes
and then tells react to re-render.

Think of it as an event-listener, it make sense as redux is basically a
gigantic event emitter that watches for state's changes.

We communicate the store changes by dispatching a pure func referred as action

When we subscribe to the store, the subscribe fun takes a
callback function referred to as listener. This callback will be invoked every
time dispatch is called.
