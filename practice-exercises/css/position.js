const menu1 = document.querySelector('.navigate_bar li:nth-of-type(1) ');
if (menu1 === undefined) {
  console.error('menu1 not exist.');
}
const menu2 = document.querySelector('.navigate_bar li:nth-of-type(2) ');
if (menu1 === undefined) {
  console.error('menu2 not exist.');
}
const menu3 = document.querySelector('.navigate_bar li:nth-of-type(3) ');
if (menu1 === undefined) {
  console.error('menu3 not exist.');
}
const menu4 = document.querySelector('.navigate_bar li:nth-of-type(4) ');
if (menu1 === undefined) {
  console.error('menu4 not exist.');
}

const content1 = document.querySelector('.content_1');
if (content1 === undefined) {
  console.error('content1 not exist.');
}
const content2 = document.querySelector('.content_2');
if (content2 === undefined) {
  console.error('content2 not exist.');
}
const content3 = document.querySelector('.content_3');
if (content3 === undefined) {
  console.error('content3 not exist.');
}
const content4 = document.querySelector('.content_4');
if (content4 === undefined) {
  console.error('content4 not exist.');
}

menu2.addEventListener('click', (e) => {
  content2.computedStyleMap.visibility = 'visible';
});
