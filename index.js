// base case => fromN === toN
// recursive case => fromN < toN

function sum(fromN, toN) {
  if (fromN === toN) {
    return fromN;
  }
  while (fromN <= toN) {
    console.log(fromN);
    return fromN + sum(fromN + 1, toN);
  }
};

console.log(sum(3, 3))


module.exports = sum;
