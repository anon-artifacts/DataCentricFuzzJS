var __v_9 = {};
for (let i3 = 0; i3 < 1000; i3++) {
}
__v_2 = { __v_2: 1 };
const v13 = {};
const v15 = new Proxy(v13, {});
__v_12 = v15;
function f() {
    const v20 = new Proxy({}, __v_2);
    var __v_10 = v20;
    __v_9.__proto__ = __v_10;
    function f22() {
        return __v_9;
    }
    __v_2.getPrototypeOf = f22;
    const v26 = Object.prototype.isPrototypeOf;
    try { v26.call(__v_0, __v_10); } catch (e) {}
}
try { f(); } catch (e) {}
