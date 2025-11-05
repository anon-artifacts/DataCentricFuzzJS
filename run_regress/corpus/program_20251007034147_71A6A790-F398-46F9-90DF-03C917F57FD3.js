function f(a1) {
    return a1 + 1;
}
f(1);
f(0.5);
function normal() {
}
function eager() {
}
function h(a13) {
    return a13 + 1;
}
function g(a17) {
    normal();
    return h(a17) + 1;
}
normal();
for (let i24 = 0; i24 < 10; i24++) {
    eager();
    g(i24);
    i24 + 2;
}
try {
} catch(e36) {
}
try {
    const v38 = { trigger: null };
    var ion = { warmup: v38 };
} catch(e43) {
}
try {
} catch(e46) {
}
