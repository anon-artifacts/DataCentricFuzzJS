function check(a1, a2) {
    a1();
}
var x = 17;
function generic_load() {
    return x;
}
check(generic_load, 17);
function generic_store() {
    return x = 13;
}
check(generic_store, 13);
