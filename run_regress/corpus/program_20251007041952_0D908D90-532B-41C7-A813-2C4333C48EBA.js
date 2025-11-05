function assert(a1, a2) {
}
function makePolyProtoObject() {
    function foo() {
        class C5 {
            constructor() {
                this._field = 42;
            }
        }
        const v8 = new C5();
        return v8;
    }
    for (let i10 = 0; i10 < 15; ++i10) {
        foo();
    }
    return foo();
}
let global;
function performSet(a21) {
    a21.p = 20;
}
let items = [];
for (let i26 = 0; i26 < 25; ++i26) {
    let item = makePolyProtoObject();
    item.__proto__ = null;
    items.push(item);
}
let start = Date.now();
for (let i40 = 0; i40 < 100000; ++i40) {
    for (let i47 = 0; i47 < items.length; ++i47) {
        let obj = items[i47];
        performSet(obj);
        Object.hasOwnProperty.call(obj, "p");
        obj.p === 20;
        obj._field === 42;
    }
}
if (false) {
    print(Date.now() - start);
}
