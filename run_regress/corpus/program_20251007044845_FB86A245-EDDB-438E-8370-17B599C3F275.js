var obj = { a: 1 };
function f3() {
    throw "fit";
}
const v5 = { toJSON: f3 };
obj[Symbol.for("ponies")] = v5;
function f9() {
    throw "fit";
}
const v11 = { toJSON: f9 };
obj[Symbol.iterator] = v11;
JSON.stringify(obj);
function f16(a17, a18) {
    if (typeof a17 === "symbol") {
        throw "fit";
    }
    return a18;
}
var replacer = f16;
JSON.stringify(obj, replacer);
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "ok");
}
