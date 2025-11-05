function f0() {
}
var log = [];
const v10 = {
    get(a4, a5) {
        log.push("trap: " + a5);
        return a4[a5];
    },
};
var hh = v10;
const v26 = {
    get set() {
        log.push("called set()");
        Object.defineProperty(o, "prop", { value: 0 });
        log.push("o.prop:", Object.getOwnPropertyDescriptor(o, "prop"));
    },
};
const v27 = new Proxy(v26, hh);
var h = v27;
const v30 = new Proxy({}, h);
var p = v30;
var o = { __proto__: p };
o.prop = 1;
var expectedDesc = { value: 0, writable: false, enumerable: false, configurable: false };
["trap: set","called set()","o.prop:",expectedDesc];
Object.getOwnPropertyDescriptor(o, "prop");
f0(0, 0);
