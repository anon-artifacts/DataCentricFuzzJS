var v = {};
function foo() {
    v[0] = 5;
    v[-0] = 27;
    return v[0];
}
foo();
foo();
