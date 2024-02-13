# dom-event-delegation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `event.target`?
  a reference to the object onto which the event was dispatched
  it will return the element on which event occurred.

- Why is it possible to listen for events on one element that actually happen its descendent elements?
  event delegation, adding an event listener to one parent element, it will capture the event happened in his child elements

- What DOM element property tells you what type of element it is?
  nodeName

- What does the `element.closest()` method take as its argument and what does it return?
  argument: a string of css selector to match the element and its ancestor against
  return: the closest ancestor element or null

- How can you remove an element from the DOM?
  removeChild() and remove()

- If you wanted to insert new clickable DOM elements into the page using JavaScript, how could you avoid adding an event listener to every new element individually?
  removeEventListener();

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
