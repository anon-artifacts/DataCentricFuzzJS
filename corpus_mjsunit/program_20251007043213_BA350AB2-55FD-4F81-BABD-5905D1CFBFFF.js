const v2 = new Float64Array(15);
let a = v2;
function f5() {
    return 6;
}
Object.defineProperty(a, "length", { get: f5 });
const t5 = a.__proto__.__proto__;
delete t5[Symbol.iterator];
Float64Array.from(a);
