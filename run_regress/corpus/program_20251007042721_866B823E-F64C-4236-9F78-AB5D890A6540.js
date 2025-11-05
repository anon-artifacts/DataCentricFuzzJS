function foo() {
    try {
    } catch(e1) {
    }
    print(e);
    let e;
}
try {
    foo();
} catch(e8) {
}
