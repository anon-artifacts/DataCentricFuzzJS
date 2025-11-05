function foo() {
    new foo();
}
try {
    foo();
} catch(e3) {
    print(e3);
}
