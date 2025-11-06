function opt(a1) {
    const v3 = new Set();
    let iterator = v3.values();
    iterator.x = 0;
    let arr = [iterator,iterator];
    if (a1) {
        return arr.slice();
    }
}
opt(false);
opt(false);
let res = opt(true);
let a = res[0];
let b = res[1];
a === b;
a.x = 7;
b.x;
