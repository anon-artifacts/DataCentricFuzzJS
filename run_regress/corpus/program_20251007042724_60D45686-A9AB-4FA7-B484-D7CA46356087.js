var handler = {};
var target = { a: 1 };
const v6 = new Proxy(target, handler);
var proxy = v6;
target.hasOwnProperty("a");
proxy.hasOwnProperty("a");
target.hasOwnProperty("b");
proxy.hasOwnProperty("b");
function f16() {
}
handler.has = f16;
function f17() {
}
handler.getOwnPropertyDescriptor = f17;
target.hasOwnProperty("a");
proxy.hasOwnProperty("a");
target.hasOwnProperty("b");
proxy.hasOwnProperty("b");
function f26() {
    return { configurable: true };
}
handler.getOwnPropertyDescriptor = f26;
target.hasOwnProperty("a");
proxy.hasOwnProperty("a");
target.hasOwnProperty("b");
proxy.hasOwnProperty("b");
function f37() {
    throw Error();
}
handler.getOwnPropertyDescriptor = f37;
target.hasOwnProperty("a");
function f42() {
    try { proxy.hasOwnProperty("a"); } catch (e) {}
}
f42();
target.hasOwnProperty("b");
function f49() {
    try { proxy.hasOwnProperty("b"); } catch (e) {}
}
f49();
