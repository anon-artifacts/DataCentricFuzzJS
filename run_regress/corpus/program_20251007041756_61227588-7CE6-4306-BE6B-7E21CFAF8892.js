try {
    function f0() {
        while (n--) {
        }
    }
    try { f0(); } catch (e) {}
} catch(e4) {
}
function arrayProtoOutOfRange() {
    function f(a7) {
    }
    function test(a9, a10) {
        for (let i12 = 0; i12 < 1000; i12++) {
            const v20 = i12 % 2 ? a9 : a10;
            let v21;
            try { v21 = f(v20); } catch (e) {}
            var r = v21;
        }
    }
    try { test(); } catch (e) {}
}
try { oomTest(arrayProtoOutOfRange); } catch (e) {}
