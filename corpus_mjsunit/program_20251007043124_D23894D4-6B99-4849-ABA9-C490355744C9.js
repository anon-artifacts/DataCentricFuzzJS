function f() {
    const v3 = new Error("test stack");
    throw v3;
}
var error_stack = "";
try {
    f.call(null);
} catch(e8) {
    error_stack = e8.stack;
}
error_stack.indexOf("test stack") > 0;
error_stack.indexOf("illegal") < 0;
