const numbers = [10, 5, 25, 1, 40, 100];

// Sort the numbers in descending order.
numbers.sort((a, b) => {
  return b - a;
});

// Print the sorted numbers.
console.log(numbers);

//using for loop

const number = [10, 5, 25, 1, 40, 100];

// Sort the numbers in descending order using a for loop.
for (let i = 0; i < numbers.length - 1; i++) {
  for (let j = i + 1; j < numbers.length; j++) {
    if (numbers[i] < numbers[j]) {
      [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
  }
}

// Print the sorted numbers.
console.log("using for loop");
console.log(numbers);