Intl.getCanonicalLocales(["ab-cd","ff","de-rt","ab-Cd"]);
["ab-CD","ff","de-RT"];
var locales = Intl.getCanonicalLocales(["en-US","en-US"]);
["en-US"];
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
