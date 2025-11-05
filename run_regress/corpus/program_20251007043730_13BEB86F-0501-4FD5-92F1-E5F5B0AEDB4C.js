function f0() {
}
var log = [];
function LoggingProxy(a4) {
    function f6(a7, a8) {
        log.push("has " + a8);
        return a8 in a7;
    }
    function f13(a14, a15) {
        log.push("get " + a15);
        return a14[a15];
    }
    const v21 = new Proxy(a4, { has: f6, get: f13 });
    return v21;
}
const v22 = {};
const v23 = [];
const v25 = {};
const v27 = new Proxy(v25, {});
var testSubjects = [v22,v23,v27];
for (const v30 of testSubjects) {
    log = [];
    const v38 = new LoggingProxy({ enumerable: true, configurable: true, value: 3, writable: true });
    Object.defineProperty(v30, "x", v38);
    ["has enumerable","get enumerable","has configurable","get configurable","has value","get value","has writable","get writable","has get","has set"];
}
f0(0, 0);
