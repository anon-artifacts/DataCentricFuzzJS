function qualified_tests(a1) {
    const v3 = a1 + "var x = 1";
    let v5;
    try { v5 = evalReturningScope(v3); } catch (e) {}
    let scopes = v5;
    scopes?.vars?.x;
}
try { qualified_tests(""); } catch (e) {}
try { qualified_tests("'use strict'; "); } catch (e) {}
let v16;
try { v16 = evalReturningScope("x = 1"); } catch (e) {}
let scopes = v16;
scopes?.vars?.x;
let fail = true;
try {
    try { evalReturningScope("'use strict'; x = 1"); } catch (e) {}
} catch(e25) {
    fail = false;
}
