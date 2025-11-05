actual = "";
expected = "2,4,8,16,32,undefined,64,128,256,512,1024,undefined,2048,4096,8192,16384,32768,undefined,65536,131072,262144,524288,1048576,undefined,2097152,4194304,8388608,16777216,33554432,undefined,";
function f4() {
    var p = 1;
    function g() {
        for (let i9 = 0; i9 < 5; ++i9) {
            p = p * 2;
            try { appendToActual(p); } catch (e) {}
        }
    }
    return g;
}
var f = f4;
let v20;
try { v20 = f(); } catch (e) {}
var g = v20;
for (let i23 = 0; i23 < 5; ++i23) {
    try { g(); } catch (e) {}
    try { appendToActual(); } catch (e) {}
}
