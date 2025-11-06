function test(a1) {
    return typeof a1 != "object";
}
var obj = {};
function f7() {
}
var func = f7;
test("");
test("");
test(1);
test(1);
test(1.5);
test(1.5);
test(undefined);
test(undefined);
test(func);
test(func);
function test2(a38) {
    return typeof a38 != "string";
}
test2(1);
test2(1);
test2(1.5);
test2(1.5);
test2(undefined);
test2(undefined);
test2(func);
test2(func);
test2(obj);
test2(obj);
function test3(a69) {
    return typeof a69 != "undefined";
}
test3(1);
test3(1);
test3(1.5);
test3(1.5);
test3(func);
test3(func);
test3(obj);
test3(obj);
test("");
test("");
