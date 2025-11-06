var o = {};
for (let i3 = 0; i3 < 50; i3++) {
    o["x" + i3] = i3;
}
for (let i12 = 0; i12 < 50; i12 += 2) {
    delete o["x" + i12];
}
