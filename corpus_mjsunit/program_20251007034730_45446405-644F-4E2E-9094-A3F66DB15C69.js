const v1 = Object.prototype;
Object.defineProperty(v1, "0", { configurable: true });
const t1 = Object.prototype;
delete t1[0];
function makeArray() {
    var arr = [];
    for (let i13 = 0; i13 < 10; i13++) {
        arr.push(true);
    }
    return arr;
}
makeArray();
