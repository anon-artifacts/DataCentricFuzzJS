console.log("This tests that we can correctly call Function.prototype.apply");
function f3() {
    return [myObject,"myObject.apply"];
}
var myObject = { apply: f3 };
function f9(a10) {
    return [this,"myFunction",a10];
}
var myFunction = f9;
function f15(a16) {
    return [this,"myFunctionWithApply",a16];
}
var myFunctionWithApply = f15;
function forwarder(a22, a23, a24) {
    function g() {
        return a22.apply(a23, arguments);
    }
    return g.apply(null, a24);
}
function recurseArguments() {
    recurseArguments.apply(null, arguments);
}
function f34(a35) {
    return [this,"myFunctionWithApply.apply",a35];
}
myFunctionWithApply.apply = f34;
const v41 = Function.prototype.apply;
const t27 = Function.prototype;
t27.aliasedApply = v41;
var arg1Array = ["arg1"];
myObject.apply();
forwarder(myObject);
myFunction("arg1");
forwarder(myFunction, null, ["arg1"]);
myFunction.apply(myObject, ["arg1"]);
myFunction.apply(myObject, arg1Array);
forwarder(myFunction, myObject, arg1Array);
myFunction.apply();
myFunction.apply(null);
myFunction.apply(undefined);
myFunction.aliasedApply(myObject, ["arg1"]);
myFunction.aliasedApply();
myFunction.aliasedApply(null);
myFunction.aliasedApply(undefined);
myFunctionWithApply.apply(myObject, ["arg1"]);
myFunctionWithApply.aliasedApply(myObject, ["arg1"]);
myFunctionWithApply.apply(myObject, arg1Array);
forwarder(myFunctionWithApply, myObject, arg1Array);
myFunctionWithApply.aliasedApply(myObject, arg1Array);
try {
    throw 42;
} catch(e82) {
}
function stackOverflowTest() {
    try {
        var a;
        var b;
        var c;
        var d;
        var e;
        var f;
        var g;
        var h;
        var i;
        var j;
        var k;
        var l;
        var m;
        var n;
        var o;
        var p;
        var q;
        var r;
        var s;
        var t;
        var u;
        var v;
        var w;
        var x;
        var y;
        var z;
        stackOverflowTest();
    } catch(e137) {
        try {
            const v141 = new Array(5000000);
            myFunction.apply(null, v141);
        } catch(e143) {
        }
        try {
            const v149 = new Array(1 << 30);
            myFunction.apply(null, v149);
        } catch(e151) {
        }
    }
}
stackOverflowTest();
try {
    const v156 = new Array(50000);
    recurseArguments.apply(null, v156);
} catch(e158) {
}
