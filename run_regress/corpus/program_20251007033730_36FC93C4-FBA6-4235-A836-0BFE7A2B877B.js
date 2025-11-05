function f0() {
    const v2 = { sameZoneAs: this };
    try { newGlobal(v2); } catch (e) {}
}
try { oomTest(f0); } catch (e) {}
