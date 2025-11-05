function OptimizeTruncatingBinaryOp(a1) {
    a1(42, -2);
    a1(31, undefined);
    a1(-1, 2.1);
}
function f13(a14, a15) {
    return a14 >> a15;
}
OptimizeTruncatingBinaryOp(f13);
function f18(a19, a20) {
    return a19 >>> a20;
}
OptimizeTruncatingBinaryOp(f18);
function f23(a24, a25) {
    return a24 << a25;
}
OptimizeTruncatingBinaryOp(f23);
function f28(a29, a30) {
    return a29 & a30;
}
OptimizeTruncatingBinaryOp(f28);
function f33(a34, a35) {
    return a34 | a35;
}
OptimizeTruncatingBinaryOp(f33);
function f38(a39, a40) {
    return a39 ^ a40;
}
OptimizeTruncatingBinaryOp(f38);
