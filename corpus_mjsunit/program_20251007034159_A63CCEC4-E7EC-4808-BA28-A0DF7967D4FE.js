function f(a1) {
    for (let i3 = 0; i3 < 2; i3++) {
        try {
            var x = 1;
            Array(1);
            x = 2;
            Array(a1);
        } catch(e16) {
        }
    }
}
f(-1);
