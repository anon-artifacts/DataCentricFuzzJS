function test() {
    function foo() {
    }
    foo();
    let bar = this;
}
test();
