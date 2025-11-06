function doStore(a1) {
    for (let i3 = 0; i3 < 100; i3++) {
        a1[1] = i3;
    }
}
function test() {
    with (this) {
    }
    var a = { 0: 0, 1: 1 };
    Object.preventExtensions(a);
    doStore(a);
    a[1];
    a[1] = 0;
    Object.freeze(a);
    doStore(a);
    a[1];
}
test();
test();
