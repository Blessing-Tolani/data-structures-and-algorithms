// Cartesian product of Array A and Array B is A x B where
// A = [1,2]
// B = [3,4,5]
// A x B is [[1,3], [1,4], [1,5], [2,3], [2,4], [2,5]]

const cartesianProduct = (arrA, arrB) => {
  const newArray = [];
  for (let i = 0; i < arrA.length; i++) {
    for (let j = 0; j < arrB.length; j++) {
      newArray.push([arrA[i], arrB[j]]);
    }
  }

  return newArray;
};

const A = [1, 2];
const B = [3, 4, 5];
console.log(cartesianProduct(A, B));

//Big O is O(mn);

// It's dependent on both the size of array m and array n
