# R E A C T | W E E K | 01

# Study Notes & Exercises by [Mel Jones](https://twitter.com/_moodybones)

## [Bob Ziroll](https://twitter.com/bobziroll) | React Free Intro Course | [Scrimba](https://scrimba.com/course/glearnreact)

## ReactDOM & JSX

- {JavaScript} in JSX
- you can't have 2 adjacent JSX elements
- use a <div> or <section> or <article> etc...
- surround JavaScript in {}

```jsx
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <ul>
    <li>Mel</li>
    <li>Jones</li>
    <li>jones.mel@gmail.com</li>
  </ul>,
  document.getElementById('root')
)
```

### ClassName

Why do you have to use className instead of class????

- it is NOT because class is a reversed JavaScript keyword
- the truth is.. that underneath JSX is using the vanilla JS DOM API
-

```
document.getElementById("something").className += "new-class-name"
//or
document.getElementById("something").classList += "new-class-name"
// because classList has properties you can use to add and remove classes
```

#### className is an underlying JavaScript DOM API property

