# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  &&: for a set of boolean operands will be true if and only if all operands return true, otherwise, will return false.
  ||: for a set of boolean operands will return true if one of them return true, it will return false when all operands return false.

let/const variable=operand1 && operand2 ? value1: value2
let/const variable=operand1 || operand2 ? value1: value2

- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  for &&, if first operand return false, then the overall value would be false, following operands would be skipped.
  for ||, if first operand returns true, then the overall value would be true, following operands evaluation would be skipped.

- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  ?? assign right value of ?? to a variable if left value is null or undefined
  || assign right value of || to a variable if left value is null, undefined, "", 0, false, all falsy value.

- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  if condition expression is true, left value would be assigned, otherwise, right value would be assigned.
  if/else can have multiple condition check,
  ?. provide a concise to write if/else statement

- What is the `?.` (optional chaining) operator? When would you use it?
  ?. is used to access an object's property or method.

using optional chaining when dealing with nested object or when accessing properties or methods that may not exists at runtime.
the expression short-circuits with a return value of undefined

- What is `...` (spread) syntax? How do you use it with arrays and objects?
  ...iterableObject
  ...array
  {...iterableObject}

- What data types can be spread into an array? Into an object?
  [...array]
  [...string]
  [...object.keys()]
  {...array}
  {...object}

- How does spread syntax differ from rest syntax?
  spread syntax is used to split an array or object into individual element
  rest syntax is used as function parameter to collect extra variables into an array

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
