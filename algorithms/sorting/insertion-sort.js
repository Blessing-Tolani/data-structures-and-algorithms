// This arranges the items in an array in ascendng order
// Here, we assume the first item is sorted(the smallest item)

// If the No To Be Inserted(NTI) is greater than the sorted element (SE), place the NTI to the right of the SE
// If it's smaller, shift the SE by 1 (like duplicate it)

const insertionSort = (arr2) => {
  for (let i = 1; i < arr2.length; i++) {
    let NTI = arr2[i];
    for (let j = i - 1; j >= 0; j--) {
      if (NTI > arr2[j]) {
        arr2[j + 1] = NTI;
        break;
      } else {
        arr2[j + 1] = arr2[j];
      }
    }
  }
  return arr2;
};

const arr2 = [-6, 8, 1, -2, 4];

console.log(insertionSort(arr2));

// Big-0 = 0(n^2) - Quadratic Time Complexity
