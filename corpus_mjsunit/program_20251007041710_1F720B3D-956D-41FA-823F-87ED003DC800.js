function inlined() {
    return 1;
}
function foo() {
    if ((inlined() + 0.5) == null) {
        return "null";
    }
    return "non-null";
}
foo();
foo();
foo();
