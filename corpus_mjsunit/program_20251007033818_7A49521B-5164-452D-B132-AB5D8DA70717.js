function test(a1, a2) {
    a1 = a1 | 0;
    a2 = a2 | 0;
    if (a2 & 1) {
        a2 = (a1 ? a2 : a2) - a1 ? false : 0;
    }
}
try { noInline(test); } catch (e) {}
for (let i17 = 0; i17 < 200; ++i17) {
    if (i17 < 100) {
        try { test(0, 2147483649); } catch (e) {}
    } else {
        try { test(2048, 2147483649); } catch (e) {}
    }
}
