function foo() {
    const v1 = {};
    var a = { b: v1 };
    if (!(a = (null !== a.b) && (0 < a.b.a))) {
        return a;
    }
}
let result = null;
for (let i16 = 0; i16 < 100; ++i16) {
    foo();
}
if (foo() === false) {
    console.log("Pass");
}
