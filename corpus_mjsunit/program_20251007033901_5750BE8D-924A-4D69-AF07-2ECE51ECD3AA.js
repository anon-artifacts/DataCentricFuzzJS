function assert(a1, a2) {
    if (!a1) {
        const v7 = new Error("Bad:" + a2);
        throw v7;
    }
}
let called = false;
function makePolyProtoObject() {
    function foo() {
        class C12 {
            constructor() {
                this._p = null;
            }
            set p(a16) {
                called = true;
                this._p = a16;
            }
        }
        const v18 = new C12();
        return v18;
    }
    for (let i20 = 0; i20 < 15; ++i20) {
        foo();
    }
    return foo();
}
function performSet(a29) {
    a29.p = 20;
}
let items = [];
for (let i34 = 0; i34 < 8; ++i34) {
    items.push(makePolyProtoObject());
}
function performSet(a43, a44) {
    a43.p = a44;
}
let start = Date.now();
for (let i49 = 0; i49 < 10000; ++i49) {
    for (let i56 = 0; i56 < items.length; ++i56) {
        let o = items[i56];
        performSet(o, i56);
        o._p === i56;
        called === true;
        called = false;
    }
}
if (false) {
    print(Date.now() - start);
}
