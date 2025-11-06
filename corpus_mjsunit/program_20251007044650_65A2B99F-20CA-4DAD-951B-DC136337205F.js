function X() {
}
function f1() {
    return 7;
}
const t5 = X.prototype;
t5.valueOf = f1;
function f(a5, a6) {
    return a5 % a6;
}
const v10 = new X();
f(8, v10);
