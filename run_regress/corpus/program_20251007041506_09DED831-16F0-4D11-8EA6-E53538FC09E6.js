function f() {
}
var g = {};
function test() {
    var obj1 = {};
    for (let i7 = 0; i7 < 2; i7++) {
        var obj6 = obj1;
        obj6.blah;
        f();
        var obj6 = g;
        var obj1 = {};
        g.blah;
    }
}
test({});
test({});
