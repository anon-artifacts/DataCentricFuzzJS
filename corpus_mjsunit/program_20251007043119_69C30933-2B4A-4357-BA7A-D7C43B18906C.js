var obj = { a: 1, b: 2 };
var propertyNames = Object.getOwnPropertyNames(obj);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
propertyNames[1];
function f14() {
}
function f15() {
}
var obj = { a: f14, b: f15 };
var propertyNames = Object.getOwnPropertyNames(obj);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
propertyNames[1];
var obj = { a: 1, b: 2, c: 3 };
delete obj.b;
var propertyNames = Object.getOwnPropertyNames(obj);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
propertyNames[1];
var propertyNames = Object.getOwnPropertyNames([1,2]);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
propertyNames[1];
typeof propertyNames[0];
typeof propertyNames[1];
propertyNames[2];
var obj = { foo: "foo" };
obj.__proto__ = { bar: "bar" };
propertyNames = Object.getOwnPropertyNames(obj);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
var obj = {};
function f76() {
}
obj.__defineGetter__("getter", f76);
propertyNames = Object.getOwnPropertyNames(obj);
propertyNames.sort();
propertyNames.length;
propertyNames[0];
var savedConcat = Array.prototype.concat;
function f88() {
    return [];
}
const t49 = Array.prototype;
t49.concat = f88;
propertyNames = Object.getOwnPropertyNames({ 0: "foo", bar: "baz" });
propertyNames.length;
propertyNames[0];
propertyNames[1];
Array.prototype;
propertyNames.__proto__;
const t52 = Array.prototype;
t52.concat = savedConcat;
Object.getOwnPropertyNames(4);
[];
Object.getOwnPropertyNames("foo");
["0","1","2","length"];
Object.getOwnPropertyNames(true);
[];
try {
    Object.getOwnPropertyNames(undefined);
} catch(e120) {
    /Cannot convert undefined or null to object/.test(e120);
}
try {
    Object.getOwnPropertyNames(null);
} catch(e126) {
    /Cannot convert undefined or null to object/.test(e126);
}
