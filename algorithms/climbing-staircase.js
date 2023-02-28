// No of ways a staircase can be climbed with constraint 1 step or 2 steps at a time

const climbingStairCase = (n) => {
  const noOfWays = [1, 2];
  for (let i = 2; i <= n; i++) {
    noOfWays[i] = noOfWays[i - 1] + noOfWays[i - 2];
  }
  return noOfWays[n - 1];
};

console.log(climbingStairCase(5));

// Big O = O(n)
