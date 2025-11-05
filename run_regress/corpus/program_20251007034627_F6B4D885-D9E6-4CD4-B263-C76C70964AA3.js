function f0() {
}
let v2;
try { v2 = f0(); } catch (e) {}
if (!v2) {
    try { f0("Concurrent recompilation is disabled. Skipping this test."); } catch (e) {}
    try { quit(); } catch (e) {}
}
function f1(a9, a10) {
    return a9?.[a10] + 0.5;
}
var arr = [0,,2.5];
try { f1(arr, 0); } catch (e) {}
try { f1(arr, 0); } catch (e) {}
try { f1(arr, 0); } catch (e) {}
const t15 = Object?.prototype;
t15[1] = 1.5;
try { f1(arr, 1); } catch (e) {}
try { f1(); } catch (e) {}
try { f1(); } catch (e) {}
