const t0 = Intl.PluralRules;
const v3 = new t0("de");
var pl = v3;
const v7 = Symbol.species;
function f8() {
    const v11 = ["?"];
    const v22 = {
        get(a13, a14, a15) {
            return Reflect.get(a13, a14, a15);
        },
        defineProperty(a19, a20) {
            return true;
        },
    };
    const v23 = new Proxy(v11, v22);
    return v23;
}
Object.defineProperty(Array, v7, { value: f8 });
var pluralCategories = pl.resolvedOptions().pluralCategories;
["one","other"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
