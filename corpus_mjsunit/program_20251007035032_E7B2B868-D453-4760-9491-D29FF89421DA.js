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
for (let i34 = 0; i34 < 100000; ++i34) {
    let v40;
    try { v40 = target(polyProtoObject); } catch (e) {}
    try { shouldBe(v40, prototype); } catch (e) {}
}
polyProtoObject.__proto__ = null;
let v43;
try { v43 = target(polyProtoObject); } catch (e) {}
try { shouldBe(v43, undefined); } catch (e) {}
