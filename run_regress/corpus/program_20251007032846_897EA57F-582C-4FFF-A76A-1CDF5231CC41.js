function foo(a1) {
    var result = 0;
    var i = 0;
    if (!a1?.length) {
        a1 = [1];
    }
    do {
        result += a1?.[i++];
    } while (i < a1?.length)
    return result;
}
try { noInline(foo); } catch (e) {}
for (let i17 = 0; i17 < 10000; ++i17) {
    const v26 = [1,2,3];
    try { foo(v26); } catch (e) {}
}
