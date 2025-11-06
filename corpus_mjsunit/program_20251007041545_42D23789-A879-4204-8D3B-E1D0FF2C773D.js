var a = [1,2,3];
a.slow = true;
var s = "";
for (const v8 of a) {
    for (const v9 of a) {
        s += (("" + v8) + v9) + ",";
    }
}
