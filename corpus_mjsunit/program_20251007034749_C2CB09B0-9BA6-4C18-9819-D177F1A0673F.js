function test() {
    class C2 extends null {
        constructor() {
            return {};
        }
        meth() {
            super["prop"] = "something";
            super.prop = "something";
        }
    }
    try {
        const v9 = () => {
            const v10 = {};
            return C2.prototype.meth.call(v10);
        };
        v9();
    } catch(e15) {
    }
}
test();
