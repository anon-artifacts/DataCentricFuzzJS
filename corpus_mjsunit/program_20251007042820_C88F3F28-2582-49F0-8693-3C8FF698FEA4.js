function f0() {
}
let log = [];
const v4 = Object?.prototype;
const v12 = {
    configurable: true,
    get() {
        try { log.push("size"); } catch (e) {}
        try { log.push(this); } catch (e) {}
        return undefined;
    },
};
try { Object.defineProperty(v4, "size", v12); } catch (e) {}
const t13 = Object?.prototype;
t13.highWaterMark = 1337;
const v23 = {
    start(a18) {
        try { log.push("start"); } catch (e) {}
        const v21 = a18?.desiredSize;
        try { log.push(v21); } catch (e) {}
    },
};
let v24;
try { v24 = new ReadableStream(v23); } catch (e) {}
let s = v24;
["size",{},"start",1337];
if (typeof f0 == "function") {
    try { f0(0, 0); } catch (e) {}
}
