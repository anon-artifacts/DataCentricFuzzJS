function assertPrototypeOf(a1, a2) {
    try { Reflect.getPrototypeOf(a1); } catch (e) {}
}
function f5() {
    try { Reflect.getPrototypeOf(undefined); } catch (e) {}
}
f5();
function f11() {
    try { Reflect.getPrototypeOf(null); } catch (e) {}
}
f11();
function F() {
}
const v17 = new F();
var y = v17;
F.prototype;
F();
Function.prototype;
const v24 = { x: 5 };
Object.prototype;
const v29 = { x: 5, __proto__: null };
[1,2];
Array.prototype;
function f36() {
    try { Reflect.getPrototypeOf(1); } catch (e) {}
}
f36();
function f41() {
    try { Reflect.getPrototypeOf(true); } catch (e) {}
}
f41();
function f46() {
    try { Reflect.getPrototypeOf(false); } catch (e) {}
}
f46();
function f51() {
    try { Reflect.getPrototypeOf("str"); } catch (e) {}
}
f51();
function f56() {
    const v58 = Symbol();
    try { Reflect.getPrototypeOf(v58); } catch (e) {}
}
f56();
Object(1);
Number.prototype;
Object(true);
Boolean.prototype;
Object(false);
Boolean.prototype;
Object("str");
String.prototype;
Object(Symbol());
Symbol.prototype;
var errorFunctions = [EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError];
for (const v88 of errorFunctions) {
    new v88();
    v88.prototype;
}
var functions = [Array,ArrayBuffer,Boolean,Date,Error,Function,Map,Number,Object,RegExp,Set,String,WeakMap,WeakSet];
for (const v102 of functions) {
    Function.prototype;
    new v102();
    v102.prototype;
}
function f107() {
}
const v108 = new Promise(f107);
var p = v108;
Promise.prototype;
const v112 = new ArrayBuffer();
const v113 = new DataView(v112);
var dv = v113;
DataView.prototype;
