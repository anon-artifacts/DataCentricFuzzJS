function f(a1, a2) {
    a1(f);
}
function g(a6) {
    a6.arguments[1];
    const t4 = a6.arguments;
    t4[1] = "bye";
    a6.arguments[1];
}
function f2(a16, a17) {
    a16(f2);
}
function g2(a22) {
    a22.arguments[1];
    const t13 = a22.arguments;
    t13[1] = "bye";
    a22.arguments[1];
}
f(g, "hello");
f2(g2, "hello");
