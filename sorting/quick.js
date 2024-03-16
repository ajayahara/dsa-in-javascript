function QuickSort(arr, left, right) {
    if (left < right) {
        let partIndex = Partition(arr, left, right);
        QuickSort(arr, left, partIndex - 1);
        QuickSort(arr, partIndex + 1, right);
    }
    return arr;
}

function Partition(arr, left, right) {
    let pivot = arr[right];
    let index = left - 1;
    for (let j = left; j <= right - 1; j++) {
        if (arr[j] < pivot) {
            index++;
            [arr[index], arr[j]] = [arr[j], arr[index]];
        }
    }
    [arr[index + 1], arr[right]] = [arr[right], arr[index + 1]];
    return index + 1;
}

const sortedArray = QuickSort([5, 3, 8, 2, 1], 0, 4);
console.log(sortedArray);
