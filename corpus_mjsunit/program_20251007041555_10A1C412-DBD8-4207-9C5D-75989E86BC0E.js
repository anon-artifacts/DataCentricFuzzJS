function f0() {
}
const obj = {};
Object.defineProperty(obj, "value", { enumerable: true, configurable: true, get: f0, set: f0 });
let called_get = false;
let called_has = false;
let called_set = false;
function f15(a16, a17) {
    'value';
    called_has = true;
    return false;
}
const has = f15;
function f21(a22, a23) {
    'value';
    called_get = true;
    return "yep";
}
const get = f21;
function f27(a28, a29, a30) {
    'value';
    called_set = true;
    return true;
}
const set = f27;
const v36 = new Proxy(obj, { has: has, get: get, set: set });
const proxy = v36;
Reflect.has(proxy, "value");
proxy.value = "nope";
proxy.value;
