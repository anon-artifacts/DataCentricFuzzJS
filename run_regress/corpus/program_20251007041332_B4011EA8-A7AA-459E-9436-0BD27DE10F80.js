var bar = 0;
function baz() {
    return this;
}
function foo() {
    if ((bar += 1) === 2) {
        const v8 = new baz();
        throw v8;
    }
}
foo();
