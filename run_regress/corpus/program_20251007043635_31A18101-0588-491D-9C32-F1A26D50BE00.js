function f0() {
    return 1e+300;
}
try { oomTest(f0); } catch (e) {}
