function makePolyProtoObject() {
    function foo() {
        class C2 {
            constructor() {
                this._field = 42;
                this.hello = 33;
            }
        }
        let v6;
        try { v6 = new C2(); } catch (e) {}
        return v6;
    }
    for (let i8 = 0; i8 < 15; ++i8) {
        try { foo(); } catch (e) {}
    }
    let v15;
    try { v15 = foo(); } catch (e) {}
    return v15;
}
function foo(a17, a18) {
    return a17 instanceof a18;
}
try { noInline(foo); } catch (e) {}
class C22 {
}
let v23;
try { v23 = makePolyProtoObject(); } catch (e) {}
let o = v23;
let v25;
try { v25 = new C22(); } catch (e) {}
o.__proto__ = v25;
let x = { __proto__: o };
for (let i29 = 0; i29 < 1000; ++i29) {
    try { foo(x, C22); } catch (e) {}
}
