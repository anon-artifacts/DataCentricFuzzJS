function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1?.length; ++i5) {
        result += a1?.[i5];
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var array = [];
for (let i17 = 0; i17 < 1000; ++i17) {
    try { array.push(i17); } catch (e) {}
}
for (let i25 = 0; i25 < 50000; ++i25) {
    try { foo(array); } catch (e) {}
}
