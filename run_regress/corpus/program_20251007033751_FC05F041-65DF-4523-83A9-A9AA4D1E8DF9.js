function foo(a1) {
    var array = [1.5,a1];
    const v5 = array?.[0];
    let v7;
    try { v7 = Math.sin(v5); } catch (e) {}
    const v11 = (v7 * 5) / 4.5;
    let v12;
    try { v12 = Math.abs(v11); } catch (e) {}
    let v13;
    try { v13 = Math.sqrt(v12); } catch (e) {}
    let v14;
    try { v14 = Math.cos(v13); } catch (e) {}
    return v14 % 3.5;
}
try { noInline(foo); } catch (e) {}
for (let i20 = 0; i20 < 100000; ++i20) {
    try { foo(0); } catch (e) {}
}
