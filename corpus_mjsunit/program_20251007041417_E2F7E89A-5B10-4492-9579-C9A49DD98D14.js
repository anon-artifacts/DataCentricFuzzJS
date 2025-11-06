function foo() {
    var array = [1.5];
    const v4 = array?.[0];
    let v6;
    try { v6 = Math.sin(v4); } catch (e) {}
    const v10 = (v6 * 5) / 4.5;
    let v11;
    try { v11 = Math.abs(v10); } catch (e) {}
    let v12;
    try { v12 = Math.sqrt(v11); } catch (e) {}
    let v13;
    try { v13 = Math.cos(v12); } catch (e) {}
    return v13 % 3.5;
}
try { noInline(foo); } catch (e) {}
for (let i19 = 0; i19 < 100000; ++i19) {
    try { foo(); } catch (e) {}
}
