function f0() {
}
let v2;
try { v2 = newGlobal(); } catch (e) {}
var global = v2;
const v6 = global?.Promise?.prototype?.then;
const t6 = Promise?.prototype;
t6.then = v6;
function f(a10) {
    try { a10(1); } catch (e) {}
}
let v13;
try { v13 = new Promise(f); } catch (e) {}
p1 = v13;
function g() {
}
let v17;
try { v17 = p1.then(g); } catch (e) {}
p2 = v17;
const v20 = this?.reportCompare;
let v23;
try { v23 = f0(true, true); } catch (e) {}
v20 && v23;
