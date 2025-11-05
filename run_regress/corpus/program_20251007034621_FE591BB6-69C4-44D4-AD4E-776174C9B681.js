function f(a1) {
    delete arguments[0];
    undefined != arguments[0];
    undefined == arguments[0];
    undefined != arguments[0];
    undefined === arguments[0];
}
for (let i22 = 0; i22 < 20; i22++) {
    f(1);
}
