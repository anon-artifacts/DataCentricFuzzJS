function f0() {
}
var PI = Math?.PI;
let v4;
try { v4 = Math.ceil(PI); } catch (e) {}
var c = v4;
let v6;
try { v6 = Math.floor(PI); } catch (e) {}
var f = v6;
try { f0(c, f); } catch (e) {}
function f() {
    var save;
    function f12() {
        return "O.foo";
    }
    function f14() {
        return "O.bar";
    }
    var O = { foo: f12, bar: f14 };
    function f18() {
        return "O.o.foo";
    }
    function f20() {
        return "O.o.bar";
    }
    O.o = { foo: f18, bar: f20 };
    save = O;
    const v23 = O?.o;
    O = v23;
    let v24;
    try { v24 = O.foo(O, v23); } catch (e) {}
    try { f0(v24); } catch (e) {}
    O = save;
    let v26;
    try { v26 = O.foo(save); } catch (e) {}
    try { f0(v26); } catch (e) {}
    var str = "foo";
    const v30 = O?.o;
    O = v30;
    str = "bar";
    let v32;
    try { v32 = O[str](v30, "bar"); } catch (e) {}
    try { f0(v32); } catch (e) {}
    O = save;
    str = "foo";
    let v35;
    try { v35 = O[str](save, "foo"); } catch (e) {}
    try { f0(v35); } catch (e) {}
}
try { f(); } catch (e) {}
