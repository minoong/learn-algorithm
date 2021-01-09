let arr = [
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
  [".", ".", ".", ".", "."],
];
let count = 1;
let x = 0;
let y = 0;
let r = 0;
let u = 0;
let d = arr[0].length;
let l = arr.length;

while (count <= arr.length * arr[0].length) {
  for (x = r; x < l; x++) {
    arr[y][x] = count++;
  }

  l--;
  x--;

  for (y = u + 1; y < d; y++) {
    arr[y][x] = count++;
  }

  d--;
  y--;

  for (x = l - 1; x >= r; x--) {
    arr[y][x] = count++;
  }

  r++;
  x++;
  for (y = d - 1; y > u; y--) {
    arr[y][x] = count++;
  }

  u++;
  y++;
}
for (let i = 0; i < arr.length; i++) {
  let value = "";
  for (let j = 0; j < arr[i].length; j++) {
    value += value.length === 0 ? `${arr[i][j]}` : `, ${arr[i][j]}`;
  }
  console.log(value);
}
