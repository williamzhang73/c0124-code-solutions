interface RangeReport {
  total1: number;
  odds: number[];
  evens: number[];
  range: number[];
  average: number;
}

function getRangeReport(start: number, end: number): RangeReport {
  const total1 = ((start + end) * (end - start + 1)) / 2;
  const average = total1 / (end - start + 1);
  const odds = [];
  const evens = [];
  const range = [];
  for (let i = start; i < end + 1; i++) {
    range.push(i);
    if (i % 2 === 1) {
      odds.push(i);
    } else {
      evens.push(i);
    }
  }
  const rangeReport = {
    total1,
    odds,
    evens,
    range,
    average,
  };

  return rangeReport;
}

console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
