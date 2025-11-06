var exception = false;
try {
    Object.defineProperty(null, null, null);
} catch(e7) {
    exception = true;
    /called on non-object/.test(e7);
}
exception = false;
try {
    Object.defineProperty(undefined, undefined, undefined);
} catch(e17) {
    exception = true;
    /called on non-object/.test(e17);
}
exception = false;
try {
    Object.defineProperty(0, "foo", undefined);
} catch(e27) {
    exception = true;
    /called on non-object/.test(e27);
}
var obj1 = {};
var val1 = 0;
var val2 = 0;
var val3 = 0;
function setter1() {
    val1++;
}
function getter1() {
    return val1;
}
function setter2() {
    val2++;
}
function getter2() {
    return val2;
}
function setter3() {
    val3++;
}
function getter3() {
    return val3;
}
var emptyDesc = {};
var accessorConfigurable = { set: setter1, get: getter1, configurable: true };
var accessorNoConfigurable = { set: setter2, get: getter2, configurable: false };
var accessorOnlySet = { set: setter3, configurable: true };
var accessorOnlyGet = { get: getter3, configurable: true };
function f62() {
}
var accessorDefault = { set: f62 };
var dataConfigurable = { value: 1000, configurable: true };
var dataNoConfigurable = { value: 2000, configurable: false };
var dataWritable = { value: 3000, writable: true };
try {
    Object.defineProperty(obj1, "foo", undefined);
} catch(e82) {
    /must be an object/.test(e82);
}
Object.defineProperty(obj1, "foo", emptyDesc);
obj1.foo;
var desc = Object.getOwnPropertyDescriptor(obj1, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
desc.set;
desc.value;
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
try {
    Object.defineProperty(obj1, "foo", accessorConfigurable);
} catch(e107) {
    /Cannot redefine property/.test(e107);
}
Object.defineProperty(obj1, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
obj1.bar = 1;
obj1.bar = 1;
obj1.bar;
Object.defineProperty(obj1, "bar", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
obj1.bar = 1;
obj1.bar = 1;
obj1.bar;
try {
    Object.defineProperty(obj1, "bar", accessorConfigurable);
} catch(e159) {
    /Cannot redefine property/.test(e159);
}
try {
    Object.defineProperty(obj1, "bar", dataConfigurable);
} catch(e165) {
    /Cannot redefine property/.test(e165);
}
Object.defineProperty(obj1, "bar", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
obj1.bar = 1;
obj1.bar = 1;
obj1.bar;
Object.defineProperty(obj1, "setOnly", accessorOnlySet);
desc = Object.getOwnPropertyDescriptor(obj1, "setOnly");
desc.configurable;
desc.enumerable;
desc.set;
accessorOnlySet.set;
desc.writable;
desc.value;
desc.get;
obj1.setOnly = 1;
Object.defineProperty(obj1, "setOnly", accessorOnlyGet);
desc = Object.getOwnPropertyDescriptor(obj1, "setOnly");
desc.configurable;
desc.enumerable;
desc.get;
accessorOnlyGet.get;
desc.set;
accessorOnlySet.set;
desc.writable;
desc.value;
obj1.setOnly = 1;
Object.defineProperty(obj1, "both", accessorConfigurable);
Object.defineProperty(obj1, "both", accessorOnlySet);
desc = Object.getOwnPropertyDescriptor(obj1, "both");
desc.configurable;
desc.enumerable;
desc.set;
accessorOnlySet.set;
desc.get;
accessorConfigurable.get;
desc.writable;
desc.value;
obj1.both = 1;
Object.defineProperty(obj1, "foobar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
obj1.foobar = 1001;
obj1.foobar;
Object.defineProperty(obj1, "foobar", dataWritable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
obj1.foobar = 1001;
obj1.foobar;
Object.defineProperty(obj1, "foobar", dataNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
try {
    Object.defineProperty(obj1, "foobar", dataConfigurable);
} catch(e299) {
    /Cannot redefine property/.test(e299);
}
try {
    Object.defineProperty(obj1, "foobar", dataConfigurable);
} catch(e305) {
    /Cannot redefine property/.test(e305);
}
Object.defineProperty(obj1, "foobar", dataNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj1, "foobar");
obj1.foobar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
var obj2 = {};
Object.defineProperty(obj2, "foo", accessorConfigurable);
Object.defineProperty(obj2, "foo", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "foo");
obj2.foo;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
Object.defineProperty(obj2, "foo", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
obj2.foo = 1;
obj2.foo;
Object.defineProperty(obj2, "bar", dataConfigurable);
Object.defineProperty(obj2, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
obj2.bar = 1;
obj2.foo;
Object.defineProperty(obj2, "bar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj2, "bar");
obj2.bar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
function get() {
    return this.x;
}
function set(a403) {
    this.x = a403;
}
var obj3 = { x: 1000 };
obj3.__defineGetter__("foo", get);
obj3.__defineSetter__("foo", set);
desc = Object.getOwnPropertyDescriptor(obj3, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
get();
desc.set;
set();
desc.value;
obj3.foo = 1;
obj3.x;
obj3.foo;
Object.defineProperty(obj3, "foo", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj3, "foo");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorNoConfigurable.get;
desc.set;
accessorNoConfigurable.set;
desc.value;
obj3.foo = 1;
obj3.foo;
obj3.__defineGetter__("bar", get);
obj3.__defineSetter__("bar", set);
Object.defineProperty(obj3, "bar", dataConfigurable);
desc = Object.getOwnPropertyDescriptor(obj3, "bar");
obj3.bar;
desc.value;
desc.configurable;
desc.writable;
desc.enumerable;
desc.get;
desc.set;
var obj4 = {};
function f470() {
    return 42;
}
var func = f470;
obj4.bar = func;
obj4.bar();
Object.defineProperty(obj4, "bar", accessorConfigurable);
desc = Object.getOwnPropertyDescriptor(obj4, "bar");
desc.configurable;
desc.enumerable;
desc.writable;
desc.get;
accessorConfigurable.get;
desc.set;
accessorConfigurable.set;
desc.value;
obj4.bar = 1;
obj4.bar;
try {
    obj4.bar();
} catch(e496) {
    /is not a function/.test(e496);
}
var obj5 = {};
Object.defineProperty(obj5, "foo", accessorNoConfigurable);
desc = Object.getOwnPropertyDescriptor(obj5, "foo");
Object.defineProperty(obj5, "foo", accessorNoConfigurable);
var descDifferent = { configurable: false, enumerable: false, set: setter1, get: getter2 };
try {
    Object.defineProperty(obj5, "foo", descDifferent);
} catch(e514) {
    /Cannot redefine property/.test(e514);
}
descDifferent = { configurable: false, enumerable: false, set: setter2, get: getter1 };
try {
    Object.defineProperty(obj5, "foo", descDifferent);
} catch(e523) {
    /Cannot redefine property/.test(e523);
}
descDifferent = { configurable: false, enumerable: true, set: setter2, get: getter2 };
try {
    Object.defineProperty(obj5, "foo", descDifferent);
} catch(e532) {
    /Cannot redefine property/.test(e532);
}
descDifferent = { configurable: false, enumerable: true, set: setter2, get: getter2 };
try {
    Object.defineProperty(obj5, "foo", descDifferent);
} catch(e541) {
    /Cannot redefine property/.test(e541);
}
descDifferent = { configurable: false, enumerable: false, set: setter2, get: getter2 };
Object.defineProperty(obj5, "foo", descDifferent);
desc = Object.getOwnPropertyDescriptor(obj5, "foo");
desc.get;
getter2();
desc.set;
setter2();
desc.enumerable;
desc.configurable;
Object.defineProperty(obj5, "bar", dataNoConfigurable);
Object.defineProperty(obj5, "bar", dataNoConfigurable);
descDifferent = { configurable: false, enumerable: false, writable: false, value: 1999 };
try {
    Object.defineProperty(obj5, "bar", descDifferent);
} catch(e569) {
    /Cannot redefine property/.test(e569);
}
descDifferent = { configurable: false, enumerable: false, writable: true, value: 2000 };
try {
    Object.defineProperty(obj5, "bar", descDifferent);
} catch(e580) {
    /Cannot redefine property/.test(e580);
}
descDifferent = { configurable: false, enumerable: true, writable: false, value: 2000 };
try {
    Object.defineProperty(obj5, "bar", descDifferent);
} catch(e591) {
    /Cannot redefine property/.test(e591);
}
descDifferent = { configurable: true, enumerable: false, writable: false, value: 2000 };
try {
    Object.defineProperty(obj5, "bar", descDifferent);
} catch(e602) {
    /Cannot redefine property/.test(e602);
}
descDifferent = { configurable: false, enumerable: false, writable: false, value: 2000 };
Object.defineProperty(obj5, "bar", descDifferent);
desc = Object.getOwnPropertyDescriptor(obj5, "bar");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
const v620 = -0;
var descMinusZero = { value: v620, configurable: false };
const v625 = +0;
var descPlusZero = { value: v625, configurable: false };
Object.defineProperty(obj5, "minuszero", descMinusZero);
Object.defineProperty(obj5, "minuszero", descMinusZero);
exception = false;
try {
    Object.defineProperty(obj5, "minuszero", descPlusZero);
} catch(e636) {
    exception = true;
    /Cannot redefine property/.test(e636);
}
Object.defineProperty(obj5, "pluszero", descPlusZero);
Object.defineProperty(obj5, "pluszero", descPlusZero);
exception = false;
try {
    Object.defineProperty(obj5, "pluszero", descMinusZero);
} catch(e647) {
    exception = true;
    /Cannot redefine property/.test(e647);
}
var obj6 = {};
obj6[1] = "foo";
obj6[2] = "bar";
obj6[3] = "42";
obj6[4] = "43";
obj6[5] = "44";
var descElement = { value: "foobar" };
var descElementNonConfigurable = { value: "barfoo", configurable: false };
var descElementNonWritable = { value: "foofoo", writable: false };
var descElementNonEnumerable = { value: "barbar", enumerable: false };
var descElementAllFalse = { value: "foofalse", configurable: false, writable: false, enumerable: false };
Object.defineProperty(obj6, "1", descElement);
desc = Object.getOwnPropertyDescriptor(obj6, "1");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(obj6, "2", descElementNonConfigurable);
desc = Object.getOwnPropertyDescriptor(obj6, "2");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
try {
    Object.defineProperty(obj6, "2", descElement);
    desc = Object.getOwnPropertyDescriptor(obj6, "2");
    desc.value;
} catch(e703) {
}
exception = false;
try {
    function f705() {
        return 0;
    }
    var descAccessor = { get: f705 };
    Object.defineProperty(obj6, "2", descAccessor);
} catch(e711) {
    exception = true;
    /Cannot redefine property/.test(e711);
}
Object.defineProperty(obj6, "2", descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(obj6, "2");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(obj6, "3", descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(obj6, "3");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(obj6, "4", descElementNonEnumerable);
desc = Object.getOwnPropertyDescriptor(obj6, "4");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(obj6, "5", descElementAllFalse);
desc = Object.getOwnPropertyDescriptor(obj6, "5");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(obj6, "15", descElement);
desc = Object.getOwnPropertyDescriptor(obj6, "15");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
obj6[15] = "overwrite";
obj6[15];
const v764 = new Array();
var arr = v764;
arr[1] = "foo";
arr[2] = "bar";
arr[3] = "42";
arr[4] = "43";
arr[5] = "44";
var descElement = { value: "foobar" };
var descElementNonConfigurable = { value: "barfoo", configurable: false };
var descElementNonWritable = { value: "foofoo", writable: false };
var descElementNonEnumerable = { value: "barbar", enumerable: false };
var descElementAllFalse = { value: "foofalse", configurable: false, writable: false, enumerable: false };
Object.defineProperty(arr, "1", descElement);
desc = Object.getOwnPropertyDescriptor(arr, "1");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(arr, "2", descElementNonConfigurable);
desc = Object.getOwnPropertyDescriptor(arr, "2");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
try {
    Object.defineProperty(arr, "2", descElement);
    desc = Object.getOwnPropertyDescriptor(arr, "2");
    desc.value;
} catch(e816) {
}
exception = false;
try {
    function f818() {
        return 0;
    }
    var descAccessor = { get: f818 };
    Object.defineProperty(arr, "2", descAccessor);
} catch(e824) {
    exception = true;
    /Cannot redefine property/.test(e824);
}
Object.defineProperty(arr, "2", descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(arr, "2");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(arr, "3", descElementNonWritable);
desc = Object.getOwnPropertyDescriptor(arr, "3");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(arr, "4", descElementNonEnumerable);
desc = Object.getOwnPropertyDescriptor(arr, "4");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(arr, "5", descElementAllFalse);
desc = Object.getOwnPropertyDescriptor(arr, "5");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
Object.defineProperty(arr, "15", descElement);
desc = Object.getOwnPropertyDescriptor(arr, "15");
desc.value;
desc.writable;
desc.enumerable;
desc.configurable;
arr.length;
Object.defineProperty(arr, "0x20", descElement);
arr.length;
var o = { x: 42 };
Object.defineProperty(o, "x", { writable: false });
o.x;
o.x = 37;
o.x;
o = { x: 42 };
Object.defineProperty(o, "x", {});
o.x;
o.x = 37;
o.x;
var o = {};
Object.defineProperty(o, "x", { writable: false });
o.x;
o.x = 37;
o.x;
const v914 = {
    get x() {
        return 87;
    },
};
o = v914;
Object.defineProperty(o, "x", { writable: false });
o.x;
o.x = 37;
o.x;
const v925 = { x: 87 };
o = { __proto__: v925 };
Object.defineProperty(o, "x", { writable: false });
o.x;
o.x = 37;
o.x;
function testDefineProperty(a937, a938, a939, a940) {
    Object.defineProperty(a937, a938, a939);
    var actualDesc = Object.getOwnPropertyDescriptor(a937, a938);
    a940.enumerable;
    actualDesc.enumerable;
    a940.configurable;
    actualDesc.configurable;
    if (a940.hasOwnProperty("value")) {
        a940.value;
        actualDesc.value;
        a940.writable;
        actualDesc.writable;
        a940.hasOwnProperty("get");
        a940.hasOwnProperty("set");
    } else {
        a940.get;
        actualDesc.get;
        a940.set;
        actualDesc.set;
        a940.hasOwnProperty("value");
        a940.hasOwnProperty("writable");
    }
}
o = { p: 42 };
const v969 = {};
testDefineProperty(o, "p", v969, { value: 42, writable: true, enumerable: true, configurable: true });
o = { p: 42 };
const v980 = { enumerable: true };
testDefineProperty(o, "p", v980, { value: 42, writable: true, enumerable: true, configurable: true });
o = { p: 42 };
const v991 = { configurable: true };
testDefineProperty(o, "p", v991, { value: 42, writable: true, enumerable: true, configurable: true });
o = { p: 42 };
const v1002 = { enumerable: false };
testDefineProperty(o, "p", v1002, { value: 42, writable: true, enumerable: false, configurable: true });
o = { p: 42 };
const v1013 = { configurable: false };
testDefineProperty(o, "p", v1013, { value: 42, writable: true, enumerable: true, configurable: false });
o = { p: 42 };
const v1025 = { enumerable: true, configurable: true };
testDefineProperty(o, "p", v1025, { value: 42, writable: true, enumerable: true, configurable: true });
o = { p: 42 };
const v1037 = { enumerable: false, configurable: true };
testDefineProperty(o, "p", v1037, { value: 42, writable: true, enumerable: false, configurable: true });
o = { p: 42 };
const v1049 = { enumerable: true, configurable: false };
testDefineProperty(o, "p", v1049, { value: 42, writable: true, enumerable: true, configurable: false });
o = { p: 42 };
const v1061 = { enumerable: false, configurable: false };
testDefineProperty(o, "p", v1061, { value: 42, writable: true, enumerable: false, configurable: false });
o = { p: 42 };
Object.defineProperty(o, "p", { configurable: false });
const v1076 = { writable: false };
testDefineProperty(o, "p", v1076, { value: 42, writable: false, enumerable: true, configurable: false });
o = {};
Object.defineProperty(o, "p", { get: getter1, enumerable: true, configurable: true });
const v1092 = { enumerable: false, configurable: false };
testDefineProperty(o, "p", v1092, { get: getter1, set: undefined, enumerable: false, configurable: false });
o = {};
Object.defineProperty(o, "p", { get: getter1, set: setter1, enumerable: true, configurable: true });
const v1107 = { enumerable: false, configurable: false };
testDefineProperty(o, "p", v1107, { get: getter1, set: setter1, enumerable: false, configurable: false });
o = {};
Object.defineProperty(o, "p", { set: setter1, enumerable: true, configurable: true });
const v1121 = { enumerable: false, configurable: false };
testDefineProperty(o, "p", v1121, { get: undefined, set: setter1, enumerable: false, configurable: false });
o = {};
for (let i1129 = 0; i1129 < 1000; i1129++) {
    Object.defineProperty(o, i1129, { value: i1129, enumerable: false });
}
o[999];
var objectWithGetter = {};
function f1143() {
}
objectWithGetter.__defineGetter__("foo", f1143);
objectWithGetter.__lookupSetter__("foo");
var objectWithSetter = {};
function f1151(a1152) {
}
objectWithSetter.__defineSetter__("foo", f1151);
objectWithSetter.__lookupGetter__("foo");
function getter() {
    return 111;
}
function anotherGetter() {
    return 222;
}
function testGetterOnProto(a1162, a1163) {
    a1163.quebec;
}
obj1 = {};
Object.defineProperty(obj1, "quebec", { get: getter, configurable: true });
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
testGetterOnProto(111, obj3);
Object.defineProperty(obj1, "quebec", { get: anotherGetter });
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3);
testGetterOnProto(222, obj3);
var modifyMe;
function setter(a1194) {
    modifyMe = a1194 + 1;
}
function anotherSetter(a1198) {
    modifyMe = a1198 + 2;
}
function testSetterOnProto(a1202, a1203) {
    modifyMe = 333;
    a1203.romeo = 444;
}
obj1 = {};
Object.defineProperty(obj1, "romeo", { set: setter, configurable: true });
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
testSetterOnProto(445, obj3);
Object.defineProperty(obj1, "romeo", { set: anotherSetter });
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3);
testSetterOnProto(446, obj3);
function testSetterOnProtoStrict(a1233) {
    'use strict';
    a1233.sierra = 12345;
}
obj1 = {};
Object.defineProperty(obj1, "sierra", { get: getter, set: setter, configurable: true });
obj2 = Object.create(obj1);
obj3 = Object.create(obj2);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
testSetterOnProtoStrict(obj3);
Object.defineProperty(obj1, "sierra", { get: getter, set: undefined, configurable: true });
exception = false;
try {
    testSetterOnProtoStrict(obj3);
} catch(e1253) {
    exception = true;
    /which has only a getter/.test(e1253);
}
function Assign(a1258) {
    a1258.blubb = 123;
}
function C() {
}
const v1261 = new C();
Assign(v1261);
const v1263 = new C();
Assign(v1263);
const v1265 = C.prototype;
function f1267() {
    return -42;
}
Object.defineProperty(v1265, "blubb", { get: f1267 });
const v1272 = new C();
Assign(v1272);
function C() {
    this.x = 23;
}
const v1278 = new C();
v1278.x;
function f1281(a1282) {
    this.y = 23;
}
C.prototype.__defineSetter__("x", f1281);
void 0;
const v1289 = new C();
v1289.x;
