// Insertion Sort out-of-place
// Do not modify the original array
function insertionSort(arr) {
  // Copy the original array
  let unsorted = arr.slice();
  let sorted = [];

  // While the array is not empty
  while (unsorted.length > 0) {
    // make sure you have a console.log(sorted.join(',')) as your first line in the while loop
    console.log(sorted.join(','));

    // Pop a value from the array
    let value = unsorted.pop();

    // Create a new spot at the end of the array with null to help with comparisons
    sorted.push(null);

    // Walk through the sorted array in reverse order
    let i;
    for (i = sorted.length - 2; i >= 0; i--) {
      // Check if the value to the left is smaller than the new value
      if (sorted[i] <= value) {
        break;
      }

      // If not, shift the value to the right by 1
      sorted[i + 1] = sorted[i];
    }

    // Insert the unsorted value at the break point
    sorted[i + 1] = value;
  }

  return sorted; // Ensure the sorted array is returned
}



// In-place Insertion Sort
// Mutates the original array
function insertionSortInPlace(arr) {
  // set a pointer dividing the array into sorted and unsorted halves
  for (let i = 1; i < arr.length; i++) {
    // make sure you have a console.log(arr.join(',')) as your first line
    console.log(arr.join(','));

    let value = arr[i];
    let j;

    // for each value starting from the divider
    for (j = i - 1; j >= 0 && arr[j] > value; j--) {
      // shift the value to the right by one
      arr[j + 1] = arr[j];
    }

    // insert the unsorted value at the break point
    arr[j + 1] = value;
  }

  return arr;
}

module.exports = [insertionSort, insertionSortInPlace];
