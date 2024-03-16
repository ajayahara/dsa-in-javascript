function SelectionSort(...arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let j = i+1; j < n; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    [arr[i], arr[min]] = [arr[min], arr[i]];
  }
  return arr;
}
const sortedArray = SelectionSort(5, 3, 8, 2, 1);
console.log(sortedArray);
