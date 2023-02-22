// Arranges items in an array in ascending or descending order
// Specify the order.
// This is ascending

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }
  //select last element as pivot
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const arr3 = [-6, 8, 1, -2, 4];

console.log(quickSort(arr3));
