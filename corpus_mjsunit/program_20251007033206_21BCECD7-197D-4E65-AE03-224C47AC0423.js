try { console.log("Tests that when values predicted but not proven int are used in a tower of additions, we don't eliminate the overflow check unsoundly."); } catch (e) {}
function foo(a4, a5, a6) {
    return ((a4 + a5) + a6?.f) | 0;
}
const v16 = -8;
const v17 = { a: 2147483645, b: 2147483644, c: 9007199254740990, expected: v16 };
const v22 = -16;
const v23 = { a: 2147483643, b: 2147483643, c: 18014398509481980, expected: v22 };
const v28 = -16;
const v29 = { a: 2147483643, b: 2147483642, c: 36028797018963960, expected: v28 };
const v34 = -16;
const v35 = { a: 2147483642, b: 2147483642, c: 36028797018963960, expected: v34 };
const v40 = -32;
const v41 = { a: 2147483641, b: 2147483640, c: 144115188075855840, expected: v40 };
const v46 = -64;
const v47 = { a: 2147483640, b: 2147483640, c: 144115188075855840, expected: v46 };
const v52 = -64;
const v53 = { a: 2147483640, b: 2147483639, c: 288230376151711680, expected: v52 };
const v58 = -64;
var badCases = [v17,v23,v29,v35,v41,v47,v53,{ a: 2147483639, b: 2147483639, c: 288230376151711680, expected: v58 }];
try { noInline(foo); } catch (e) {}
silentTestPass = true;
for (let i67 = 0; i67 < (1 + badCases?.length); i67++) {
    var a;
    var b;
    var c;
    var expected;
    if (!i67) {
        a = 1;
        b = 2;
        c = 3;
        expected = 6;
    } else {
        var current = badCases?.[i67 - 1];
        a = current?.a;
        b = current?.b;
        c = current?.c;
        expected = current?.expected;
    }
    const v96 = { f: c };
    let v97;
    try { v97 = foo(a, b, v96); } catch (e) {}
    v97 === expected;
}
