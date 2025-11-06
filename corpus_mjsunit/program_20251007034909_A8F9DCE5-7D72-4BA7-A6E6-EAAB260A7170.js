function m() {
    'use asm';
    function a(a2, a3) {
        return ((a2 = a2 | 0) + (a3 = a3 | 0)) | 0;
    }
    function b() {
        var x = 1;
        var y = 2;
        return a(x = y, y | 0) | 0;
    }
    return b;
}
const t12 = m();
let result = t12();
print(result == 3 ? "Pass" : "Fail");
