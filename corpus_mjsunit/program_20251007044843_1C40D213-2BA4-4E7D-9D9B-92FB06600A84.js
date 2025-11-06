function foo(a1) {
    a1.prop = 0;
}
function mk() {
    return Object.create(null);
}
foo(mk());
foo(mk());
foo(mk());
