---
title: Memoized async calls in action
---

Using [loadash](https://lodash.com/docs/4.17.15#memoize).

```javascript
import _ from 'lodash';

// Action creator.
export const fetchData = (param) => async (dispatch) =>
  _fetchData(param, dispatch);

// Memoized async logic.
const _fetchData = _.memoize(async (param, dispatch) => {
  // Fetching data by some params. i.e: id.
  const response = await FETCHING_DATA.get(param);
  dispatch({ type: 'FETCH_SOME_DATA', payload: response.data });
});
```
