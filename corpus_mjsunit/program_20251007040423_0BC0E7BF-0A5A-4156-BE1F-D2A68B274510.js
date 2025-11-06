function fastaRandom(a1, a2) {
    const v5 = new Array(5);
    var line = v5;
    while (a1 > 0) {
        if (a1 < line.length) {
            const v11 = new Array(a1);
            line = v11;
        }
        line[0] = a1;
        a1--;
    }
}
print("---BEGIN 1");
fastaRandom(6, null);
print("---BEGIN 2");
fastaRandom(6, null);
print("---END");
