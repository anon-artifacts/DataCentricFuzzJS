function f0() {
    let r;
    function f3(a4) {
        const v11 = (-2147483648 + (a4 >>> 0)) != 0;
        let v13;
        try { v13 = a4(); } catch (e) {}
        v11 ? 0 : v13;
    }
    g = f3;
}
f0();
g(NaN);
g(2147483648);
