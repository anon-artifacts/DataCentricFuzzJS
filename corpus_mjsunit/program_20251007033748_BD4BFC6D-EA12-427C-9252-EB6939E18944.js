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
function foo(a24, a25) {
    return a24?.[a25];
}
try { noInline(foo); } catch (e) {}
let v28;
try { v28 = make(); } catch (e) {}
var o = v28;
for (let i31 = 0; i31 < 10000; ++i31) {
    var index = i31 % o?.length;
    let v40;
    try { v40 = foo(o, index); } catch (e) {}
    var result = v40;
    if (result != (index + 1)) {
        throw (((("Read test error: bad result for index = " + index) + ": ") + result) + "; expected ") + (index + 1);
    }
}
