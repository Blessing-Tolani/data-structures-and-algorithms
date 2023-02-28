// This arranges the items in an array in ascendng order

const mergeSort = (arr) => {
  if (arr.length < 2) {
    console.log('spliting');
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const merge = (leftArr, rightArr) => {
  const sortedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      sortedArr.push(leftArr.shift());
    } else {
      sortedArr.push(rightArr.shift());
    }
  }
  console.log('merged');
  return [...sortedArr, ...leftArr, ...rightArr];
};

const arr4 = [-8, 20, 0, 300, -1];

console.log(mergeSort(arr4));
