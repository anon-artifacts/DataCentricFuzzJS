function foo(a1) {
    return ((((((((((a1 + 0) + (a1 + 1)) + (a1 + 2)) + (a1 + 3)) + (a1 + 4)) + (a1 + 5)) + (a1 + 6)) + (a1 + 7)) + (a1 + 8)) + (a1 + 9)) + (a1 + 10);
}
try { noInline(foo); } catch (e) {}
for (let i37 = 0; i37 < 100000; ++i37) {
    let v43;
    try { v43 = foo(i37); } catch (e) {}
    var result = v43;
    if (result != ((i37 * 11) + 55)) {
        throw (("Error: bad result for i = " + i37) + ": ") + result;
    }
}
for (let i56 = 2147483628; i56 <= 2147483647; i56++) {
    let v62;
    try { v62 = foo(i56); } catch (e) {}
    var result = v62;
    if (result != ((i56 * 11) + 55)) {
        throw (("Error: bad result for i = " + i56) + ": ") + result;
    }
}
