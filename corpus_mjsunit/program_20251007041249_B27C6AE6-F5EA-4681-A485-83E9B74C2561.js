function g(a1) {
    for (let i3 = 0; i3 < 999; ++i3) {
        a1(0 / 0);
    }
}
function h(a14) {
    a14 < 1 ? 0 : Math.imul(a14 || 0);
}
g(h);
