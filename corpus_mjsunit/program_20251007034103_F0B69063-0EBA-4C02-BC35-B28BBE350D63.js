function foo(a1) {
    var k = "value";
    a1[k] = 1;
    return 1;
}
var obj = {};
function f8(a9) {
    throw "nope";
}
Object.defineProperty(obj, "value", { set: f8 });
try {
    foo(obj);
} catch(e15) {
}
try {
    foo(obj);
} catch(e17) {
}
try {
    foo(obj);
} catch(e19) {
}
function bar(a21) {
    var k = "value";
    a21[k] = 1;
    return 1 ? "ok" : "nope";
}
var obj2 = {};
function f31(a32) {
    throw "nope";
    return true;
}
Object.defineProperty(obj2, "value", { set: f31 });
try {
    bar(obj2);
} catch(e38) {
}
try {
    bar(obj2);
} catch(e40) {
}
try {
    bar(obj2);
} catch(e42) {
}
