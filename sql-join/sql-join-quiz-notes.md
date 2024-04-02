# sql-join-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is a foreign key?
  Foreign key is the primary key of related tables

- How do you join two SQL tables? (Provide at least two syntaxes.)

  1. select \* from "table1" join "table2" using ("foreign_key")
  2. select \* from "table1" join "table2" on "table1"."foreign_key"="table2"."foreign_key"

- How do you temporarily rename columns or tables in a SQL statement?
  "table_name"."column_name" as "alias"
- How do you create a one-to-many relationship between two tables?
  join "table_name" using ("column_name")
- How do you create a many-to-many relationship between two tables?
  join "table_name" on ""=""

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
