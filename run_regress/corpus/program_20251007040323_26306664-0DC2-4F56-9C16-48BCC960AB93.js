function f0() {
}
var UBound = 0;
var BUGNUMBER = 71992;
var summary = "Testing  obj.__lookupGetter__(), obj.__lookupSetter__()";
var statprefix = "Status: ";
var status = "";
var statusitems = [];
var actual = "";
var actualvalues = [];
var expect = "";
var expectedvalues = [];
var cnName = "name";
var cnColor = "color";
var cnNonExistingProp = "ASDF_#_$%";
var cnDEFAULT = "default name";
var cnFRED = "Fred";
var cnRED = "red";
var obj = {};
var obj2 = {};
var s;
function f39(a40) {
    this._name = a40;
    let v43 = this.nameSETS;
    v43++;
}
var cnNameSetter = f39;
function f46() {
    let v48 = this.nameGETS;
    v48++;
    return this._name;
}
var cnNameGetter = f46;
const v54 = new Object();
obj = v54;
obj.nameSETS = 0;
obj.nameGETS = 0;
obj.__defineSetter__(cnName, cnNameSetter);
obj.__defineGetter__(cnName, cnNameGetter);
obj.name = cnFRED;
obj.color = cnRED;
status = "In SECTION1 of test; looking up extant getter/setter";
actual = [obj.__lookupSetter__(cnName),obj.__lookupGetter__(cnName)];
expect = [cnNameSetter,cnNameGetter];
addThis();
status = "In SECTION1 of test; looking up nonexistent getter/setter";
actual = [obj.__lookupSetter__(cnColor),obj.__lookupGetter__(cnColor)];
expect = [,,];
addThis();
status = "In SECTION1 of test; looking up getter/setter on nonexistent property";
actual = [obj.__lookupSetter__(cnNonExistingProp),obj.__lookupGetter__(cnNonExistingProp)];
expect = [,,];
addThis();
const t52 = Object.prototype;
t52.nameSETS = 0;
const t55 = Object.prototype;
t55.nameGETS = 0;
Object.prototype.__defineSetter__(cnName, cnNameSetter);
Object.prototype.__defineGetter__(cnName, cnNameGetter);
const v90 = new Object();
obj = v90;
obj.name = cnFRED;
obj.color = cnRED;
status = "In SECTION2 of test looking up extant getter/setter";
actual = [obj.__lookupSetter__(cnName),obj.__lookupGetter__(cnName)];
expect = [cnNameSetter,cnNameGetter];
addThis();
status = "In SECTION2 of test; looking up nonexistent getter/setter";
actual = [obj.__lookupSetter__(cnColor),obj.__lookupGetter__(cnColor)];
expect = [,,];
addThis();
status = "In SECTION2 of test; looking up getter/setter on nonexistent property";
actual = [obj.__lookupSetter__(cnNonExistingProp),obj.__lookupGetter__(cnNonExistingProp)];
expect = [,,];
addThis();
function TestObject() {
}
const t77 = TestObject.prototype;
t77.nameSETS = 0;
const t79 = TestObject.prototype;
t79.nameGETS = 0;
TestObject.prototype.__defineSetter__(cnName, cnNameSetter);
TestObject.prototype.__defineGetter__(cnName, cnNameGetter);
const t81 = TestObject.prototype;
t81.name = cnDEFAULT;
const v123 = new TestObject();
obj = v123;
obj.name = cnFRED;
obj.color = cnRED;
status = "In SECTION3 of test looking up extant getter/setter";
actual = [obj.__lookupSetter__(cnName),obj.__lookupGetter__(cnName)];
expect = [cnNameSetter,cnNameGetter];
addThis();
status = "In SECTION3 of test; looking up nonexistent getter/setter";
actual = [obj.__lookupSetter__(cnColor),obj.__lookupGetter__(cnColor)];
expect = [,,];
addThis();
status = "In SECTION3 of test; looking up getter/setter on nonexistent property";
actual = [obj.__lookupSetter__(cnNonExistingProp),obj.__lookupGetter__(cnNonExistingProp)];
expect = [,,];
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
    for (let i156 = 0; i156 < UBound; i156++) {
        f0(expectedvalues[i156], actualvalues[i156], getStatus(i156));
    }
}
function getStatus(a167) {
    return statprefix + statusitems[a167];
}
