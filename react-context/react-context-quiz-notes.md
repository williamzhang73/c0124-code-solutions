# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  to store global data that can be used in the child components in the tree below it.
- What values can be stored in context?
  any value
- How do you create context and make it available to the components?
  const ContextName=createContext<>(initial_value)
  wrap the child components using ContextName.provider passing the value prop
- How do you access the context values?
  useContext(contextName);
- When would you use context? (in addition to the best answer: "rarely")
  userID, shopping cart

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
