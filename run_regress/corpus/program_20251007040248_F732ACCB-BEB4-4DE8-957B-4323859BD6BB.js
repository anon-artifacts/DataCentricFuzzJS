function foo(a1, a2) {
    let x = arguments;
    try { OSRExit(); } catch (e) {}
    return a1 + a2;
}
function bar(a9) {
    if (a9) {
        try { foo(); } catch (e) {}
    }
}
try { noInline(bar); } catch (e) {}
for (let i14 = 0; i14 < 1000; ++i14) {
    try { bar(true); } catch (e) {}
}
