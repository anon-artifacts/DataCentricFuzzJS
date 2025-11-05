try { console.log("Tests what happens when you present a CSE opportunity across an out-of-bounds string access."); } catch (e) {}
function foo(a4, a5) {
    var x = a5?.f;
    a4?.[0];
    var y = a5?.f;
    return x + y;
}
try { noInline(foo); } catch (e) {}
silentTestPass = true;
var theObject = {};
function f19() {
    theObject.f = 42;
}
const v22 = String?.prototype;
try { v22.__defineGetter__("0", f19); } catch (e) {}
for (let i25 = 0; i25 < 200; i25++) {
    const v33 = { f: 1 };
    try { foo("", v33); } catch (e) {}
}
theObject = { f: 1 };
try { foo("", theObject); } catch (e) {}
