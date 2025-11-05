console.log("This tests that inlining preserves basic function.arguments functionality when said functionality is used directly from within an inlined code block.");
function foo(a4, a5, a6) {
    return foo.arguments;
}
function bar(a9, a10, a11) {
    return foo(a9, a10, a11);
}
function argsToStr(a14) {
    var str = a14 + ": ";
    for (let i19 = 0; i19 < a14.length; ++i19) {
        if (i19) {
            str += ", ";
        }
        str += a14[i19];
    }
    return str;
}
for (let i28 = 0; i28 < 200; ++i28) {
    argsToStr(bar("a" + i28, "b" + i28, "c" + i28));
}
