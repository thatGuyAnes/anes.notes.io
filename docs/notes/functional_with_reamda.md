---
title: Functional patterns with ramdajs
---

## Objectives:

- To have a better understanding of the purely fp patterns in a friendly
  environment (without the need to learn haskell).
- To solidify some already known principles like currying, composition, higher
  order functions etc.
- Thinking in abstraction vs implementations details.

From the get go these terminologies and concepts should bring a better
understanding of the functional programming patterns:

- Pure functions
- Immutability
- Shared State
- First-Class Citizens (HOFs)

## Layman Terminology

- **Predicate Function**: A function that takes one argument and returns true or false.
- **Functor**: Anything that can be mapped.(arrays are functor because we can do array.map(f)).
- **Side-Effects**: Anything the function performs that is not related to
calculating its output, is a side-effect.

## Pure Functions

### Rules

- Never mutate the input.
- We can safely mutate a CLONE of an input, NEVER the input itself.

The easiest way to clone arrays and objects is tot use spread syntax:

```
const original = { name: 'Jhon' }
const clone    = { ...original }
```

### Side-Effects

Keywords:

- Shared state
- Time dependency

An assignment statement(x=y) introduces a "time dependency" (state
management issue) like in the following example:

```javascript
let count = 5;

const add = (number) => (count += number);

add(4); // count is 9
add(4); // count is 13 !!!!!
```



- mutating the input
- HTTP calls (fetch/AJAX)
- console.log (printing to the screen)
- querying the DOM
- writing to disk

Shared state = timing dependencies.

## HOFs

### First Class Citizens

Objects, Arrays, Numbers, Booleans and Strings are considered as first-class. Why?
because they can be stored in variables, passed around as arguments.

And Functions are first-class by that definition:

- We can pass them as args to other functions.
- Set them as objects' properties.
- Set them as variables.
- Store them in arrays.

A Higher Order Function is a function that takes or/and returns another function.
"higher" meaning it deals with functions(which are first-citizens) in addition
to strings, arrays, objects etc

## Composition

![FunctionInsideFunction](https://memegenerator.net/img/instances/82112524/yo-dawg-i-heard-you-like-functions-so-i-put-functions-inside-your-functions-so-you-can-evaluate-a-fu.jpg)

To compose means to create by combining things.

Example:

```js
import { map } from 'ramda'

const double  = (numb) => numb * 2
const numbers = [1, 2, 3, 4, 5]

// composing
const doubleNumbers = map(double)
const result3       = doubleNumbers(numbers)
```

### Curried Functions

Everything in Ramda is curried!

A curried function can take some parameters now, other later by returning a
function that waits for its arguments:

```js
const doubleNumbers = map(double)
doubleNumbers(numbers)
```

`doubleNumbers` is curried, it will wait for the other arguments to run, it
"preloads" the Ramda's map function.

### Point-Free

In `doubleNumbers = map(double)` we didn't pass a number parameter to the map function.
Neither when we called it with `numbers`. These functions don't say the data
they're operating on (`number`).

That's referred to as "**Point-free**"; data not visible; Where functions don't
show their arguments!!!

This _style_ is called **Point-Free** enabled by HOFs and currying.

### Data Last

In Ramda, function are curried and they take the data last(arguments) making it
easier to point-free.

```js
// build in map function
numbers.map(double)

// data last using Ramda
map(double, numbers)
```

## More on Currying

The biggest benefit of currying, is that is makes the code DRYer by making the
functions reusable.

Currying lets you partially apply a function and create more specialized versions.

Currying a function can save us from bugs in our code, like the following example:

```js
const sum = (a, b) => a + b
const result = sum(5) // returns NaN, as b in undefined
```

This is not bueno!!! let's fix it using **currying**:

```js
import { curry } from 'ramda' // ramda's curry function

const sum = (a,b) => a + b
const curriedSum = curry(sum)
const result = curriedSum(5) // returns a function
```

`result` will return a function, because it's curried, it'll always return a
function that waits for its last argument (in this case the second number `b`)!

### Proper Curry

![properCurry](https://www.freecodecamp.org/news/content/images/2019/07/dog-properly-currying-a-function-1.jpeg)

The bible of FP says that "*a curried function must always return a new
function for each parameter*". For example:

```js
const properlyCurriedMultiply3 = (a) => (b) => (c) => a * b * c

properlyCurriedMultiply3(2)(5)(10) // --> 100
```

But in Ramda, we can use either styles, like:

```js
import { curry } from 'ramda'

const multiply3 = (a,b,c) => a * b * c
const curriedMultiply3 = curry(multiply3)

// Provide all arguments at once!!
curriedMultiply3(5, 3, 2) // --> 30

// Break it up
curriedMultiply3(5)(3)(2) // --> 30

// This is also valid
curriedMultiply3(5)()()(3)()(2)
```
