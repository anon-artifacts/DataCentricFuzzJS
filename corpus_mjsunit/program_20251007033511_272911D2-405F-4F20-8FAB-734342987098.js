function f1() {
    return 0;
}
this.__defineGetter__("x", f1);
function store_x() {
    x = 23;
}
store_x();
store_x();
store_x();
function f16() {
    return 0;
}
this.__defineGetter__("y", f16);
function store_y() {
    y = 23;
}
store_y();
store_y();
store_y();
