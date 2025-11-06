function* f0() {
    for (let i3 = this.length; --i3 >= 0;) {
        yield this[i3];
    }
}
const t5 = Array.prototype;
t5[Symbol.iterator] = f0;
var s = "";
for (const v23 of ["a","b","c","d"]) {
    s += v23;
}
