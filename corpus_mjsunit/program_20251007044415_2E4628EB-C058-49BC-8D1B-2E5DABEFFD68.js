function f(a1) {
    if (a1 < 0) {
        throw Error("abc");
    } else {
        f(a1 - 1);
    }
}
try {
    f(1);
} catch(e12) {
    const v13 = /\(.*\\/g;
    var stackAfterTrimDirectoryName = e12.stack.replace(v13, "(");
    print(stackAfterTrimDirectoryName);
}
