function f0(a1) {
    var sum = 0;
    for (let i5 = 0; i5 < a1.length; i5++) {
        sum += a1[i5];
    }
    return sum;
}
var f = f0;
function f13() {
    var o1 = [];
    for (let i17 = 0; i17 < 100; i17++) {
        o1[i17] = i17;
    }
    var o2 = {};
    for (let i26 = 0; i26 < o1.length; i26++) {
        o2[i26] = o1[i26];
    }
    o2.length = o1.length;
    var sum = 0;
    for (let i37 = 0; i37 < 100000; i37++) {
        if ((i37 % 2) === 0) {
            sum += f(o1);
        } else {
            sum += f(o2);
        }
    }
    return sum;
}
var run = f13;
var result = run();
if (result !== 495000000) {
    throw "Bad result: " + result;
}
