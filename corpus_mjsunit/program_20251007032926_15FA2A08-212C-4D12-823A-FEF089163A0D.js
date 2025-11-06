function one() {
}
function two() {
    arguments[0];
}
function three() {
    one("", "", "", "", "", "");
    two();
}
for (let i15 = 0; i15 < 10; ++i15) {
    three();
}
