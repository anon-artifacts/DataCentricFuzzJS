var n = 0;
let v3;
try { v3 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v3) {
    const v5 = {};
    function f6() {
        if (++n === 2) {
            return false;
        }
        a = 0;
    }
    const v13 = { has: f6 };
    let v14;
    try { v14 = new Proxy(v5, v13); } catch (e) {}
    this.__proto__ = v14;
}
a = 0;
