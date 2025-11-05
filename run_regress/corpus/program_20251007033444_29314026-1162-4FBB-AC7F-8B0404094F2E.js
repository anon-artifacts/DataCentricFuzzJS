function foo(a1) {
    a1[0] = 1;
    a1[1] = 2;
    a1[2] = 3;
}
try { noInline(foo); } catch (e) {}
let v9;
try { v9 = new Float32Array(1); } catch (e) {}
var array = v9;
for (let i12 = 0; i12 < 100000; ++i12) {
    try { foo(array); } catch (e) {}
}
try { foo(array); } catch (e) {}
