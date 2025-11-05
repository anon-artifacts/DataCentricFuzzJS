function shouldEqual(a1, a2, a3) {
}
var exception;
arr = [null,null,null,null];
str = "xx";
try {
    for (let i15 = 0; i15 < 100; ++i15) {
        str = arr.join(str);
    }
} catch(e24) {
    exception = e24;
}
shouldEqual(10000, exception, "Error: Out of memory");
exception = undefined;
try {
    str += "x";
} catch(e31) {
    exception = e31;
}
shouldEqual(10100, exception, undefined);
