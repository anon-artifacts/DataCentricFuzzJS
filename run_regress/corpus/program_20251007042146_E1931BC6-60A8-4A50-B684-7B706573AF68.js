function* range(a1) {
    for (let i3 = 0; i3 < a1; i3++) {
        yield i3;
    }
}
var r = range(10);
var s = "";
for (const v14 of r) {
    s += v14;
    if (v14 == 4) {
        break;
    }
}
s += "/";
for (const v18 of r) {
    s += v18;
}
