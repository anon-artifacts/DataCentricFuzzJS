var a = [1,2,3,4];
var s = "";
for (const v8 of a) {
    if ((s += v8).length === 2) {
        a.unshift("x");
    }
}
