try { console.log("Tests that the DFG is appropriately conservative for may-aliased but not must-aliased PutClosureVar and GetClosureVar."); } catch (e) {}
function foo(a4, a5) {
    let v6;
    try { v6 = a4(); } catch (e) {}
    var x = v6;
    try { a5(); } catch (e) {}
    let v9;
    try { v9 = a4(); } catch (e) {}
    var y = v9;
    return x + y;
}
function thingy() {
    var x = 42;
    function f15() {
        return x;
    }
    function f16() {
        x = 71;
    }
    return { bar: f15, baz: f16 };
}
function runIt() {
    let v20;
    try { v20 = thingy(); } catch (e) {}
    var o = v20;
    const v22 = o?.bar;
    const v23 = o?.baz;
    let v24;
    try { v24 = foo(v22, v23); } catch (e) {}
    return v24;
}
try { noInline(foo); } catch (e) {}
for (let i28 = 0; i28 < 200; i28++) {
    try { runIt(); } catch (e) {}
}
try { runIt(); } catch (e) {}
