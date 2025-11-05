function test(a1) {
    if ("cocoa" in a1) {
        return a1?.cocoa;
    }
    return 0;
}
try { noInline(test); } catch (e) {}
var o1 = { cocoa: 42 };
var o2 = { cocoa: 40, cappuccino: 41 };
for (let i16 = 0; i16 < 1000000; ++i16) {
    try { test(o1); } catch (e) {}
    try { test(o2); } catch (e) {}
}
