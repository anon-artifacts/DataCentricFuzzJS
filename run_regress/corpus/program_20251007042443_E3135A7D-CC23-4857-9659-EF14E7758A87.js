function f0() {
}
var summary = "A (slow) generator of pi";
var actual;
var expect;
f0(summary);
function* pi() {
    var val = 0;
    var curr = 1;
    var isNeg = false;
    while (true) {
        if (isNeg) {
            const v17 = 4 / curr;
            val -= v17;
            yield v17;
        } else {
            const v20 = 4 / curr;
            val += v20;
            yield v20;
        }
        curr += 2;
        isNeg = !isNeg;
    }
}
var failed = false;
var it = pi();
var vals = [4,4 - (4 / 3),(4 - (4 / 3)) + (4 / 5),((4 - (4 / 3)) + (4 / 5)) - (4 / 7)];
try {
    for (let i60 = 0, i61 = vals.length; i60 < i61; i60++) {
        if (it.next().value != vals[i60]) {
            throw vals[i60];
        }
    }
} catch(e73) {
    failed = e73;
}
f0(expect = false, actual = failed, summary);
