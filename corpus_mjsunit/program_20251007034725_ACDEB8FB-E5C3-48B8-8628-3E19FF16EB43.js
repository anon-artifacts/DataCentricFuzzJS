class C0 {
    constructor() {
    }
}
class C2 extends C0 {
    constructor() {
        super();
    }
}
function f() {
    new C2();
}
f();
f();
