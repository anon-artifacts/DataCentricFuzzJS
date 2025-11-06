class C0 {
    constructor() {
    }
    static found() {
        this.foundCalled = true;
    }
    static get accessor() {
        return 45;
    }
    notFound() {
    }
}
class C8 extends C0 {
    constructor() {
    }
    static found() {
        throw "NO!";
    }
    static get accessor() {
        throw "NO!";
    }
    static test() {
        super["notFound"];
        super.found();
        let calledDesc = Object.getOwnPropertyDescriptor(C8, "foundCalled");
        calledDesc.value;
        super.accessor;
    }
}
C8.test();
if (typeof reportCompare === "function") {
    reportCompare(0, 0, "OK");
}
