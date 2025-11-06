var GiantPrintArray = [];
function makeArrayLength() {
    return 100;
}
var obj0 = {};
var obj1 = {};
function f8() {
}
var func0 = f8;
function f10() {
    let v12 = protoObj0.length;
    obj1.method0 = --v12;
    protoObj0.v1 = obj1.method0;
    GiantPrintArray.push(protoObj0.v1);
}
var func4 = f10;
obj1.method0 = func0;
obj1.method1 = obj1.method0;
protoObj0 = Object.create(obj0);
protoObj0.length = makeArrayLength();
obj1.method1(func4());
obj1 = protoObj0;
func4();
if ((GiantPrintArray[0] !== 99) || (GiantPrintArray[1] !== 98)) {
    print("fail");
} else {
    print("pass");
}
