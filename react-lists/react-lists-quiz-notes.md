# react-lists-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When would we want to dynamically create a list of React components?
  when we want to show an array of data that fetched from APIs or database.
  when users want to dynamically change the data

- Why is it important for React components to be data-driven?
  simple maintenance: if update needed, only data will be changed, the code will stay the same
  better reusability: if a component is data-driven, it will be more reusable across different application

- Where in the component code would a list of React components typically be built?
  ul element

- What `Array` method is commonly used to create a list of React components?
  map()

- Why do components in a list need to have unique keys?
  let react knows which list is changed, and only re-render that list, the application would be more efficient

- What is the best value to use as a "key" prop when rendering lists?
  any unique value

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
