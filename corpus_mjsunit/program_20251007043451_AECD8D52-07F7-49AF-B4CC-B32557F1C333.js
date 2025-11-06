function f0(a1) {
    arguments[2] = arguments;
    return f0;
}
f0(1, 2, 3);
