function f(a1) {
    for (let i3 = 0; i3 < 2; i3++) {
        try {
            var x = 1;
            new String();
            x = 2;
            new String(a1);
        } catch(e15) {
        }
    }
}
f(Symbol());
