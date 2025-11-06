var target = {};
var configurable_desc = { value: 123, configurable: true, writable: true, enumerable: false };
Object.defineProperty(target, "configurable", configurable_desc);
var nonconfigurable_desc = { value: 234, configurable: false, writable: false, enumerable: true };
Object.defineProperty(target, "nonconfigurable", nonconfigurable_desc);
var proxied_desc = { value: 345, configurable: true };
function f23(a24, a25) {
    if (a25 === "proxied") {
        return proxied_desc;
    }
    if (a25 === "return_null") {
        return null;
    }
    return Object.getOwnPropertyDescriptor(a24, a25);
}
var handler = { getOwnPropertyDescriptor: f23 };
const v35 = new Proxy(target, handler);
var proxy = v35;
const v38 = new Proxy(target, {});
var proxy_without_handler = v38;
Object.getOwnPropertyDescriptor(proxy, "configurable");
Object.getOwnPropertyDescriptor(proxy, "nonconfigurable");
const v44 = proxied_desc.value;
const v45 = proxied_desc.configurable;
const v48 = { value: v44, configurable: v45, enumerable: false, writable: false };
Object.getOwnPropertyDescriptor(proxy, "proxied");
Object.getOwnPropertyDescriptor(proxy_without_handler, "configurable");
Object.getOwnPropertyDescriptor(proxy_without_handler, "nonconfigurable");
handler.getOwnPropertyDescriptor = undefined;
Object.getOwnPropertyDescriptor(proxy, "configurable");
function f59(a60, a61) {
    return undefined;
}
handler.getOwnPropertyDescriptor = f59;
Object.getOwnPropertyDescriptor(proxy, "configurable");
function f67(a68, a69) {
    return { value: 234, configurable: false, enumerable: true };
}
handler.getOwnPropertyDescriptor = f67;
Object.getOwnPropertyDescriptor(proxy, "nonconfigurable").configurable;
Object.seal(target);
function f81(a82, a83) {
    return undefined;
}
handler.getOwnPropertyDescriptor = f81;
Object.getOwnPropertyDescriptor(proxy, "nonexistent");
var existent_desc = { value: "yes" };
function f93() {
    return existent_desc;
}
handler.getOwnPropertyDescriptor = f93;
const v99 = { value: "yes", writable: false, enumerable: false, configurable: false };
try { Object.getOwnPropertyDescriptor(proxy, "configurable"); } catch (e) {}
handler.getOwnPropertyDescriptor = {};
function f104() {
    throw "ball";
}
handler.getOwnPropertyDescriptor = f104;
function f107() {
    return 1;
}
handler.getOwnPropertyDescriptor = f107;
function f110(a111, a112) {
    return { value: 456, configurable: true, writable: true };
}
handler.getOwnPropertyDescriptor = f110;
