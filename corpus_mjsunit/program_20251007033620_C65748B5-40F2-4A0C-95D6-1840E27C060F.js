function f(a1) {
    function f2() {
        return { a: a1 };
    }
    return f2;
}
let v4;
try { v4 = f(); } catch (e) {}
let v5;
try { v5 = v4(); } catch (e) {}
var o = v5;
if (o?.a !== undefined) {
    const v12 = "fail 1: o.a === " + o?.a;
    try { WScript.Echo(v12); } catch (e) {}
}
let v16;
try { v16 = f("a"); } catch (e) {}
let v17;
try { v17 = v16(); } catch (e) {}
if ((o = v17)?.a !== "a") {
    const v23 = "fail 2: o.a === " + o?.a;
    try { WScript.Echo(v23); } catch (e) {}
}
try { WScript.Echo("pass"); } catch (e) {}
