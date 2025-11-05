function foo() {
    let val = Promise.resolve().then();
}
foo();
foo();
