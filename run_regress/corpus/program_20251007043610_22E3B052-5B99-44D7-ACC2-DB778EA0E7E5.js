b = {};
let v4;
try { v4 = evalcx("lazy"); } catch (e) {}
b.__proto__ = v4;
function g() {
    let v7;
    try { v7 = b.toString(); } catch (e) {}
    try { g(v7); } catch (e) {}
}
try { g(); } catch (e) {}
