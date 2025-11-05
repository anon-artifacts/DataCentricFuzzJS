const v1 = Array.prototype;
const v5 = {
    set() {
        throw 42;
    },
};
Object.defineProperty(v1, 0, v5);
var arr = Intl.getCanonicalLocales(["en-US"]);
["en-US"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
