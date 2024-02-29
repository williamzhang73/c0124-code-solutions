# typescript-promises-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the Event Queue model of Promises?

1. promises created, and place in the back of event queue synchronously
2. synchronous execution of calling code continues until the end of the function
3. current function completed, and then event loop call thread to execute promise task
4. after promise tasks completed:
   if successfully, call then() handler
   if with error, call catch() handler
   finally() will be called in any cases

- What are the three states a Promise can be in?
  pending, resolve, reject

- How do you handle the fulfillment of a Promise?
  then()

- How do you handle the rejection of a Promise?
  catch()

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
