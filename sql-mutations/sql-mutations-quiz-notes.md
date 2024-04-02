# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  create, update, read, delete.
- How do you add a row to a SQL table?
  insert into "table" ("column1", "column2") values (value1, value2) returning \*;

- How do you add multiple rows to a SQL table at once?
  insert into "table" ("column1", "column2") values (value1, value2), (value1, value2) returning \*;
  separated with comma, wrapped with parenthesis after values keyword.
- How do you update rows in a database table?
  update "table" set "column"='value' where
- How do you delete rows from a database table?
  delete from "table" where..
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  because it will update and delete every object, and it's undo.

- How do you accidentally delete or update all rows in a table?
  without where clause
- How do you get back the modified row without a separate `select` statement?
  returning \* .
- Why did you get an error when trying to delete certain films?
  violate foreign key schema.

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
