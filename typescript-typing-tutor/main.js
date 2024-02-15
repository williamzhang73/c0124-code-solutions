'use strict';
const $spanNodeList = document.querySelectorAll('.row>.col-full>span');
if (!$spanNodeList) {
  throw new Error('query failed');
}
let indexTrack = 0;
console.dir($spanNodeList[6]);
console.log('if equal: ', $spanNodeList[6].textContent === ' ');
/* const span6=$spanNodeList[6];
console.log("aa ", span6.textContent===' '); */
/*
console.log('space: ', $spanNodeList[6]===event.key); */
document.body.addEventListener('keydown', (event) => {
  console.log('key typed in: ', event.key);
  console.dir($spanNodeList);
  /*
  
    console.log('spanNodeList values: ', $spanNodeList.values); */
  // if ($span[0].textContent) {
  //   console.log("length: ", $span[0].textContent.at(0));
  // }
  /*   for (const spanNode of $spanNodeList) {
      const spanNodeLength = spanNode.textContent?.length;
      if (spanNodeLength) {
        for (let i = 0; i < spanNodeLength; i++) {}
      } */
  if (indexTrack < $spanNodeList.length) {
    const key = event.key;
    const $spanElement = $spanNodeList[indexTrack];
    const letterCompared = $spanElement.textContent;
    if (key === letterCompared) {
      console.log('same');
      /*     console.log('event target: ', event.target); */
      $spanElement.classList.add('rightType');
      $spanElement.nextElementSibling?.classList.add('underscore');
      $spanElement.classList.toggle('underscore');
      $spanElement.classList.remove('wrongType');
      indexTrack++;
    } else {
      console.log('not same');
      $spanElement.classList.add('wrongType');
    }
    console.log('indexTrack: ', indexTrack);
  } else {
    console.log('exceed the length of nodeList!');
  }
});
