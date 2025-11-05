console.log("Tests uses of 'arguments' that are aliased but span code origins.");
function foo() {
    return arguments;
}
function bar(a6) {
    var result = 0;
    for (let i10 = 0; i10 < a6.length; ++i10) {
        result += a6[i10];
    }
    return result;
}
function baz(a18) {
    return bar(foo(a18));
}
for (let i22 = 0; i22 < 200; i22++) {
    baz(42);
}
baz(42);
