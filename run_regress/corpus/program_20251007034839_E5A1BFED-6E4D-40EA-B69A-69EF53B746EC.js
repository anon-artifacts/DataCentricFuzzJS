console.log("This tests that inlining preserves basic function.arguments functionality.");
function foo() {
    return bar.arguments;
}
function bar(a7, a8, a9) {
    return foo(a7, a8, a9);
}
function baz(a12, a13, a14) {
    return bar(a12, a13, a14);
}
function argsToStr(a17) {
    var str = a17 + ": ";
    for (let i22 = 0; i22 < a17.length; ++i22) {
        if (i22) {
            str += ", ";
        }
        str += a17[i22];
    }
    return str;
}
for (let i31 = 0; i31 < 200; ++i31) {
    argsToStr(baz("a" + i31, "b" + i31, "c" + i31));
}
var successfullyParsed = true;
