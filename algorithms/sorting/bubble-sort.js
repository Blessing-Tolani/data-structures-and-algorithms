// This arranges the items in an array in ascending order

const bubbleSort = (arr) => {
  let isArraySwapped = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      let x = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = x;
      isArraySwapped = true;
    }
  }
  if (isArraySwapped === true) {
    bubbleSort(arr);
  }
  return arr;
};

const arr = [-8, 20, 0, 300, -1];
console.log(bubbleSort(arr));

// Big-0 = 0(n) - Linear Time Complexity
