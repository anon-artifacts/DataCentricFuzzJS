function f0() {
}
var UBound = 0;
var BUGNUMBER = "(none)";
var summary = "Testing  obj.__defineSetter__(), obj.__defineGetter__()";
var statprefix = "Status: ";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var cnName = "name";
var cnDEFAULT = "default name";
var cnFRED = "Fred";
var obj = {};
var obj2 = {};
var s = "";
function f33(a34) {
    this._name = a34;
    let v37 = this.nameSETS;
    v37++;
}
var cnNameSetter = f33;
function f40() {
    let v42 = this.nameGETS;
    v42++;
    return this._name;
}
var cnNameGetter = f40;
const v48 = new Object();
obj = v48;
obj.nameSETS = 0;
obj.nameGETS = 0;
obj.__defineSetter__(cnName, cnNameSetter);
obj.__defineGetter__(cnName, cnNameGetter);
status = "In SECTION1 of test after 0 sets, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,0];
addThis();
s = obj.name;
status = "In SECTION1 of test after 0 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,1];
addThis();
obj.name = cnFRED;
status = "In SECTION1 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = obj.name;
status = "In SECTION1 of test after 2 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,2];
addThis();
const t54 = Object.prototype;
t54.nameSETS = 0;
const t57 = Object.prototype;
t57.nameGETS = 0;
Object.prototype.__defineSetter__(cnName, cnNameSetter);
Object.prototype.__defineGetter__(cnName, cnNameGetter);
const v96 = new Object();
obj = v96;
status = "In SECTION2 of test after 0 sets, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,0];
addThis();
s = obj.name;
status = "In SECTION2 of test after 0 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [0,1];
addThis();
obj.name = cnFRED;
status = "In SECTION2 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = obj.name;
status = "In SECTION2 of test after 2 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,2];
addThis();
function TestObject() {
}
const t84 = TestObject.prototype;
t84.nameSETS = 0;
const t86 = TestObject.prototype;
t86.nameGETS = 0;
TestObject.prototype.__defineSetter__(cnName, cnNameSetter);
TestObject.prototype.__defineGetter__(cnName, cnNameGetter);
const t88 = TestObject.prototype;
t88.name = cnDEFAULT;
const v141 = new TestObject();
obj = v141;
status = "In SECTION3 of test after 1 set, 0 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,0];
addThis();
s = obj.name;
status = "In SECTION3 of test after 1 set, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [1,1];
addThis();
obj.name = cnFRED;
status = "In SECTION3 of test after 2 sets, 1 get";
actual = [obj.nameSETS,obj.nameGETS];
expect = [2,1];
addThis();
obj.name = obj.name;
status = "In SECTION3 of test after 3 sets, 2 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [3,2];
addThis();
const v176 = new TestObject();
obj2 = v176;
status = "obj2 = new TestObject() after 1 set, 0 gets";
actual = [obj2.nameSETS,obj2.nameGETS];
expect = [1,0];
addThis();
obj2.name = obj.name + obj2.name;
status = "obj2 = new TestObject() after 2 sets, 1 get";
actual = [obj2.nameSETS,obj2.nameGETS];
expect = [2,1];
addThis();
status = "In SECTION3 of test after 3 sets, 3 gets";
actual = [obj.nameSETS,obj.nameGETS];
expect = [3,3];
addThis();
test();
function addThis() {
    statusitems[UBound] = status;
    actualvalues[UBound] = actual.toString();
    expectedvalues[UBound] = expect.toString();
    UBound++;
}
function test() {
    f0(BUGNUMBER);
    f0(summary);
    for (let i214 = 0; i214 < UBound; i214++) {
        f0(expectedvalues[i214], actualvalues[i214], getStatus(i214));
    }
}
function getStatus(a225) {
    return statprefix + statusitems[a225];
}
