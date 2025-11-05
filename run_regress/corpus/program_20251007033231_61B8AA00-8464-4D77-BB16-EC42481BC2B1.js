let v2;
try { v2 = new Int32Array(1); } catch (e) {}
var array = v2;
function foo(a5) {
    array[0] = a5;
    return array?.[0];
}
try { noInline(foo); } catch (e) {}
function test(a10, a11) {
    let v12;
    try { v12 = foo(a10); } catch (e) {}
    var result = v12;
    if (result != a11) {
        throw (((("Error: " + a10) + " was supposed to result in ") + a11) + " but instead got ") + result;
    }
}
for (let i24 = 0; i24 < 100000; ++i24) {
    const v31 = i24 + 0.5;
    try { test(v31, i24); } catch (e) {}
}
try { test(0, 0); } catch (e) {}
try { test(100.5, 100); } catch (e) {}
const v40 = -100.5;
const v42 = -100;
try { test(v40, v42); } catch (e) {}
const v46 = -1294967296;
try { test(3000000000, v46); } catch (e) {}
const v49 = -3000000000;
try { test(v49, 1294967296); } catch (e) {}
const v53 = -2147483648;
const v55 = -2147483648;
try { test(v53, v55); } catch (e) {}
