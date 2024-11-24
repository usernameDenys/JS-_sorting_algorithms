const arr = [3, -6, 2.3, 2, 0, 1, 18];

const selectionSort = (arr) => {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    let minIndex = i;

    for (let a = i + 1; a < arrLength; a++) {
      if (arr[a] < arr[minIndex]) {
        minIndex = a;
      }
    }
    if (minIndex !== i) {
      //swap
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }
  return arr;
};

const startTime = Date.now();

for (let i = 0; i < 1000000; i++) {
  selectionSort(arr);
}

const endTime = Date.now();
const execusion = endTime - startTime;

console.log(arr);
console.log(`Time taken: ${execusion} milliseconds`);
