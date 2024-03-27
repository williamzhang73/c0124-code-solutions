# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  after components get rendered

- What is a React Effect?
  Effect is function to do some side effect, such as fetching, starting a timer
  is called to synchronize with external system

- When should you use an Effect and when should you not use an Effect?
  use case: useEffect hook is used when using a timer or fetching data or connecting to database
  not use case: if Effect only adjusts state based on other state change, should not use

- When do Effects run?
  after rendering components

- What function is used to declare an Effect?
  useEffect()

- What are Effect dependencies and how do you declare them?
  dependencies are data inside an array that Effect depends on, it tells when useEffect run or re-run
  dependencies declared in the second argument of Effect function

- Why would you want to clean up from an Effect?
  when you want to unsubscribe or disconnection

- How do you clean up from an Effect?
  cleanup function called after return in Effect callback function

- When does the cleanup function run?
  1. when components removed from the DOM,
  2. when re-render a component, the cleanup function from previous effect is called before a new effect
  3. when dependencies change

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
