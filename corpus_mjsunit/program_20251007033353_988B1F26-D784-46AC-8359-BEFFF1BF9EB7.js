function bar() {
    try {
    } catch(e2) {
        return (1 instanceof TypeError) && unref();
    }
}
function foo() {
    return bar();
}
foo();
