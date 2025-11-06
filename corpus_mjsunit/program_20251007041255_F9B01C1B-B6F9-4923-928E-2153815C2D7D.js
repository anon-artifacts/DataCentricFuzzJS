function foo(a1, a2) {
    return a1 instanceof a2;
}
try { noInline(foo); } catch (e) {}
class C6 {
}
function Bar() {
}
let v8;
try { v8 = new C6(); } catch (e) {}
Bar.prototype = v8;
let v10;
try { v10 = new C6(); } catch (e) {}
v10.thingy = 42;
for (let i12 = 0; i12 < 10000; ++i12) {
    let v18;
    try { v18 = new Bar(); } catch (e) {}
    let v19;
    try { v19 = foo(v18, C6); } catch (e) {}
    var result = v19;
    if (!result) {
        throw "Error: bad result in loop: " + result;
    }
}
const t24 = Bar?.prototype;
t24.__proto__ = null;
let v26;
try { v26 = new Bar(); } catch (e) {}
let v27;
try { v27 = foo(v26, C6); } catch (e) {}
var result = v27;
if (result) {
    throw "Error: bad result at end: " + result;
}
