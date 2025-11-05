function f0(a1) {
    actual += a1 + ",";
}
var appendToActual = f0;
for (let i7 = 0; i7 < 3; i7++) {
    function ff() {
    }
    ff();
    actual = "";
    expected = "2,4,8,16,32,undefined,64,128,256,512,1024,undefined,2048,4096,8192,16384,32768,undefined,65536,131072,262144,524288,1048576,undefined,2097152,4194304,8388608,16777216,33554432,undefined,";
    function f19() {
        var p = 1;
        function g() {
            for (let i24 = 0; i24 < 5; ++i24) {
                appendToActual(p = p * 2);
            }
        }
        return g;
    }
    var f = f19;
    var g = f();
    for (let i37 = 0; i37 < 5; ++i37) {
        g();
        appendToActual();
    }
}
