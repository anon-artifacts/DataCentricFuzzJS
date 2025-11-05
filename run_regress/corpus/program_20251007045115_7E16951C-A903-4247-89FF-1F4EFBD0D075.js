console.log("Tests that we can inline a constructor that uses arguments without failing DFG validation.");
function Foo() {
    this.x = arguments[0];
}
function bar() {
    const v9 = new Foo(42);
    return v9;
}
for (let i11 = 0; i11 < 200; ++i11) {
    bar().x;
}
