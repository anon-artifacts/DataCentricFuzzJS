const v1 = {};
const v2 = {};
let v3;
try { v3 = new Proxy(v1, v2); } catch (e) {}
var o2 = v3;
function f1() {
}
function f2() {
}
function f4(a8) {
    let v10;
    try { v10 = Object.getOwnPropertyNames(a8); } catch (e) {}
    var key = v10?.[18];
    o4 = a8?.[key];
    a8.prototype = {};
}
try { f4(f1); } catch (e) {}
try { f4(f1); } catch (e) {}
try { f4(f2); } catch (e) {}
try { new f2(o2); } catch (e) {}
function factory() {
    function foo() {
    }
    foo.x = 0;
    return foo;
}
var fobjs = [];
for (let i26 = 0; i26 < 10; i26++) {
    let v32;
    try { v32 = factory(); } catch (e) {}
    fobjs[i26] = v32;
    var of = v32;
    if (i26 > 0) {
        fobjs?.[i26 - 1] === of;
        const v43 = fobjs?.[i26 - 1];
        try { shapeOf(v43); } catch (e) {}
        try { shapeOf(of); } catch (e) {}
    }
}
const v47 = fobjs?.[0];
let v49;
try { v49 = shapeOf(v47); } catch (e) {}
let v50;
try { v50 = shapeOf(f1); } catch (e) {}
v49 == v50;
