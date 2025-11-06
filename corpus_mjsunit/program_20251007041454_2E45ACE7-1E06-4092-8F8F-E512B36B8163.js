function foo(a1) {
    return a1?.[42];
}
try { noInline(foo); } catch (e) {}
let v7;
try { v7 = new Float32Array(10); } catch (e) {}
var shortArray = v7;
let v10;
try { v10 = new Float32Array(100); } catch (e) {}
var longArray = v10;
function test(a13, a14) {
    let v15;
    try { v15 = foo(a13); } catch (e) {}
    var result = v15;
    if (result != a14) {
        const v20 = "bad result: " + result;
        let v21;
        try { v21 = new Error(v20); } catch (e) {}
        throw v21;
    }
}
for (let i23 = 0; i23 < 1000; ++i23) {
    const v30 = void 0;
    try { test(shortArray, v30); } catch (e) {}
}
for (let i33 = 0; i33 < 100000; ++i33) {
    try { test(longArray, 0); } catch (e) {}
}
const v42 = void 0;
try { test(shortArray, v42); } catch (e) {}
