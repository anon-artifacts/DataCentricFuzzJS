const v1 = Object.prototype;
const v10 = {
    set(a6) {
        const v9 = new TypeError("hit name");
        throw v9;
    },
    enumerable: true,
    configurable: true,
};
Object.defineProperty(v1, "name", v10);
function TestCase(a13) {
    this.name = a13;
}
try { new TestCase(); } catch (e) {}
