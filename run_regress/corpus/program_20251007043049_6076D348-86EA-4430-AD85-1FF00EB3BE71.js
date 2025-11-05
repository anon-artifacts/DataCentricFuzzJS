function test() {
    let a = [,,,,,,,,,];
    let v4;
    try { v4 = a.concat(); } catch (e) {}
    return v4;
}
try { noInline(test); } catch (e) {}
const v7 = {};
let v8;
try { v8 = test(); } catch (e) {}
v8[0] = v7;
for (let i10 = 0; i10 < 20000; ++i10) {
    let v16;
    try { v16 = test(); } catch (e) {}
    var result = v16;
    if (result?.[0]) {
        let v19;
        try { v19 = result.toString(); } catch (e) {}
        throw v19;
    }
}
