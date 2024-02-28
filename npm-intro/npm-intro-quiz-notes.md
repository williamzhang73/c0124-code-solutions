# npm-intro-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is NPM?
  it stands for Node Package Manager, it's packages management system, and command line tools

- What is a package?
  a collection of libraries, frameworks and tools that can be distributed and used node.js project.

- What are some other popular package managers?
  pip, python package installer
  maven: project management tool for java projects
  gradle: more flexible than maven

- How can you create a `package.json` with `npm`?
  npm init

- What is a dependency and how do you add one to a package?
  dependencies are external packages, libraries or modules that the project rely on to provide some functionalities.
  state dependencies name and version in the dependencies section of package.json

- What happens when you add a dependency to a package with `npm`?
  npm will download and install it
  package.json file updated

- What is a devDependency and how do you add one to a package?
  it refers to the packages that necessary for development and testing phrase, but not required for the production runtime of the application

  npm install --save-dev

- How do you define and run `npm` scripts? Why are these useful?
  we can define script in the script section of package,json
  (npm run script_name)
  automation: automate common development tasks
  consistency: define scripts in package.json ensuring that every developer use the same command for common tasks.

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
