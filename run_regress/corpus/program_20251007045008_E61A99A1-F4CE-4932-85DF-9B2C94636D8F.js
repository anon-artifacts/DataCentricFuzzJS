const v0 = {};
function f1() {
}
const v2 = { value: f1 };
var holder = Object.create(v0, { holderMethod: v2 });
function f8() {
}
const v9 = { value: f8 };
var holder = Object.create(null, { holderMethod: v9 });
const v15 = { value: 0, configurable: true };
const v18 = { value: 0, configurable: true };
var receiver = Object.create(holder, { killMe: v15, keepMe: v18 });
delete receiver.killMe;
function callConstantFunctionOnPrototype(a24) {
    try { a24.holderMethod(); } catch (e) {}
}
callConstantFunctionOnPrototype(receiver);
callConstantFunctionOnPrototype(receiver);
callConstantFunctionOnPrototype(receiver);
callConstantFunctionOnPrototype();
