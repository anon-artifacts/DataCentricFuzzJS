class C0 {
    constructor() {
    }
}
class C2 extends C0 {
}
const v3 = new C2();
var b = v3;
b.constructor.name;
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
