var GiantPrintArray = [];
var reuseObjects = false;
var PolymorphicFuncObjArr = [];
var PolyFuncArr = [];
function GetPolymorphicFunction() {
    if (PolyFuncArr.length > 1) {
        var myFunc = PolyFuncArr.shift();
        PolyFuncArr.push(myFunc);
        return myFunc;
    } else {
        return PolyFuncArr[0];
    }
}
function GetObjectwithPolymorphicFunction() {
    if (reuseObjects) {
        if (PolymorphicFuncObjArr.length > 1) {
            var myFunc = PolymorphicFuncObjArr.shift();
            PolymorphicFuncObjArr.push(myFunc);
            return myFunc;
        } else {
            return PolymorphicFuncObjArr[0];
        }
    } else {
        var obj = {};
        obj.polyfunc = GetPolymorphicFunction();
        PolymorphicFuncObjArr.push(obj);
        return obj;
    }
}
function InitPolymorphicFunctionArray() {
    for (let i30 = 0; i30 < arguments.length; i30++) {
        PolyFuncArr.push(arguments[i30]);
    }
}
function test0() {
    function v79580() {
        var v79581 = -2147483646;
        {
            const v79581 = 1;
            GiantPrintArray.push(v79581);
        }
        GiantPrintArray.push(v79581);
    }
    v79580();
}
test0();
test0();
test0();
test0();
test0();
test0();
runningJITtedCode = true;
test0();
print("pass");
