function f0() {
    try { gcslice(0); } catch (e) {}
}
try { oomTest(f0); } catch (e) {}
