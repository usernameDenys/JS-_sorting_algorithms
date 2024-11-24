const arr = [3, -6, 2.3, 2, 0, 1, 18];

const arrMerge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return arrMerge(mergeSort(left), mergeSort(right));
};

const startTime = Date.now();

for (let i = 0; i < 1000000; i++) {
  mergeSort(arr);
}

const endTime = Date.now();
const execusion = endTime - startTime;

console.log(mergeSort(arr));
console.log(`Time taken: ${execusion} milliseconds`);
