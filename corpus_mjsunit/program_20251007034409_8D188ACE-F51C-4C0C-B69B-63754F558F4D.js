console.log("This tests that a skipped conversion of uint32 to number does not confuse OSR exit into thinking that the conversion is dead.");
function foo(a4, a5, a6) {
    var x = a4 >>> a5;
    return a6.f + (x | 0);
}
for (let i14 = 0; i14 < 200; ++i14) {
    var o;
    var expected;
    if (i14 < 150) {
        o = { f: 42 };
        expected = 42 + ((i14 / 2) | 0);
    } else {
        o = { f: 43, g: 44 };
        expected = 43 + ((i14 / 2) | 0);
    }
    foo(i14, 1, o);
}
