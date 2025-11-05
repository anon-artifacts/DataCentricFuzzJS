const v2 = new Float64Array(100);
var Arr = v2;
const v6 = new Array(100);
var Arr2 = v6;
const v9 = new Object();
var Obj = v9;
var Failed = 0;
function FAILED() {
    Failed++;
    print("FAILED");
}
Obj.prop1 = 1;
Obj.prop2 = 1;
Obj.prop3 = 1;
Obj.prop4 = 1;
Obj.prop5 = 1;
Obj.prop6 = 1;
Obj.prop7 = 1;
Obj.prop8 = 1;
var x = 0.1;
var one = 1;
function init(a31) {
    for (const v32 in a31) {
        a31[v32] = x * one;
    }
}
function verify(a35) {
    for (const v36 in a35) {
        if (a35[v36] !== x) {
            FAILED();
        }
    }
}
init(Arr);
init(Obj);
init(Obj);
verify(Obj);
if (Failed === 0) {
    print("Passed");
}
