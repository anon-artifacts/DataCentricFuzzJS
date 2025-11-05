function* f() {
    try {
        let foo = 3;
        for (let i4 = 0; i4 < 50; i4++) {
            yield i4 + foo;
        }
    } catch(e12) {
    }
}
var it = f();
for (let i16 = 0; i16 < 40; i16++) {
    it.next();
}
it.return();
