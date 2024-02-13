# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  for debugging purpose.

- What is the purpose of events and event handling?
  to create a interactive web page with users

- Are all possible parameters required to use a JavaScript method or function?
  no, some of them are optional.

- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListener()

- What is a callback function?
  callback function is kind of function called within another method or function.

- What object is passed into an event listener callback when the event fires?
  event object

- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  target property of event object
  console.log(event.target)
  mdn

- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  after clicking event, handleClick function would be called.
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  handleClick() will be called immediately before event happening.

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
