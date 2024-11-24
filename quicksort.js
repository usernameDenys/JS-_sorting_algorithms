const arr = [3, -6, 2.3, 2, 0, 1, 18];

const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const left = [];
  const right = [];
  const equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return [...quicksort(left), ...equal, ...quicksort(right)];
};

const startTime = Date.now();

for (let i = 0; i < 1000000; i++) {
  quicksort(arr);
}

const endTime = Date.now();
const execusion = endTime - startTime;

console.log(quicksort(arr));
console.log(`Time taken: ${execusion} milliseconds`);
