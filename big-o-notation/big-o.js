/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // _1 * 1_ = O(1)
  const unique = []; // _1 * 1_ = O(1)
  for (
    let i = 0; // _1 * _1 = O(1)
    i < words.length; // _2 * _n = O(2n)
    i++ // _1 * _n = O(n)
  ) {
    const word = words[i]; // _2 * _n = O(2n)
    if (!seen[word]) {
      // _2 * _n = O(2n)
      seen[word] = true; // _2 * _n = O(2n)
      unique[unique.length] = word; // _2 * _n = O(2n)
    }
  }
  return unique; // _1 * _1 = O(1)
} // Big O Notation for uniqueLinear: O(2n)

function uniqueQuadratic(words) {
  const unique = []; // _1 * _1 = O(1)
  for (
    let i = 0; // _1 * _1 = O(1)
    i < words.length; // _2 * _n = O(2n)
    i++ // _1 * _n = O(n)
  ) {
    const word = words[i]; // _2 * _n = O(2n)
    let isUnique = true; // _1 * _n = O(n)
    for (
      let c = 0; // _1 * _n  = O(n)
      c < i; // _1 * _n^2 = O(n^2)
      c++ // _1 * _n^2 = O(n^2)
    ) {
      const comparing = words[c]; // _2 * _n^2 = O(2n^2)
      if (comparing === word) {
        // _1 * _n^2 = O(n^2)
        isUnique = false; // _1 * _n^2 = O(n^2)
      }
    }
    if (isUnique) {
      // _1 * _n = O(n)
      unique[unique.length] = word; // _2 * _n = O(2n)
    }
  }
  return unique; // _1 * _1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
