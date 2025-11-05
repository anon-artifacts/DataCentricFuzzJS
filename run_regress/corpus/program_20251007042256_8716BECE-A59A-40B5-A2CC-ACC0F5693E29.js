function joinTest() {
    var s = "";
    var a = [];
    for (let i6 = 0; i6 < 8; i6++) {
        a[i6] = [String.fromCharCode(97 + i6)];
    }
    for (i = 0; i < 8; i++) {
        for (let i25 = 0; i25 < 8; i25++) {
            const t8 = a[i];
            t8[1 + i25] = i25;
        }
    }
    for (i = 0; i < 8; i++) {
        s += a[i].join(",");
    }
    return s;
}
joinTest();
