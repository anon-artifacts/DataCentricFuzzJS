function* range(a1) {
    for (let i3 = 0; i3 < a1; i3++) {
        yield i3;
    }
}
var r = range(10);
var i = 0;
for (const v14 of r) {
    i++;
}
for (const v17 of r) {
    throw "FAIL";
}
