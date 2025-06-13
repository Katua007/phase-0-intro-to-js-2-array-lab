// Write your solution here!
// --- Global Variable Declaration ---

// Task: Declare an array called `cats` with an initial value of ["Milo", "Otis", "Garfield"].
// This array will be manipulated by the functions below.
var cats = ["Milo", "Otis", "Garfield"];


// --- Destructive Array Methods ---
// These functions modify the original 'cats' array directly.

// Task: `destructivelyAppendCat(name)`: Appends a cat to the end of the `cats` array.
// Uses the `push()` method which modifies the array in place.
function destructivelyAppendCat(name) {
  cats.push(name);
  // No return value explicitly required by tests, but push() returns new length.
}

// Task: `destructivelyPrependCat(name)`: Prepends a cat to the beginning of the `cats` array.
// Uses the `unshift()` method which modifies the array in place.
function destructivelyPrependCat(name) {
  cats.unshift(name);
  // No return value explicitly required by tests, but unshift() returns new length.
}

// Task: `destructivelyRemoveLastCat()`: Removes the last cat from the `cats` array.
// Uses the `pop()` method which modifies the array in place and returns the removed element.
function destructivelyRemoveLastCat() {
  cats.pop();
  // No return value explicitly required by tests.
}

// Task: `destructivelyRemoveFirstCat()`: Removes the first cat from the `cats` array.
// Uses the `shift()` method which modifies the array in place and returns the removed element.
function destructivelyRemoveFirstCat() {
  cats.shift();
  // No return value explicitly required by tests.
}


// --- Non-Destructive Array Methods ---
// These functions return a *new* array, leaving the original 'cats' array unchanged.

// Task: `appendCat(name)`: Appends a cat to the `cats` array and returns a new array.
// Uses the spread operator (...) to create a new array without modifying the original.
function appendCat(name) {
  return [...cats, name];
}

// Task: `prependCat(name)`: Prepends a cat to the `cats` array and returns a new array.
// Uses the spread operator (...) to create a new array without modifying the original.
function prependCat(name) {
  return [name, ...cats];
}

// Task: `removeLastCat()`: Removes the last cat in the `cats` array and returns a new array.
// Uses the `slice()` method to create a shallow copy up to the second-to-last element.
function removeLastCat() {
  // slice(0, -1) creates a new array from index 0 up to (but not including) the last element.
  return cats.slice(0, -1);
}

// Task: `removeFirstCat()`: Removes the first cat from the `cats` array and returns a new array.
// Uses the `slice()` method to create a shallow copy starting from the second element.
function removeFirstCat() {
  // slice(1) creates a new array starting from index 1 to the end.
  return cats.slice(1);
}