var idx = 10000000;
var obj = {};
for (let i5 = 0; i5 < 100000; i5 += 100) {
    obj[i5] = "obj" + i5;
}
obj[idx] = "obj" + idx;
var str = "" + idx;
for (let i19 = 0; i19 < 10; i19++) {
    ({})[str];
}
obj[str];
obj[idx];
