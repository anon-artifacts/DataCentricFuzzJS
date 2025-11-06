try {
    obj[i] = "a";
} catch(e3) {
}
var obj = { p: 100 };
var name = "p";
var a = [];
for (let i12 = 0; i12 < 10; i12++) {
    let v18 = obj[name];
    a[i12] = v18--;
}
a.join();
