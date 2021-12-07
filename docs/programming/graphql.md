---
title: GraphQl
---

### Aliases

To run two queries on the same datasource, we need to use aliases.
Aliasing is done by assigning an alias to a field:

```graphql
example: {
  aliase: allMarkdownRemark {
    nodes {
      frontmatter {
        title
      }
    }
  }
}
```
Used as:

```javascript
aliase.nodes.frontmatter
```

