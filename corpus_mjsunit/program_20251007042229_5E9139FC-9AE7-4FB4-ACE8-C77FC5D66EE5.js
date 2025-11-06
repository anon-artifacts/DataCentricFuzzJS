function f0() {
    return "ponies";
}
var h = { apply: f0 };
function f() {
    var x = 3;
    function f7() {
        return ++x;
    }
    g = f7;
    return h.apply(null, arguments);
}
f();
