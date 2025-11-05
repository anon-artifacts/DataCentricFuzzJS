function f(a1, a2, a3) {
    a1[a2] = a3;
}
function test() {
    var a = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    Object.defineProperty(a, "length", { writable: false, value: 6 });
    for (let i30 = 0; i30 < 100; i30++) {
        f(a, a.length, i30);
    }
    a.hasOwnProperty(6);
    a[6];
    a.length;
}
test();
