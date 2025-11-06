function f0() {
}
actual = "No Error";
expected = /column-numbers\.js:4:11/;
try {
    const v7 = new Error("test");
    throw v7;
} catch(e8) {
    actual = e8.stack;
    f0("Caught exception " + e8.stack);
}
f0(expected, actual, "column number present");
