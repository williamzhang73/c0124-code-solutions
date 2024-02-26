'use strict';
function getRangeReport(start, end) {
  let total = 0;
  const odds = [];
  const evens = [];
  const range = [];
  let average = 0;
  if (start < end) {
    total = ((start + end) * (end - start + 1)) / 2;
    average = total / (end - start + 1);
    for (let i = start; i < end + 1; i++) {
      range.push(i);
      if (i % 2 === 1) {
        odds.push(i);
      } else {
        evens.push(i);
      }
    }
  } else if (start === end) {
    total = start;
    if (start % 2 === 1) {
      odds.push(start);
    } else {
      evens.push(start);
    }
    range.push(start);
    average = start;
  }
  const rangeReport = {
    total,
    odds,
    evens,
    range,
    average,
  };
  return rangeReport;
}
console.log(getRangeReport(5, 5));
console.log(getRangeReport(1, 5));
