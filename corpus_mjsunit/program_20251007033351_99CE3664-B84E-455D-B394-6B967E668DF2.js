function f0() {
}
function g() {
}
function h() {
    for (let i4 = 0; i4 < 9; i4++) {
        x.f = i4;
    }
}
function j() {
    try { x.f(); } catch (e) {}
}
var x = { f: 0.7, g: g };
try { x.g(); } catch (e) {}
try { h(); } catch (e) {}
let v20;
try { v20 = shapeOf(x); } catch (e) {}
try { f0(v20); } catch (e) {}
function f22() {
}
x.f = f22;
try { j(); } catch (e) {}
let v24;
try { v24 = shapeOf(x); } catch (e) {}
try { f0(v24); } catch (e) {}
try { h(); } catch (e) {}
var thrown = "none";
try {
    try { j(); } catch (e) {}
} catch(e30) {
    thrown = e30?.name;
}
