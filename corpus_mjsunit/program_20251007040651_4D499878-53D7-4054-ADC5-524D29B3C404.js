console.log("Tests what happens if you OSR exit within inlined code that has interesting control flow with arguments that are specially formatted and you capture the arguments reflectively after the OSR exit.");
function foo() {
    return bar.arguments[0];
}
function bar(a8, a9) {
    if ((a8 + 5) > 4) {
        return (a9.f + 42) + foo();
    } else {
        return (a9.f + 43) + foo();
    }
}
function baz(a25, a26) {
    return bar(a25, a26);
}
for (let i29 = 0; i29 < 300; ++i29) {
    var expected;
    var arg1 = i29;
    var arg2;
    if (i29 < 250) {
        const v43 = i29 + 1;
        arg2 = { f: v43 };
        expected = ((i29 + 1) + 42) + i29;
    } else {
        arg2 = { f: 1.5 };
        expected = (1.5 + 42) + i29;
    }
    baz(arg1, arg2);
}
