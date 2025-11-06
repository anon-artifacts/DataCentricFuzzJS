function shouldEqual(a1, a2) {
}
s0 = "";
s1 = "NaNxxxxx";
try {
    for (let i8 = 0; i8 < 27; i8++) {
        var oldS1 = s1;
        s1 += s1;
        s0 = oldS1;
    }
} catch(e17) {
}
try {
    s1 += s0;
} catch(e20) {
}
var exception;
try {
    /x/[Symbol.match](s1);
} catch(e28) {
    exception = e28;
}
shouldEqual(exception, "Error: Out of memory");
