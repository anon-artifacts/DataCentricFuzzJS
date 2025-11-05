function toLiteralSource(a1) {
    if (a1 === null) {
        return "null";
    }
    if (typeof a1 === "string") {
        return escapeString(a1);
    }
    if (typeof a1 === "number") {
        return generateNumber(a1);
    }
    if (typeof a1 === "boolean") {
        return a1 ? "true" : "false";
    }
    a1.test();
}
function test(a23) {
    var b = a23 ? true : {};
    return toLiteralSource(b);
}
var output = true;
for (let i32 = 0; i32 < 1000; i32++) {
    output = test(output) == "true";
}
