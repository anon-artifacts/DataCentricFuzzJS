function f0() {
}
class C1 {
    constructor() {
    }
}
class C3 extends C1 {
    constructor() {
        super();
    }
    f() {
        return super.constructor();
    }
}
class C7 extends C3 {
    constructor() {
        super();
    }
}
const v9 = new C7();
let d = v9;
let v11;
try { v11 = d.f(); } catch (e) {}
var df = v11;
df?.constructor;
if (typeof f0 === "function") {
    f0(0, 0, "OK");
}
