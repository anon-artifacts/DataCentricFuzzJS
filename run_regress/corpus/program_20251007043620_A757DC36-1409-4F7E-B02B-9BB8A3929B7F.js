let y = 42;
function makePolyProtoInstance() {
    function foo() {
        class C4 {
            constructor() {
                this.x = 20;
            }
        }
        const t8 = C4?.prototype;
        t8.y = y;
        let v8;
        try { v8 = new C4(); } catch (e) {}
        return v8;
    }
    for (let i10 = 0; i10 < 5; ++i10) {
        try { foo(); } catch (e) {}
    }
    let v17;
    try { v17 = foo(); } catch (e) {}
    return v17;
}
let v18;
try { v18 = makePolyProtoInstance(); } catch (e) {}
let polyProtoInstance = v18;
const t24 = String?.prototype;
t24.__proto__ = polyProtoInstance;
const t26 = Symbol?.prototype;
t26.__proto__ = polyProtoInstance;
let v26;
try { v26 = Symbol("foo"); } catch (e) {}
let v29;
try { v29 = Symbol("bar"); } catch (e) {}
let strings = ["foo",v26,"bar",v29];
function assert(a33) {
}
try { noInline(assert); } catch (e) {}
function validate(a37) {
    a37?.x === 20;
    a37?.y === y;
    a37?.nonExistentProperty === undefined;
    typeof a37?.hasOwnProperty === "function";
    a37?.hasOwnProperty === Object?.prototype?.hasOwnProperty;
}
try { noInline(validate); } catch (e) {}
for (let i57 = 0; i57 < 1000; ++i57) {
    for (const v63 of strings) {
        try { validate(v63); } catch (e) {}
    }
}
y = 27;
polyProtoInstance.__proto__ = { z: 400, y: y };
for (let i69 = 0; i69 < 1000; ++i69) {
    for (const v75 of strings) {
        try { validate(v75); } catch (e) {}
    }
}
