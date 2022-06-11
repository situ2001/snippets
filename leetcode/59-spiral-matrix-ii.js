/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push([]);
  }
  let a = 0; // upper bound
  let b = n - 1; // lower bound
  let c = 0; // left bound
  let d = n - 1; // right bound
  let current = 1;

  while (current <= n * n) {
    for (let i = c; i <= d; i++) {
      arr[a][i] = current++;
    }
    a++;

    for (let i = a; i <= b; i++) {
      arr[i][d] = current++;
    }
    d--;

    for (let i = d; i >= c; i--) {
      arr[b][i] = current++;
    }
    b--;

    for (let i = b; i >= a; i--) {
      arr[i][c] = current++;
    }
    c++;
  }

  return arr;
};
