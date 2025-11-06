const v5 = new Set(["a","b","c"]);
var set = v5;
var log = "";
for (let i10 = 0; i10 < 2; i10++) {
    for (const v16 of set) {
        log += v16;
    }
    log += ";";
}
