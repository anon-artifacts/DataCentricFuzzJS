actual = "";
expected = "";
function k(a5) {
    for (let i7 = 0; i7 < 10; ++i7) {
        a5(i7);
    }
}
function t() {
    var x = 1;
    function f17(a18) {
        x = a18;
    }
    k(f17);
}
for (let i21 = 0; i21 < 100; ++i21) {
    t();
}
