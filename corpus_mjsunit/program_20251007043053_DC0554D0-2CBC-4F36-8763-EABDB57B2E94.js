console.log("This tests that polymorphic construction works correctly.");
function Foo() {
    this.field = "foo";
}
function Bar() {
    this.field = "bar";
}
function Baz() {
    this.field = "baz";
}
function construct(a13) {
    const v14 = new a13();
    return v14;
}
for (let i16 = 0; i16 < 3; ++i16) {
    construct(Foo).field;
}
for (let i25 = 0; i25 < 3; ++i25) {
    construct(Foo).field;
    construct(Bar).field;
    construct(Baz).field;
}
