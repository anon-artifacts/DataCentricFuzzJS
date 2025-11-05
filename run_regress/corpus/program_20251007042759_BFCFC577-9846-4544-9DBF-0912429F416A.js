console.log("Tests functions that use 'arguments' in both an aliased and a non-aliased way.");
function foo() {
    var result = 0;
    var a = arguments;
    for (let i9 = 0; i9 < a.length; ++i9) {
        result += arguments[i9];
    }
    return result;
}
function bar(a18) {
    return foo(a18);
}
for (let i21 = 0; i21 < 200; i21++) {
    bar(42);
}
bar(42);
