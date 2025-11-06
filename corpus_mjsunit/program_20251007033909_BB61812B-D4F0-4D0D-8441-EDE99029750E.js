console.log("Test caller and arguments properties in function in non strict mode");
function foo() {
    return 1;
}
function f5() {
}
Object.getOwnPropertyNames(f5).length;
function f10() {
}
Object.getOwnPropertyNames(f10).includes("caller");
function f14() {
}
Object.getOwnPropertyNames(f14).includes("arguments");
function f18() {
}
f18.hasOwnProperty("caller");
function f21() {
}
f21.__proto__.hasOwnProperty("caller");
function f25() {
}
f25.hasOwnProperty("arguments");
function f28() {
}
f28.__proto__.hasOwnProperty("arguments");
typeof Object.getOwnPropertyDescriptor(foo, "arguments");
typeof Object.getOwnPropertyDescriptor(foo, "caller");
foo.caller;
foo.arguments;
foo.caller = 10;
foo.arguments = 10;
foo.caller;
foo.arguments;
function f43() {
    return boo.arguments;
}
var boo = f43;
boo("abc")[0];
boo.arguments = "not-expected-value";
boo("expected-value")[0];
function f54() {
    return f.caller;
}
var f = f54;
function f58(a59) {
    return a59();
}
var g = f58;
g(f);
function f63(a64, a65) {
    function f66() {
    }
    var f = f66;
    if (a65) {
        const t54 = f.__proto__;
        delete t54.caller;
    }
    const t57 = f.__proto__;
    t57.caller = a64;
    return f;
}
var doSetCaller = f63;
var value = "property-value";
try {
    doSetCaller(value, false);
} catch(e76) {
}
doSetCaller(value, true).__proto__.caller;
function f81(a82, a83) {
    function f84() {
    }
    var f = f84;
    if (a83) {
        const t73 = f.__proto__;
        delete t73.arguments;
    }
    const t76 = f.__proto__;
    t76.arguments = a82;
    return f;
}
var doSetArguments = f81;
try {
    doSetArguments(value, false);
} catch(e92) {
}
doSetArguments(value, true).__proto__.arguments;
