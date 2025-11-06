var symbols = [Symbol(),Symbol("moon"),Symbol.for("sun"),Symbol.iterator];
var hits = 0;
function HandlerProxy() {
    const v13 = {};
    function f14(a15, a16) {
        if (a16 !== "ownKeys") {
            const v26 = new Error(("tried to access handler[" + uneval(a16)) + "]");
            throw v26;
        }
        hits++;
        const v28 = (a29) => {
            return symbols;
        };
        return v28;
    }
    const v31 = new Proxy(v13, { get: f14 });
    return v31;
}
function OwnKeysProxy() {
    const v34 = {};
    const v35 = new HandlerProxy();
    const v36 = new Proxy(v34, v35);
    return v36;
}
const v37 = new OwnKeysProxy();
Object.getOwnPropertySymbols(v37);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
