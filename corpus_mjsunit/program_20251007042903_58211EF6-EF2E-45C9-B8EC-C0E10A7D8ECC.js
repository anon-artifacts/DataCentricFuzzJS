function foo(a1) {
    return { ["p"]: 0, x: a1 };
}
foo();
var a = { ["p"]: "" };
foo();
