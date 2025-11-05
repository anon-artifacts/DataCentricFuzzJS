function f0() {
    'use asm';
    function brbool(a2, a3, a4) {
        a2 = a2 | 0;
        a3 = a3 | 0;
        a4 = a4 | 0;
        var d = 0;
        var e = 0;
        if ((d & (e = ((d = (a2 | 0) == (a3 | 0)) | 0) == (a4 | 0))) | 0) {
            return 1;
        }
        return 2;
    }
    return brbool;
}
let test = f0();
if ((test(1, 1, 1) == 1) && (test(1, 2, 3) == 2)) {
    print("PASS");
} else {
    print("FAIL");
}
