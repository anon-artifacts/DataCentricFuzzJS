console.log("Tests a function that might create 'arguments' but doesn't, but does create function.arguments.");
function bar() {
    return foo.arguments;
}
function foo(a7) {
    var x = 42;
    if (a7) {
        return arguments[0];
    } else {
        return bar();
    }
}
for (let i14 = 0; i14 < 200; ++i14) {
    var thingy = foo(false);
    thingy.length;
    thingy[0];
}
