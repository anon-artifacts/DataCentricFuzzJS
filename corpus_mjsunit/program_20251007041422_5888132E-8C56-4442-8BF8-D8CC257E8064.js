function func(a1, a2, a3) {
    a1[0] = 1.2;
    a2[0] = a3;
    a1[1] = 2.2;
    a1[0] = 2.3023e-320;
}
function main() {
    var a = [1.1,2.2];
    let v14;
    try { v14 = new Uint32Array(100); } catch (e) {}
    var b = v14;
    for (let i17 = 0; i17 < 65536; i17++) {
        try { func(a, b, i17); } catch (e) {}
    }
    function f24() {
        a[0] = {};
        return 0;
    }
    const v27 = { valueOf: f24 };
    try { func(a, b, v27); } catch (e) {}
    const v29 = a?.[0];
    try { v29.toString(); } catch (e) {}
}
try { main(); } catch (e) {}
try { WScript.Echo("pass"); } catch (e) {}
