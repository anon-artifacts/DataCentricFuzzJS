console.log("Tests that DFG inlining does not brak function.arguments.caller.");
var callCount = 0;
var resultArray = [];
function throwError() {
    throw {};
}
function nonInlineable() {
    if (0) {
        function f12() {
        }
        return [arguments,f12];
    }
    if (++callCount == 999999) {
        var f = nonInlineable;
        while (f) {
            resultArray.push(f.name);
            f = f.arguments.callee.caller;
        }
    }
}
function inlineable() {
    this.nonInlineable();
}
var object = { nonInlineable: nonInlineable, inlineable: inlineable };
function makeInlinableCall(a30) {
    for (let i32 = 0; i32 < 1000; i32++) {
        a30.inlineable();
    }
}
function g() {
    var j = 0;
    for (let i43 = 0; i43 < 1000; i43++) {
        j++;
        makeInlinableCall(object);
    }
}
g();
resultArray.length;
resultArray[3];
resultArray[2];
resultArray[1];
resultArray[0];
