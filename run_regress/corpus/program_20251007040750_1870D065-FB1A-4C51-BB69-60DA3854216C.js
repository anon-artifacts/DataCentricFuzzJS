function f(a1) {
    arguments[0];
    Object.defineProperty(arguments, 0, { value: 23, writable: true, configurable: true });
    arguments[0];
    a1 = 12;
    arguments[0];
    Object.defineProperty(arguments, 0, { value: 9, writable: false, configurable: false });
    arguments[0];
    a1 = 4;
    arguments[0];
}
f(1);
