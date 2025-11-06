function f(a1) {
    const v4 = ~(a1 = +"NaN");
    const t2 = /I/;
    return t2(v4);
}
h = f;
for (let i9 = 0; i9 < 3; i9++) {
    try {
        h();
    } catch(e17) {
    }
}
