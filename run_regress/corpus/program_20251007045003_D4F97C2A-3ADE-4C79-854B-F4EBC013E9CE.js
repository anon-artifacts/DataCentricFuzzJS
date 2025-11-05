var x = {};
for (let i3 = 0; i3 < 20000; i3++) {
    x[i3] = 0;
}
x.y = 99;
for (let i12 = 0; i12 < 1000; ++i12) {
    let v18 = x.y;
    v18++;
}
x.y;
