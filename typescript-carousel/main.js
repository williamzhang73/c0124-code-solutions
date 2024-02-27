'use strict';
const imagesUrl = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png',
];
let imagesIndex = 0;
const $iElements = document.querySelectorAll('.circle');
$iElements[0].className = 'fa-solid fa-circle';
for (let i = 0; i < $iElements.length; i++) {
  $iElements[i].dataset.index = i.toString();
}
setInterval(() => {
  if (imagesIndex >= 4) {
    imagesIndex = 3;
  }
  imagesIndex++;
  const $image = document.querySelector('img');
  if (!$image) {
    throw new Error('!image query failed');
  }
  $image.src = imagesUrl[imagesIndex];
  $image.dataset.imageIndex = imagesIndex.toString();
  $iElements[imagesIndex].className = 'fa-solid fa-circle';
  if (imagesIndex !== 0) {
    $iElements[imagesIndex - 1].className = 'fa-regular fa-circle';
  }
  if (imagesIndex === 0) {
    $iElements[4].className = 'fa-regular fa-circle';
  }
  if (imagesIndex === 4) {
    imagesIndex = -1;
  }
}, 3000);
const $circles = document.querySelector('.circles');
if (!$circles) {
  throw new Error('$circles query failed');
}
$circles.addEventListener('click', (event) => {
  const eventTarget = event.target;
  imagesIndex = Number(eventTarget.dataset.index);
  const $image = document.querySelector('img');
  if (!$image) {
    throw new Error('!image query failed');
  }
  $image.src = imagesUrl[imagesIndex];
  $image.dataset.imageIndex = imagesIndex.toString();
  for (let i = 0; i < $iElements.length; i++) {
    if (imagesIndex === i) {
      $iElements[i].className = 'fa-solid fa-circle';
    } else {
      $iElements[i].className = 'fa-regular fa-circle';
    }
  }
});
const $arrowRight = document.querySelector('.arrow-right');
if (!$arrowRight) {
  throw new Error('!$arrowRight query failed');
}
$arrowRight.addEventListener('click', () => {
  const $image = document.querySelector('img');
  const url = $image.getAttribute('src');
  for (let i = 0; i < imagesUrl.length; i++) {
    if (url === imagesUrl[i]) {
      if (i === 4) {
        imagesIndex = 0;
        $image.src = imagesUrl[0];
        for (let j = 0; $iElements.length; j++) {
          if (j === 0) {
            $iElements[0].className = 'fa-solid fa-circle';
          } else {
            $iElements[j].className = 'fa-regular fa-circle';
          }
        }
      } else {
        $image.src = imagesUrl[i + 1];
        imagesIndex = i + 1;
        for (let j = 0; $iElements.length; j++) {
          if (j === i + 1) {
            $iElements[j].className = 'fa-solid fa-circle';
          } else {
            $iElements[j].className = 'fa-regular fa-circle';
          }
        }
      }
      break;
    }
  }
});
const $arrowLeft = document.querySelector('.arrow-left');
if (!$arrowLeft) {
  throw new Error('!$arrowLeft query failed');
}
$arrowLeft.addEventListener('click', () => {
  const $image = document.querySelector('img');
  if (!$image) {
    throw new Error('$image query failed');
  }
  const url = $image.getAttribute('src');
  /*   console.log('url: ', url); */
  for (let i = 0; i < imagesUrl.length; i++) {
    if (url === imagesUrl[i]) {
      if (i === 0) {
        imagesIndex = 4;
        $image.src = imagesUrl[4];
        /*      for (let j = 0; j < $iElements.length; j++) {
                       
                     } */
      } else {
        imagesIndex = i - 1;
        $image.src = imagesUrl[i - 1];
      }
      break;
    }
  }
});
