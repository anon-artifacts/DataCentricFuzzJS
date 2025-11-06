async function* f0() {
    yield 42;
}
const v3 = f0();
function f4(a5) {
}
v3.next();
try { f4.catch(); } catch (e) {}
