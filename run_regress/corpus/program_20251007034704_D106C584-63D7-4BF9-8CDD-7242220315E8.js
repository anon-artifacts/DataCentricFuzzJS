let hook = {};
function f2() {
}
let Base = f2;
const v6 = new Proxy(Base.prototype, hook);
Base.prototype = v6;
class C7 extends Base {
    testPrimitiveReceiver() {
        super.foo = "Derived";
    }
}
const v10 = () => {
    const v13 = C7.prototype.testPrimitiveReceiver;
    let v14;
    try { v14 = v13.call(null); } catch (e) {}
    return v14;
};
v10();
`can't assign to property "foo" on ({}): not an object`;
