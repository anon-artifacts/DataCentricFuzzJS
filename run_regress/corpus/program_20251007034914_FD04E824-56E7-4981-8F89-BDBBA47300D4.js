function make(a1) {
    if (a1 === void 0) {
        a1 = 1;
    }
    let v8;
    try { v8 = new Int8Array(100); } catch (e) {}
    var int8Array = v8;
    for (let i11 = 0; i11 < int8Array?.length; ++i11) {
        int8Array[i11] = i11;
    }
    const v17 = int8Array?.buffer;
    const v19 = int8Array?.length - a1;
    let v20;
    try { v20 = new Int8Array(v17, a1, v19); } catch (e) {}
    return v20;
}
try { noInline(make); } catch (e) {}
function foo(a24, a25, a26) {
    a24[a25] = a26;
}
try { noInline(foo); } catch (e) {}
let v28;
try { v28 = make(); } catch (e) {}
var o = v28;
const v31 = o?.buffer;
let v32;
try { v32 = new Int8Array(v31); } catch (e) {}
var real = v32;
for (let i35 = 0; i35 < 10000; ++i35) {
    var index = i35 % o?.length;
    var value = i35 % 7;
    try { foo(o, index, value); } catch (e) {}
    var result = real?.[index + 1];
    if (result != value) {
        throw (((("Write test error: bad result for index = " + index) + ": ") + result) + "; expected ") + value;
    }
}
