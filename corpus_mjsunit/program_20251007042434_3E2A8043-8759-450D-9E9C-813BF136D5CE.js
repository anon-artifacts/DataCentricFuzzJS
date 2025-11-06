function ff() {
    var k = 0;
    function q() {
        return ++k;
    }
    var counter = q;
    return counter;
}
var f = ff;
function g() {
    for (let i9 = 0; i9 < 10; ++i9) {
        f();
    }
}
g();
