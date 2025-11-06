console.log("Tests aliased uses of 'arguments' that have an unexpected escape.");
function baz() {
    return foo.arguments;
}
function foo() {
    var result = 0;
    var a = arguments;
    for (let i12 = 0; i12 < a.length; ++i12) {
        result += a[i12];
        result += baz()[0];
    }
    return result;
}
function bar(a22) {
    return foo(a22);
}
for (let i25 = 0; i25 < 200; i25++) {
    bar(42);
}
bar(42);
