function f0() {
}
let v2;
try { v2 = f0(); } catch (e) {}
if (!v2) {
    try { f0("Concurrent recompilation is disabled. Skipping this test."); } catch (e) {}
    try { quit(); } catch (e) {}
}
function new_object() {
    var o = {};
    o.a = 1;
    o.b = 2;
    return o;
}
function add_field(a14) {
    a14.c = 0;
    a14.c = 3;
}
let v17;
try { v17 = new_object(); } catch (e) {}
var obj1 = v17;
let v19;
try { v19 = new_object(); } catch (e) {}
var obj2 = v19;
try { add_field(obj1); } catch (e) {}
try { add_field(obj2); } catch (e) {}
let v23;
try { v23 = new_object(); } catch (e) {}
var o = v23;
try { add_field(o); } catch (e) {}
o.c = 2.2;
try { add_field(); } catch (e) {}
try { add_field(); } catch (e) {}
