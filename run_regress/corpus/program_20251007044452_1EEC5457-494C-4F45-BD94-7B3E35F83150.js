const v0 = {};
const v3 = { value: 42, enumerable: true };
const v6 = { value: 42, enumerable: false };
const v9 = { value: 42, enumerable: true };
const v12 = { value: 42, enumerable: false };
function f13() {
}
const v15 = { get: f13, enumerable: true };
function f16() {
}
const v18 = { get: f16, enumerable: false };
function f19() {
}
const v21 = { get: f19, enumerable: true };
function f22() {
}
const v24 = { get: f22, enumerable: false };
const v25 = {
    a: v3,
    b: v6,
    1: v9,
    2: v12,
    f: v15,
    g: v18,
    11: v21,
    12: v24,
};
var p = Object.create(v0, v25);
const v31 = { value: 42, enumerable: true };
const v34 = { value: 42, enumerable: false };
const v37 = { value: 42, enumerable: true };
const v40 = { value: 42, enumerable: false };
function f41() {
}
const v43 = { get: f41, enumerable: true };
function f44() {
}
const v46 = { get: f44, enumerable: false };
function f47() {
}
const v49 = { get: f47, enumerable: true };
function f50() {
}
const v52 = { get: f50, enumerable: false };
const v53 = {
    c: v31,
    d: v34,
    3: v37,
    4: v40,
    h: v43,
    k: v46,
    13: v49,
    14: v52,
};
var o = Object.create(p, v53);
o.propertyIsEnumerable("a");
o.propertyIsEnumerable("b");
o.propertyIsEnumerable("1");
o.propertyIsEnumerable("2");
o.propertyIsEnumerable("c");
o.propertyIsEnumerable("d");
o.propertyIsEnumerable("3");
o.propertyIsEnumerable("4");
o.propertyIsEnumerable("f");
o.propertyIsEnumerable("g");
o.propertyIsEnumerable("11");
o.propertyIsEnumerable("12");
o.propertyIsEnumerable("h");
o.propertyIsEnumerable("k");
o.propertyIsEnumerable("13");
o.propertyIsEnumerable("14");
o.propertyIsEnumerable("xxx");
o.propertyIsEnumerable("999");
var o = Object("string");
o[10] = 42;
o.propertyIsEnumerable(10);
o.propertyIsEnumerable(0);
var o = [1,2,3,4,5];
o.propertyIsEnumerable(3);
