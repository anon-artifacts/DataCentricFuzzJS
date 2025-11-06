var A = { x: 1 };
var B = Object.create(A);
var C = {};
C.__proto__ = B;
function f() {
    for (let i10 = 0; i10 < 25; i10++) {
        C.x;
        i10 <= 20 ? 1 : 3;
        if (i10 === 20) {
            B.x = 3;
        }
    }
}
f();
