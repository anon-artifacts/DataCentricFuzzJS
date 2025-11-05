function test0(a1) {
    return (2147483648 - Math.max(1.1, -(((2 << (-a1 | a1)) - 3) | 0))) | 0;
}
test0(1.6);
test0(437348122.9);
function test1(a25) {
    return (2147483648 + Math.min(a25, 0)) | 0;
}
test1(2.1);
-2147483648;
test1(-0.1);
