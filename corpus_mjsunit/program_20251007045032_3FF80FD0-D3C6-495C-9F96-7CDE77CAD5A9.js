try { console.log("Tests what happens when you do a out-of-bounds access on a string and use that to install a getter that clobbers a structure."); } catch (e) {}
function foo(a4, a5) {
    var x = a5?.f;
    a4?.[42];
    var y = a5?.g;
    return x + y;
}
try { noInline(foo); } catch (e) {}
silentTestPass = true;
var theObject = {};
var didGetCalled = false;
function f21() {
    didGetCalled = true;
    delete theObject?.g;
    theObject.h = 42;
}
const v26 = String?.prototype;
try { v26.__defineGetter__("42", f21); } catch (e) {}
for (let i29 = 0; i29 < 400; i29++) {
    const v38 = { f: 1, g: 2 };
    try { foo("hello", v38); } catch (e) {}
}
theObject = { f: 1, g: 2 };
try { foo("hello", theObject); } catch (e) {}
