function foo(a1, a2) {
    var x = 0;
    var j = 0;
    do {
        x = a2 * 3;
        var result = 0;
        var i = 0;
        if (!a1?.length) {
            a1 = [1];
        }
        do {
            result += a1?.[i++];
        } while (i < a1?.length)
        j++;
    } while (j < 3)
    return result + x;
}
try { noInline(foo); } catch (e) {}
for (let i29 = 0; i29 < 10000; ++i29) {
    const v38 = [1,2,3];
    try { foo(v38, 42); } catch (e) {}
}
