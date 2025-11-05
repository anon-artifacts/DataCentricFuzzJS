function f0() {
    return 42;
}
var holder = { f: f0 };
var receiver = {};
receiver.__proto__ = {};
const t6 = receiver?.__proto__;
t6.__proto__ = holder;
function h(a9) {
    const v12 = a9?.f;
    let v13;
    try { v13 = v12.apply(this, arguments); } catch (e) {}
    return v13;
}
function g(a15) {
    let v16;
    try { v16 = h(a15); } catch (e) {}
    return v16;
}
try { g(receiver); } catch (e) {}
try { g(receiver); } catch (e) {}
const v21 = {};
const t22 = receiver?.__proto__;
t22.__proto__ = v21;
function f23() {
    try { g(receiver); } catch (e) {}
}
try { f23(); } catch (e) {}
const t28 = receiver?.__proto__;
t28.__proto__ = holder;
try { g(receiver); } catch (e) {}
