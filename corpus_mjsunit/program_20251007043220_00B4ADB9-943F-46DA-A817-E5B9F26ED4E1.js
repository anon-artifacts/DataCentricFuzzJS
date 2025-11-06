let val;
for (let i3 = 0; i3 < 100000; i3++) {
    val = 42;
}
for (let i11 = 0; i11 < 1000000; i11++) {
    if ((val != null) && (val == 2)) {
        throw "Val should be 42, but is 2";
    }
}
