function f0() {
    delete arguments[1];
}
f0(1, 2, 3);
