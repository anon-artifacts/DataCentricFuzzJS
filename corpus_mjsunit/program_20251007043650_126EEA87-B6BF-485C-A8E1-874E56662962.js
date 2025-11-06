function foo() {
    try {
        String.prototype.length.x();
    } catch(e5) {
    }
}
foo();
foo();
foo();
