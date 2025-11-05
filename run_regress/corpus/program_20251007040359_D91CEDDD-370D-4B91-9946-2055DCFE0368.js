console.log("This tests that we can correctly call Function.prototype.call");
function f3() {
    return [myObject,"myObject.call"];
}
var myObject = { call: f3 };
function f9(a10) {
    return [this,"myFunction",a10];
}
var myFunction = f9;
function f15(a16) {
    return [this,"myFunctionWithCall",a16];
}
var myFunctionWithCall = f15;
function f21(a22) {
    return [this,"myFunctionWithCall.call",a22];
}
myFunctionWithCall.call = f21;
const v28 = Function.prototype.call;
const t18 = Function.prototype;
t18.aliasedCall = v28;
myObject.call();
myFunction("arg1");
myFunction.call(myObject, "arg1");
myFunction.call();
myFunction.call(null);
myFunction.call(undefined);
myFunction.aliasedCall(myObject, "arg1");
myFunction.aliasedCall();
myFunction.aliasedCall(null);
myFunction.aliasedCall(undefined);
myFunctionWithCall.call(myObject, "arg1");
myFunctionWithCall.aliasedCall(myObject, "arg1");
