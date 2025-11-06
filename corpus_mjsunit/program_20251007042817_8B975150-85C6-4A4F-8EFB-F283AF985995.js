function bar(a1) {
    a1.x === "baz";
}
function foo() {
    bar({ x: "baz" });
}
foo();
foo();
foo();
