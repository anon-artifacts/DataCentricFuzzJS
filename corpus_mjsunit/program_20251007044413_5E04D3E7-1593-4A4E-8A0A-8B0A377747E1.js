const v0 = () => {
    let x = 0;
    try {
        for (let i4 = 0; i4 < 100; i4++) {
            if (i4 == 99) {
                throw "foo";
            }
            x += i4;
        }
    } catch(e13) {
        x = 0;
    }
    return x;
};
try { oomTest(v0); } catch (e) {}
