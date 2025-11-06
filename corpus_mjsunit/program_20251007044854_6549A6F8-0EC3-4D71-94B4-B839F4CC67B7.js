function target(a1) {
    let v2;
    try { v2 = new a1(); } catch (e) {}
    return v2;
}
try { noInline(target); } catch (e) {}
for (let i6 = 0; i6 < 10000; ++i6) {
    try { target(Date); } catch (e) {}
}
