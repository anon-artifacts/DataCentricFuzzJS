function f0() {
    arguments.length = 7;
    Array.prototype.slice.call(arguments);
}
f0();
