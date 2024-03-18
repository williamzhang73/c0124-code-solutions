# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  async used to create asynchronous function, and return a promise
  await will pause execution in a async function until the promise settles, it makes an asynchronous operation into synchronous

- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  async/await:
  try/catch block for error handling
  wait promise to be settled, and then continue to run.
  sequential execution
  promise:
  chain methods, multiple then() for fulfilled promise, and one catch() for error handling

- When do you use `async`?
  Readability and sequential execution matter.
  You want to simplify control flow.
  Your environment supports modern JavaScript.

- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  using "await" in an async function, it will pause execution waiting promise to settle.
  not using await in an synchronous function, it will return value immediately

- How do you handle errors with `await`?
  try/catch block

- What do `try`, `catch` and `throw` do? When do you use them?
  try is code section that you expect an error will occur.
  catch is the code section will catch that error
  throw allow you to custom error message

- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  it will immediately return unsettled promise
  rejection will be caught

- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await, because it modern, and resemble synchronous execution, it also make code more readable.

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
