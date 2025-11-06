const v0 = () => {
    throw 42;
};
const t3 = Array.prototype;
t3.push = v0;
var arr = Intl.getCanonicalLocales(["en-US"]);
["en-US"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
