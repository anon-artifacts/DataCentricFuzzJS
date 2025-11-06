function assert(a1, a2) {
}
try { noInline(assert); } catch (e) {}
function baz(a6) {
    if (a6) {
        let v9;
        try { v9 = new Error("Baz"); } catch (e) {}
        throw v9;
    }
}
function bar(a11) {
    var exception = null;
    try {
        try { baz(a11); } catch (e) {}
    } catch(e15) {
        exception = e15;
        try { baz(a11); } catch (e) {}
    } finally {
        if (a11) {
        }
    }
}
function foo(a18) {
    var exception = null;
    try {
        try { bar(a18); } catch (e) {}
    } catch(e22) {
        exception = e22;
    }
    if (a18) {
    }
}
const NUM_LOOPS = 1000;
for (let i26 = 0; i26 < NUM_LOOPS; i26++) {
    const v33 = i26 === (NUM_LOOPS - 1);
    try { foo(v33); } catch (e) {}
}
