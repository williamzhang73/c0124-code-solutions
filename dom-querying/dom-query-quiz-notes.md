# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  to debug code with output of label and results

- What is a "model"?
  model in DOM is a data object represents the structure of the document.

- Which "document" is being referred to in the phrase Document Object Model?
  the HTML document the browser rendered to

- What is the word "object" referring to in the phrase Document Object Model?
  element, attributes and text in HTML document is treated as objects, that content, structure and styles can be manipulated by those object interfaces in JavaScript.

- What is a DOM Tree?
  it represents the structure of the HTML document.

- Give two examples of `document` methods that retrieve a single element from the DOM.
  document.getElementByID()
  document.querySelector()

- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  document.getElementsByClassName('className')

- Why might you want to assign the return value of a DOM query to a variable?
  improve performance so that no need to call it multiply.
  improve readability, by assigning DOM query to a variable with a meaningful name, it can improve readability, which makes your code more clear.

- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir();

- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  improve efficiency and time saving by placing <script> tag at the bottom of the HTML content, browers can show content first, and then interpret script code.

- What does `document.querySelector()` take as its argument and what does it return?
  argument: a string containing one or more selectors to match.
  return: the first element within document that matches the selectors or null

- What does `document.querySelectorAll()` take as its argument and what does it return?
  a string containing one or more selectors to match
  return a static NodeList representing a list of elements that matches the query or null.

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
