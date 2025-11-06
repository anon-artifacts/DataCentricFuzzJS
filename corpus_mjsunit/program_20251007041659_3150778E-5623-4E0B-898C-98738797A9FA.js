function f0() {
}
let log = [];
const v4 = {};
const v9 = {
    get(a6, a7) {
        log.push(a7);
    },
};
const v10 = new Proxy(v4, v9);
let logger = v10;
const v14 = { value: 0 };
const v16 = { value: 1 };
const v18 = new Proxy({ a: v14, b: v16 }, logger);
Object.create(null, v18);
log.join();
log = [];
const v24 = {};
const v26 = { value: 0 };
const v28 = { value: 1 };
const v30 = new Proxy({ a: v26, b: v28 }, logger);
Object.defineProperties(v24, v30);
log.join();
f0(true, true);
