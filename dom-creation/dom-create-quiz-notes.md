# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, it just create a new element

- How do you add an element as a child to another element?
  using querySelector(''), and appendChild() method

- What do you pass as the arguments to the `element.setAttribute()` method?
  (name, value)

- What steps do you need to take in order to insert a new element into the page?

1. create a new element using document.createElement(),
2. select the element want to be appended by querySelector()
3. append new created element to parent selector.

- What is the `textContent` property of an element object for?
  get and set the text content of all the child nodes and descendants.

- Name two ways to set the `class` attribute of a DOM element.
  Element.className="";
  Element.classList() with remove(), add(), toggle() methods.

- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  increase readability and code reusability

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
