var before = "";
var after = "";
function g(a5) {
    for (let i7 = 0; i7 < 10; ++i7) {
    }
}
function f(a14) {
    var xa = a14;
    for (let i17 = 0; i17 < 5; ++i17) {
        var j = i17 + xa[i17];
        before += j + ",";
        g();
        after += j + ",";
    }
}
f([0,1,2,3,4]);
