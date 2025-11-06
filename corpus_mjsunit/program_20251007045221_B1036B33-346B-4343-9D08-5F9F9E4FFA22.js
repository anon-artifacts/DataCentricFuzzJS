function effects() {
}
try { noInline(effects); } catch (e) {}
function foo() {
    let x = [1,2,3];
    try { effects(); } catch (e) {}
    return x?.length;
}
try { noInline(foo); } catch (e) {}
for (let i13 = 0; i13 < 100000; ++i13) {
    let v19;
    try { v19 = foo(); } catch (e) {}
    if (v19 !== 3) {
        let v23;
        try { v23 = new Error(); } catch (e) {}
        throw v23;
    }
}
