function f(a1) {
    try { bailout(); } catch (e) {}
    arguments?.length;
    arguments?.[0];
    arguments?.[1];
}
for (let i15 = 0; i15 < 100; ++i15) {
    function f21() {
        try { f.call(1, "", 0); } catch (e) {}
    }
    f21();
}
