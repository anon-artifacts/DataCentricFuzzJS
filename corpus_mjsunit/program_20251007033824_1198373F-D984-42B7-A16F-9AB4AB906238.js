function always_false() {
}
function test() {
    return always_false() ? 0 : 1;
}
test();
