var expected = "3,6,4,3,6,4,3,6,4,3,6,4,";
var actual = "";
function f() {
    const v7 = new String("abc");
    const v9 = new String("foobar");
    const v11 = new String("quux");
    var ss = [v7,v9,v11];
    for (let i15 = 0; i15 < 12; ++i15) {
        actual += ss[i15 % 3].length + ",";
    }
}
f();
function g(a29) {
    const v31 = new String(a29);
    return v31.length;
}
g("x");
g("x");
g("x");
function h(a43) {
    const v45 = new String(a43);
    var x = v45;
    for (let i48 = 0; i48 < 100; i48++) {
        x[i48] = i48;
    }
    return x.length;
}
h("x");
h("x");
h("x");
