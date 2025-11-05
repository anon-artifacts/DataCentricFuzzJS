function broken(a1) {
    return Math.floor(a1 / 65536);
}
function toUnsigned(a7) {
    return a7 >>> 0;
}
function outer(a11) {
    return broken(toUnsigned(a11));
}
for (let i15 = 0; i15 < 5; i15++) {
    outer(0);
}
broken(2147483648);
outer(2147483648);
