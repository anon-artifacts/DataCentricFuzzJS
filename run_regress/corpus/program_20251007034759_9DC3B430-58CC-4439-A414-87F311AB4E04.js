var nativeCode = "function () {\n    [native code]\n}";
function f3() {
}
const v5 = new Proxy(f3, {});
var proxy = v5;
Function.prototype.toString.call(proxy);
function f11() {
}
var o = Proxy.revocable(f11, {});
const v15 = o.proxy;
Function.prototype.toString.call(v15);
o.revoke();
const v20 = o.proxy;
Function.prototype.toString.call(v20);
