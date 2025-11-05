x = this;
function uiktzz() {
}
const t3 = Object.prototype;
t3["uiktzz"] = uiktzz;
function test() {
    for (exhxkm = 0; exhxkm < 3; ++exhxkm) {
        if (exhxkm == 1) {
            delete x.uiktzz;
        } else {
            uiktzz++;
        }
    }
    return x;
}
test();
test();
test();
test();
print(uiktzz);
print(this.x.uiktzz);
