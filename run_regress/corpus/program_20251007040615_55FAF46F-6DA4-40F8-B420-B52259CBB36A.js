var count = 0;
function test1() {
    try {
        return [1,2,3];
    } finally {
        for (let i8 = 0; i8 < 20; i8++) {
            count++;
        }
    }
}
test1().toString();
function test2() {
    try {
        throw 3;
    } finally {
        for (let i22 = 0; i22 < 20; i22++) {
            count++;
        }
    }
}
try {
    test2();
} catch(e32) {
}
