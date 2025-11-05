function test0() {
    var b = -162;
    try {
        try {
        } catch(e4) {
        } finally {
            const v6 = -1006389207;
            b = v6;
            v6 * c;
        }
    } catch(e9) {
    } finally {
    }
    return b;
}
let v10;
try { v10 = test0(); } catch (e) {}
var b = v10;
let v12;
try { v12 = test0(); } catch (e) {}
b |= v12;
let v13;
try { v13 = test0(); } catch (e) {}
b |= v13;
if (b == -1006389207) {
    try { WScript.Echo("PASSED"); } catch (e) {}
}
