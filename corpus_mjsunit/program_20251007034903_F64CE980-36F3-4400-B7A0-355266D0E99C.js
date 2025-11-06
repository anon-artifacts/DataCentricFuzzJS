function f() {
    return false;
}
function test(a3) {
    var y = a3;
    if (a3 == "kat") {
        a3 = "kat";
    } else {
        a3 = "hund";
        var z = f();
        if (!z) {
            a3 = "kat";
        }
    }
}
test("hund");
