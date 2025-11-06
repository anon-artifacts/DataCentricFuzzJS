try { gczeal(11); } catch (e) {}
function C(a4, a5) {
    this.b = a5;
}
const v8 = Object?.prototype;
function f10() {
}
const v11 = { set: f10 };
try { Object.defineProperty(v8, "b", v11); } catch (e) {}
let v15;
try { v15 = C.bind(8196, 2); } catch (e) {}
var f = v15;
for (let i18 = 1; i18 < 5000; ++i18) {
    try { new f(); } catch (e) {}
}
