function f() {
    try { WScript.Echo("pass"); } catch (e) {}
}
const v8 = Function.prototype.call;
const v10 = new Proxy(v8, {});
let call = v10;
try { call.call(f); } catch (e) {}
