function X() {
    var slot = "foo";
    function f3(a4) {
        return slot === a4;
    }
    return f3;
}
function Y(a7) {
    var slot = "bar";
    function f10(a11) {
        a7.apply(this, arguments);
        return slot === "bar";
    }
    return f10;
}
var y = Y(X());
for (let i21 = 0; i21 < 5; i21++) {
    y("foo");
}
y("foo");
