# react-multiple-components-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the phases in the React design process?

1. Starting from a UI mockup, identify pieces that would make good components.
2. Determine the UI state that must be held in the components and where that state should live.
3. Determine the events (actions) that need to modify state, which child components they originate in, and how parent components should respond to them.

- How does data flow in React?
  data flow from parent component to child components in one way through props, and props are read-only.

- How can children components modify state in their parents?
  pass state setter function through props, and modify state through callback function in children components.

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
