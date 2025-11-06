console.log("This test checks that JavaScriptCore does not crash when uwinding the stack that includes a host function.");
function twoHostFunctions() {
    var stack = [];
    const v6 = twoHostFunctions.arguments;
    stack.push({ args: v6 });
    const v9 = twoHostFunctions.arguments;
    stack.push({ args: v9 });
    console.log("Two host functions called in a row.");
}
function arrayOperatorFunction(a15) {
    return a15 + 5;
}
const v22 = new Array(0, 1, 2);
var myArray = v22;
function hostCallsUser(a25) {
    return a25.map(arrayOperatorFunction);
}
function throwException() {
    throw "Exception thrown";
}
function hostAndException() {
    var stack = [];
    const v32 = hostAndException.arguments;
    stack.push({ args: v32 });
    throwException();
}
twoHostFunctions();
myArray = hostCallsUser(myArray);
try {
    hostAndException();
} catch(e39) {
    console.log("Exception thrown and caught");
}
