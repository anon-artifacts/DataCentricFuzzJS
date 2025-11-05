function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v6 = "bad value: " + a1;
        let v7;
        try { v7 = new Error(v6); } catch (e) {}
        throw v7;
    }
}
function makePolyProtoObject() {
    function foo() {
        class C10 {
            constructor() {
                this._field = 42;
            }
        }
        let v13;
        try { v13 = new C10(); } catch (e) {}
        return v13;
    }
    for (let i15 = 0; i15 < 15; ++i15) {
        try { foo(); } catch (e) {}
    }
    let v22;
    try { v22 = foo(); } catch (e) {}
    return v22;
}
function target(a24) {
    return a24?.__proto__;
}
try { noInline(target); } catch (e) {}
let v28;
try { v28 = makePolyProtoObject(); } catch (e) {}
var polyProtoObject = v28;
let v31;
try { v31 = Reflect.getPrototypeOf(polyProtoObject); } catch (e) {}
var prototype = v31;
var object = { __proto__: prototype };
for (let i36 = 0; i36 < 100000; ++i36) {
    let v42;
    try { v42 = target(polyProtoObject); } catch (e) {}
    try { shouldBe(v42, prototype); } catch (e) {}
    let v44;
    try { v44 = target(object); } catch (e) {}
    try { shouldBe(v44, prototype); } catch (e) {}
}
