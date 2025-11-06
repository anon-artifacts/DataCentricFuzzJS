function bail() {
    try { bailout(); } catch (e) {}
}
function bail2() {
    try { bailout(); } catch (e) {}
    return 2;
}
function test() {
    let v10;
    try { v10 = evalcx("1;"); } catch (e) {}
    return v10;
}
try { test(); } catch (e) {}
function test2() {
    let v16;
    try { v16 = evaluate("1; bail2();"); } catch (e) {}
    return v16;
}
try { test2(); } catch (e) {}
function test3() {
    let v22;
    try { v22 = evaluate("1; bail2(); 3"); } catch (e) {}
    return v22;
}
try { test3(); } catch (e) {}
function test4() {
    let v28;
    try { v28 = evaluate("1; for(var i=0; i<1097; i++) { 3; };"); } catch (e) {}
    return v28;
}
try { test4(); } catch (e) {}
