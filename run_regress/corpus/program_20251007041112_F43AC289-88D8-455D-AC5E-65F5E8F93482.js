obj = {};
const v12 = {
    get x() {
        try {
        } catch(e5) {
        }
        function bar(a7) {
            print("getter");
            this.prop1 = 1;
        }
        return bar;
    },
};
Object.defineProperty(obj, "prop0", { value: v12, configurable: true });
function foo() {
    const t15 = obj.prop0.x;
    new t15(this);
}
foo();
foo();
foo();
