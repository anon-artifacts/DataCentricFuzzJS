function foo(a1) {
    let v3;
    try { v3 = a1.getInt8(42); } catch (e) {}
    return v3;
}
try { noInline(foo); } catch (e) {}
let v9;
try { v9 = new ArrayBuffer(43); } catch (e) {}
let v10;
try { v10 = new DataView(v9); } catch (e) {}
var d = v10;
try { d.setInt8(42, 43); } catch (e) {}
for (let i16 = 0; i16 < 100000; ++i16) {
    let v22;
    try { v22 = foo(d); } catch (e) {}
    var result = v22;
    if (result != 43) {
        throw "Error: bad result: " + result;
    }
}
for (let i29 = 0; i29 < 10; ++i29) {
    var didThrow = false;
    try {
        let v38;
        try { v38 = new ArrayBuffer(42); } catch (e) {}
        let v39;
        try { v39 = new DataView(v38); } catch (e) {}
        try { foo(v39); } catch (e) {}
    } catch(e41) {
        didThrow = true;
    }
}
