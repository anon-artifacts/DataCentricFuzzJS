var symbol = "@@species";
function Hello() {
}
function f3() {
    return this;
}
const v5 = { get: f3 };
try { Object.defineProperty(Hello, symbol, v5); } catch (e) {}
function f8() {
    const v11 = this?.constructor?.[symbol];
    let v12;
    try { v12 = new v11(); } catch (e) {}
    return v12;
}
const t14 = Hello?.prototype;
t14.generate = f8;
function ok() {
    let v15;
    try { v15 = new Hello(); } catch (e) {}
    var object = v15;
    let v17;
    try { v17 = object.generate(); } catch (e) {}
    if (!(v17 instanceof Hello)) {
        let v22;
        try { v22 = new Error("bad instance"); } catch (e) {}
        throw v22;
    }
}
try { noInline(ok); } catch (e) {}
for (let i26 = 0; i26 < 10000; ++i26) {
    try { ok(); } catch (e) {}
}
