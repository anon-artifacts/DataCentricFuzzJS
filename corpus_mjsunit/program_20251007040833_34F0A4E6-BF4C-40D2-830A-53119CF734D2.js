function foo(a1) {
    var result = 0;
    for (let i5 = 0; i5 < a1?.length; i5 += 2) {
        var element = a1?.[i5];
        if (element === void 0) {
            break;
        }
        result += a1?.[i5];
    }
    return result;
}
try { noInline(foo); } catch (e) {}
var array = [];
for (let i22 = 0; i22 < 1000; ++i22) {
    try { array.push(i22); } catch (e) {}
}
for (let i30 = 0; i30 < 50000; ++i30) {
    try { foo(array); } catch (e) {}
}
