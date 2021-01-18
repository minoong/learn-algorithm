// 순열 알고리즘 재귀 호출
const example = ["A", "B", "C"];
const result = getPermutations(example, 0, 3);
console.log(result);

function getPermutations(arr, depth, r) {
  if (depth == r) {
    console.log([...arr.slice(0, r), ...arr.slice(r + 1)]);
    return;
  }
  for (let i = depth; i < arr.length; i++) {
    console.log(`<<< i ${i}, depth ${depth} r ${r} arr ${arr}`);
    swap(arr, i, depth);
    getPermutations(arr, depth + 1, r);
    console.log(`>>> i ${i}, depth ${depth} r ${r} arr ${arr}`);
    swap(arr, i, depth);
  }
}

function swap(arr, index1, index2) {
  const temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}
