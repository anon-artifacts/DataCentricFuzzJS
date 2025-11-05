const array = [0];
let share_array = new SharedArray(1);
for (let val of array) {
  array.push("" + array);
  Atomics.store(share_array, 0, val);
}