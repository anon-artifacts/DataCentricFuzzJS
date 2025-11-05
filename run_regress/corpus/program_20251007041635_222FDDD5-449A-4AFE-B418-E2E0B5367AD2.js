const v2 = Symbol.species;
function f3() {
    const v6 = ["?"];
    const v17 = {
        get(a8, a9, a10) {
            return Reflect.get(a8, a9, a10);
        },
        defineProperty(a14, a15) {
            return true;
        },
    };
    const v18 = new Proxy(v6, v17);
    return v18;
}
Object.defineProperty(Array, v2, { value: f3 });
var arr = Intl.getCanonicalLocales("de-x-private");
["de-x-private"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
