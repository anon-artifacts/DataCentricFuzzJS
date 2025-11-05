for (const v1 of []) {
    function f2() {
        return Object.keys(v1);
    }
}
const v6 = Array.prototype;
function f8(a9) {
    return arguments;
}
const v12 = [f8(1)];
var result = 0;
for (let i16 = 0; i16 < 1000000; ++i16) {
    result += v12[i16 % v12.length].length;
}
const v26 = v6?.shift;
try { v26.call(); } catch (e) {}
