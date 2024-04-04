# express-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

1. What is the purpose of the pg NPM package?
   a library used to manipulate the postgresql database

2. How do you tell pg which database to connect to?
   specify in the connectionString property when creating a database instances
3. How do you send SQL to PostgreSQL from your Express server?
   by using db.query(sql,params);
4. How do you get the rows return from the SQL query?
   by using the rows property of results
5. What must you always remember to put around your asynchronous route handlers? Why?
   try...catch...block
   for error handling

6. What is a SQL Injection Attack and how do you avoid it in pg?
   if you put query parameters directly in the sql, it will cause SQL Injection Attack
   putting query parameters in an array, and reference to them by using $N, number should match the order of the elements in array

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
