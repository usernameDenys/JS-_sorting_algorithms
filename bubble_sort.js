const arr = [3, -6, 2.3, 2, 0, 1, 18];

const bubbleSort = (arr) => {
  const arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    for (let a = 0; a < arrLength - i - 1; a++) {
      if (arr[a] > arr[a + 1]) {
        //swap
        [arr[a], arr[a + 1]] = [arr[a + 1], arr[a]];
      }
    }
  }
  return arr;
};

const startTime = Date.now();

for (let i = 0; i < 10000000; i++) {
  bubbleSort(arr);
}

const endTime = Date.now();
const execusion = endTime - startTime;

console.log(arr);
console.log(`Time taken: ${execusion} milliseconds`);
