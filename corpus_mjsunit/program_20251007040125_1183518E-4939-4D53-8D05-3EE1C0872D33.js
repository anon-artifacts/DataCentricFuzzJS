var obj0 = {};
function f2() {
}
obj0.method0 = f2;
protoObj0 = { __proto__: obj0 };
function f5() {
    const v9 = this?.method0;
    try { v9.apply(this, arguments); } catch (e) {}
}
protoObj0.method1 = f5;
function f12() {
}
const v13 = { method0: f12 };
const t13 = protoObj0?.method1;
t13.prototype = v13;
const v15 = protoObj0?.method1;
const v17 = [1];
let v18;
try { v18 = new v15(...v17); } catch (e) {}
const v19 = protoObj0?.method0;
try { v19.apply(v18); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
