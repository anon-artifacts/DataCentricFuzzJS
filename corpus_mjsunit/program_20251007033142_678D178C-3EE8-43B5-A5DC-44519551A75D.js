var log;
function LoggingProxy() {
    const v4 = {};
    const v5 = (a6, a7, a8) => {
        log.push(a7);
        return true;
    };
    const v12 = new Proxy(v4, { defineProperty: v5 });
    return v12;
}
var keys = ["before",Symbol(),"during",Symbol.for("during"),Symbol.iterator,"after"];
var descs = {};
for (const v25 of keys) {
    descs[v25] = { configurable: true, value: 0 };
}
function test(a30) {
    log = [];
    Object.defineProperties(LoggingProxy(), descs);
    log.length;
    keys.length;
    const v37 = (a38) => {
        return typeof a38;
    };
    log.map(v37);
    ["string","string","string","symbol","symbol","symbol"];
    for (const v48 of keys) {
        log.indexOf(v48) !== -1;
    }
}
test(descs);
const v57 = new Proxy(descs, {});
test(v57);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
