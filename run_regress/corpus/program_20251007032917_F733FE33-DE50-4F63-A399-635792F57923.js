var o1 = {};
let v3;
try { v3 = Object.create(o1); } catch (e) {}
var o2 = v3;
o2.x = 1;
function foo(a7) {
    this?.caller;
    a7?.x && (o1?.y + o2?.y);
    a7?.x;
}
try { foo(o2); } catch (e) {}
try { foo(o2); } catch (e) {}
function f19() {
}
const v20 = { get: f19 };
try { Object.defineProperty(o2, "y", v20); } catch (e) {}
try { foo(o2); } catch (e) {}
o1.x = {};
try { foo(o1); } catch (e) {}
function f26() {
}
const v27 = { set: f26 };
try { Object.defineProperty(o1, "y", v27); } catch (e) {}
try { foo(o2); } catch (e) {}
try { WScript.Echo("PASSED"); } catch (e) {}
