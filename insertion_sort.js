const arr = [3, -6, 2.3, 2, 0, 1, 18];

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    let indexValue = i - 1;

    while (indexValue >= 0 && arr[indexValue] > currentValue) {
      arr[indexValue + 1] = arr[indexValue];
      indexValue--;
    }

    arr[indexValue + 1] = currentValue;
  }
  return arr;
};

const startTime = Date.now();

for (let i = 0; i < 1000000; i++) {
  insertionSort(arr);
}

const endTime = Date.now();
const execusion = endTime - startTime;

console.log(arr);
console.log(`Time taken: ${execusion} milliseconds`);
