function Regular() {
    this[0] >>= 0;
    this[1] ^= 1;
}
function foo() {
    const v6 = new Regular();
    var regular = v6;
}
foo();
