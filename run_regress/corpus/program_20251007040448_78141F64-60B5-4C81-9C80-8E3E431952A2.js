const v5 = -1;
let v10;
try { v10 = Symbol("test"); } catch (e) {}
let v11;
try { v11 = new Array(undefined, null, 1, v5, 0, 42.43, v10); } catch (e) {}
var non_objects = v11;
for (const v13 in non_objects) {
    non_objects?.[v13];
    const v15 = non_objects?.[v13];
    try { Object.seal(v15); } catch (e) {}
}
for (const v18 in non_objects) {
    const v19 = non_objects?.[v18];
    try { Object.isSealed(v19); } catch (e) {}
}
var obj = { x: 42, z: "foobar" };
let v28;
try { v28 = Object.getOwnPropertyDescriptor(obj, "x"); } catch (e) {}
var desc = v28;
desc?.writable;
desc?.configurable;
desc?.value;
let v35;
try { v35 = Object.getOwnPropertyDescriptor(obj, "z"); } catch (e) {}
desc = v35;
desc?.writable;
desc?.configurable;
desc?.value;
try { Object.isExtensible(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.seal(obj); } catch (e) {}
try { Object.isExtensible(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
obj.foo = 42;
obj?.foo;
let v50;
try { v50 = Object.getOwnPropertyDescriptor(obj, "x"); } catch (e) {}
desc = v50;
desc?.writable;
desc?.configurable;
desc?.value;
let v56;
try { v56 = Object.getOwnPropertyDescriptor(obj, "z"); } catch (e) {}
desc = v56;
desc?.writable;
desc?.configurable;
desc?.value;
obj.x = "43";
obj?.x;
var obj2 = {};
function get() {
    return 43;
}
function set() {
}
const v71 = { get: get, set: set, configurable: true };
try { Object.defineProperty(obj2, "x", v71); } catch (e) {}
let v74;
try { v74 = Object.getOwnPropertyDescriptor(obj2, "x"); } catch (e) {}
desc = v74;
desc?.configurable;
desc?.value;
try { set(); } catch (e) {}
desc?.set;
try { get(); } catch (e) {}
desc?.get;
try { Object.isExtensible(obj2); } catch (e) {}
try { Object.isSealed(obj2); } catch (e) {}
try { Object.seal(obj2); } catch (e) {}
try { Object.isFrozen(obj2); } catch (e) {}
try { Object.isExtensible(obj2); } catch (e) {}
try { Object.isSealed(obj2); } catch (e) {}
let v89;
try { v89 = Object.getOwnPropertyDescriptor(obj2, "x"); } catch (e) {}
desc = v89;
desc?.configurable;
desc?.value;
try { set(); } catch (e) {}
desc?.set;
try { get(); } catch (e) {}
desc?.get;
obj2.foo = 42;
obj2?.foo;
let v102;
try { v102 = new Array(42, 43); } catch (e) {}
var arr = v102;
let v105;
try { v105 = Object.getOwnPropertyDescriptor(arr, "0"); } catch (e) {}
desc = v105;
desc?.configurable;
desc?.writable;
desc?.value;
let v111;
try { v111 = Object.getOwnPropertyDescriptor(arr, "1"); } catch (e) {}
desc = v111;
desc?.configurable;
desc?.writable;
desc?.value;
try { Object.isExtensible(arr); } catch (e) {}
try { Object.isSealed(arr); } catch (e) {}
try { Object.seal(arr); } catch (e) {}
try { Object.isSealed(arr); } catch (e) {}
try { Object.isExtensible(arr); } catch (e) {}
try { Object.isFrozen(arr); } catch (e) {}
let v123;
try { v123 = Object.getOwnPropertyDescriptor(arr, "0"); } catch (e) {}
desc = v123;
desc?.configurable;
desc?.writable;
desc?.value;
let v129;
try { v129 = Object.getOwnPropertyDescriptor(arr, "1"); } catch (e) {}
desc = v129;
desc?.configurable;
desc?.writable;
desc?.value;
arr[0] = "foo";
arr?.[0];
var obj3 = { x: 42, y: "foo" };
try { Object.isFrozen(obj3); } catch (e) {}
const v145 = { configurable: false, writable: true };
try { Object.defineProperty(obj3, "x", v145); } catch (e) {}
const v150 = { configurable: false, writable: false };
try { Object.defineProperty(obj3, "y", v150); } catch (e) {}
try { Object.preventExtensions(obj3); } catch (e) {}
try { Object.isSealed(obj3); } catch (e) {}
var obj4 = {};
const v159 = { configurable: true, writable: false };
try { Object.defineProperty(obj4, "x", v159); } catch (e) {}
const v164 = { configurable: false, writable: false };
try { Object.defineProperty(obj4, "y", v164); } catch (e) {}
try { Object.preventExtensions(obj4); } catch (e) {}
try { Object.isSealed(obj4); } catch (e) {}
var obj4 = {};
let v170;
try { v170 = Object.seal(obj4); } catch (e) {}
obj4 === v170;
obj = [1,2,3];
var objControl = [4,5,6];
function f181(a182) {
    try { a182.push(10); } catch (e) {}
    return a182;
}
var push_call = f181;
function f186(a187) {
    let v188;
    try { v188 = a187.pop(); } catch (e) {}
    return v188;
}
var pop_call = f186;
for (let i191 = 0; i191 < 3; i191++) {
    try { push_call(obj); } catch (e) {}
    try { pop_call(obj); } catch (e) {}
}
try { Object.seal(obj); } catch (e) {}
function f200() {
    try { push_call(obj); } catch (e) {}
}
try { f200(); } catch (e) {}
function f204() {
    try { pop_call(obj); } catch (e) {}
}
try { f204(); } catch (e) {}
function f207() {
    try { push_call(objControl); } catch (e) {}
}
try { f207(); } catch (e) {}
function f210() {
    try { pop_call(objControl); } catch (e) {}
}
try { f210(); } catch (e) {}
function f213() {
    try { obj.push(); } catch (e) {}
}
try { f213(); } catch (e) {}
function f216() {
    try { obj.push(3); } catch (e) {}
}
try { f216(); } catch (e) {}
function f220() {
    try { obj.pop(); } catch (e) {}
}
try { f220(); } catch (e) {}
function f223() {
    try { obj.shift(3); } catch (e) {}
}
try { f223(); } catch (e) {}
function f227() {
    try { obj.unshift(); } catch (e) {}
}
try { f227(); } catch (e) {}
function f230() {
    try { obj.unshift(1); } catch (e) {}
}
try { f230(); } catch (e) {}
function f234() {
    try { obj.splice(0, 0, 100, 101, 102); } catch (e) {}
}
try { f234(); } catch (e) {}
function f242() {
    try { obj.splice(0, 0); } catch (e) {}
}
try { f242(); } catch (e) {}
function f247() {
    try { objControl.push(3); } catch (e) {}
}
try { f247(); } catch (e) {}
function f251() {
    try { objControl.pop(); } catch (e) {}
}
try { f251(); } catch (e) {}
function f254() {
    try { objControl.shift(3); } catch (e) {}
}
try { f254(); } catch (e) {}
function f258() {
    try { objControl.unshift(); } catch (e) {}
}
try { f258(); } catch (e) {}
function f261() {
    try { objControl.splice(0, 0, 100, 101, 102); } catch (e) {}
}
try { f261(); } catch (e) {}
obj = [1,2,3];
function f273(a274) {
    try { a274.push(1000); } catch (e) {}
    return a274;
}
push_call = f273;
function f277(a278) {
    try { a278.shift(1000); } catch (e) {}
    return a278;
}
var shift_call = f277;
for (let i283 = 0; i283 < 3; i283++) {
    try { push_call(obj); } catch (e) {}
    try { shift_call(obj); } catch (e) {}
}
try { push_call(obj); } catch (e) {}
try { shift_call(obj); } catch (e) {}
try { Object.seal(obj); } catch (e) {}
function f294() {
    try { push_call(obj); } catch (e) {}
}
try { f294(); } catch (e) {}
function f297() {
    try { shift_call(obj); } catch (e) {}
}
try { f297(); } catch (e) {}
function f300() {
    try { push_call(objControl); } catch (e) {}
}
try { f300(); } catch (e) {}
function f303() {
    try { shift_call(objControl); } catch (e) {}
}
try { f303(); } catch (e) {}
obj = [1,2,3];
try { Object.seal(obj); } catch (e) {}
function f311() {
    try { obj.splice(0, 1, 100); } catch (e) {}
}
try { f311(); } catch (e) {}
obj?.[0];
function f319() {
    try { obj.splice(0, 2, 1, 2); } catch (e) {}
}
try { f319(); } catch (e) {}
function f326() {
    try { obj.splice(1, 2, 1, 2); } catch (e) {}
}
try { f326(); } catch (e) {}
function f333() {
    try { obj.splice(1, 2000, 1, 2); } catch (e) {}
}
try { f333(); } catch (e) {}
function f340() {
    try { obj.splice(0, 0, 1); } catch (e) {}
}
try { f340(); } catch (e) {}
function f346() {
    try { obj.splice(1, 2000, 1, 2, 3); } catch (e) {}
}
try { f346(); } catch (e) {}
obj = { x: 42, y: "foo" };
const v359 = { enumerable: false };
try { Object.defineProperty(obj, "y", v359); } catch (e) {}
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
let v365;
try { v365 = Object.getOwnPropertyDescriptor(obj, "x"); } catch (e) {}
desc = v365;
desc?.enumerable;
let v368;
try { v368 = Object.getOwnPropertyDescriptor(obj, "y"); } catch (e) {}
desc = v368;
desc?.enumerable;
obj = { x: 42, y: "foo" };
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
obj = { prop1: 1, prop2: 2 };
obj2 = { prop1: 3, prop2: 4 };
try { Object.seal(obj); } catch (e) {}
try { Object.seal(obj2); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isSealed(obj2); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
try { Object.isFrozen(obj2); } catch (e) {}
obj = { prop1: 1, prop2: 2, 75: "foo" };
obj2 = { prop1: 3, prop2: 4, 150: "bar" };
try { Object.seal(obj); } catch (e) {}
try { Object.seal(obj2); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isSealed(obj2); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
obj = { prop: "thing" };
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
obj[0] = "hello";
try { obj.hasOwnProperty(0); } catch (e) {}
obj = {};
for (let i412 = 0; i412 < 100; ++i412) {
    obj["x" + i412] = i412;
}
var accessorDidRun = false;
function f423() {
    return 42;
}
function f425() {
    accessorDidRun = true;
}
const v429 = { get: f423, set: f425, configurable: true, enumerable: true };
try { Object.defineProperty(obj, "accessor", v429); } catch (e) {}
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
try { Object.isFrozen(obj); } catch (e) {}
try { Object.isExtensible(obj); } catch (e) {}
for (let i436 = 0; i436 < 100; ++i436) {
    const v443 = "x" + i436;
    let v444;
    try { v444 = Object.getOwnPropertyDescriptor(obj, v443); } catch (e) {}
    desc = v444;
    desc?.configurable;
}
obj?.accessor;
obj.accessor = "ignored value";
function f449(a450) {
    try { Object.seal(arguments); } catch (e) {}
    try { Object.isSealed(arguments); } catch (e) {}
}
var func = f449;
try { func("hello", "world"); } catch (e) {}
try { func("goodbye", "world"); } catch (e) {}
var sparseArr = [0,1];
sparseArr[10000] = 10000;
try { Object.seal(sparseArr); } catch (e) {}
try { Object.isSealed(sparseArr); } catch (e) {}
obj = {};
function f471() {
    return 42;
}
function f473() {
    accessorDidRun = true;
}
const v477 = { get: f471, set: f473, configurable: true, enumerable: true };
try { Object.defineProperty(obj, "accessor", v477); } catch (e) {}
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
obj?.accessor;
accessorDidRun = false;
obj.accessor = "ignored value";
function f485() {
    'use strict';
}
let v486;
try { v486 = Object.seal(f485); } catch (e) {}
try { Object.isSealed(v486); } catch (e) {}
obj = {};
function f490() {
    return 42;
}
function f492() {
    accessorDidRun = true;
}
const v496 = { get: f490, set: f492, configurable: true, enumerable: true };
try { Object.defineProperty(obj, "accessor2", v496); } catch (e) {}
obj.data = "foo";
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
function Sealed() {
}
try { Object.seal(Sealed); } catch (e) {}
function f503() {
    let v504;
    try { v504 = new Sealed(); } catch (e) {}
    return v504;
}
try { f503(); } catch (e) {}
const t403 = Sealed?.prototype;
t403.prototypeExists = true;
let v508;
try { v508 = new Sealed(); } catch (e) {}
v508?.prototypeExists;
let v512;
try { v512 = new Int32Array(10); } catch (e) {}
obj = v512;
try { Object.seal(obj); } catch (e) {}
try { Object.isSealed(obj); } catch (e) {}
