function foo(a1) {
    let v3;
    try { v3 = bar(a1); } catch (e) {}
    return v3;
}
try { noFTL(foo); } catch (e) {}
try { noInline(foo); } catch (e) {}
function bar(a9) {
    return "bar" in a9;
}
try { noInline(bar); } catch (e) {}
for (let i14 = 0; i14 < 1000000; i14++) {
    const v20 = {};
    let v21;
    try { v21 = foo(v20); } catch (e) {}
    if (v21) {
        let v24;
        try { v24 = new Error("bad"); } catch (e) {}
        throw v24;
    }
}
try {
    try { foo(""); } catch (e) {}
} catch(e27) {
}
