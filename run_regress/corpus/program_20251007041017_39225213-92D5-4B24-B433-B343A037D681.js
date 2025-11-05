function f0() {
}
function makePolyProtoInstanceWithNullPrototype() {
    function foo() {
        class C3 {
            constructor() {
                this.x = 20;
            }
        }
        const t9 = C3?.prototype;
        t9.y = 42;
        let v8;
        try { v8 = new C3(); } catch (e) {}
        let result = v8;
        return result;
    }
    for (let i11 = 0; i11 < 5; ++i11) {
        try { foo(); } catch (e) {}
    }
    let v18;
    try { v18 = foo(); } catch (e) {}
    let result = v18;
    result.__proto__ = null;
    return result;
}
function assert(a22) {
}
let v23;
try { v23 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v24;
try { v24 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v25;
try { v25 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v26;
try { v26 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v27;
try { v27 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v28;
try { v28 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v29;
try { v29 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v30;
try { v30 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v31;
try { v31 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v32;
try { v32 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v33;
try { v33 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let v34;
try { v34 = makePolyProtoInstanceWithNullPrototype(); } catch (e) {}
let instances = [v23,v24,v25,v26,v27,v28,v29,v30,v31,v32,v33,v34];
let p;
function validate(a40) {
    a40?.x === 20;
    a40?.p === undefined;
}
try { noInline(validate); } catch (e) {}
let v50;
try { v50 = Date.now(); } catch (e) {}
let start = v50;
for (let i53 = 0; i53 < 100000; ++i53) {
    for (let i60 = 0; i60 < instances?.length; ++i60) {
        const v66 = instances?.[i60];
        try { validate(v66); } catch (e) {}
    }
}
if (false) {
    let v69;
    try { v69 = Date.now(); } catch (e) {}
    const v70 = v69 - start;
    try { f0(v70); } catch (e) {}
}
