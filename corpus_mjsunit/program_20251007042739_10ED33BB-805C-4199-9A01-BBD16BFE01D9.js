const t0 = Date.prototype;
delete t0[Symbol.toPrimitive];
const v5 = new Date();
let date = v5;
if (typeof (date + 1) !== "number") {
    throw "symbol was not deleted";
}
