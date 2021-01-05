const binarySearch = (arr, target) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = parseInt((low + high) / 2, 10);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return -1;
};

if (!window.algorightm) {
  window.algorightm = {};
  window.algorightm.binarySearch = binarySearch;
}
