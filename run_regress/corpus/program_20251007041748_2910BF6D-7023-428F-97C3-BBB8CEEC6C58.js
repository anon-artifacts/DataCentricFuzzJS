console.log("Test to ensure correct behaviour of prototype caching with dictionary prototypes");
function protoTest(a4) {
    return a4.protoProp;
}
var proto = { protoProp: "PASS", propToRemove: "foo" };
var o = { __proto__: proto };
delete proto.propToRemove;
protoTest(o);
protoTest(o);
protoTest(o);
protoTest(o);
delete proto.protoProp;
proto.fakeProtoProp = "FAIL";
try {
    protoTest(o);
} catch(e20) {
}
function protoTest2(a22) {
    return a22.b;
}
var proto = { a: 1, b: "meh", c: 2 };
var o = { __proto__: proto };
delete proto.b;
proto.d = 3;
protoTest2(o);
protoTest2(o);
protoTest2(o);
var protoKeys = [];
for (const v38 in proto) {
    protoKeys.push(proto[v38]);
}
function protoTest3(a42) {
    return a42.b;
}
var proto = { a: 1, b: "meh", c: 2 };
var o = { __proto__: proto };
delete proto.b;
protoTest2(o);
protoTest2(o);
protoTest2(o);
proto.d = 3;
var protoKeys = [];
for (const v58 in proto) {
    protoKeys.push(proto[v58]);
}
function testFunction(a62) {
    return a62.test;
}
var proto = { test: true };
var subclass1 = { __proto__: proto };
var subclass2 = { __proto__: proto };
for (let i72 = 0; i72 < 500; i72++) {
    const v79 = "a" + i72;
    subclass2["a" + i72] = v79;
}
testFunction(subclass1);
testFunction(subclass1);
testFunction(subclass2);
proto.test = false;
subclass2.test = true;
testFunction(subclass2);
