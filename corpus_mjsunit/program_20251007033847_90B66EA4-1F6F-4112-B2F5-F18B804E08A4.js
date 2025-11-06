var dispatcher = {};
dispatcher.func = C;
function A() {
    B(10, 11);
}
function B(a9, a10) {
    a9 = 0;
    a10 = 0;
    dispatcher.func.apply(this, arguments);
    arguments.length;
    arguments[0];
    arguments[1];
}
function C(a27, a28) {
    arguments.length;
    arguments[0];
    arguments[1];
}
A();
A();
A();
