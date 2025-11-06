function deopt(a1) {
}
function or_zero(a3) {
    return a3 | 0;
}
function multiply_one(a7) {
    return +a7;
}
function multiply_one_symbol() {
    return +Symbol();
}
try { multiply_one_symbol(); } catch (e) {}
or_zero(deopt(or_zero));
multiply_one(deopt(multiply_one));
