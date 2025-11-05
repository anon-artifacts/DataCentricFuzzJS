function main() {
  for (let a = 0; a < 100; a++) {
    for (let b = 0; b < 20; b++) {
      Math.abs(Math.max(b, -16)) - b;
    }
  }
}
main();
main();
main();
// --future --assert-types --turboshaft-assert-types