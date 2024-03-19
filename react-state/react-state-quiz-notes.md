# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  hooks let you "hook into" React state and lifecycle features from function components

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  only call hook at top level
  only call hooks from react functions

- What is the purpose of state in React?
  To maintain and track the information of the component's situation and data,that may changed by user action

1. persist data
2. re-render

- Why can't we just maintain state in a local variable?
  local variables do not trigger re-render actions.

- What two actions happen when you call a `state setter` function?
  state update
  re-render

- When does the local `state variable` get updated with the new value?
  until next render.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
