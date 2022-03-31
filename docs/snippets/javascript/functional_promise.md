---
title: Functional Promise
---

```javascript
const processAllUsers = () => {
  return User.find({}).then((users) =>
    waitForEach((user) => processUser(user._id), users)
  );
};

const waitForEach = (processFunction, [head, ...tail]) =>
  !head
    ? Promise.resolve()
    : processFunction(head).then(waitForEach(processFunction, tail));
```

_Thanks goes to @mpjme and the to funfunforum._
