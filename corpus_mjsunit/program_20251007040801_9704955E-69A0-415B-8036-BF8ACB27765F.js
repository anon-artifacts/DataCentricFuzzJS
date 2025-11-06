function f(a1) {
    try { new Int32Array(a1); } catch (e) {}
}
try { f(0); } catch (e) {}
const v6 = () => {
    let v8;
    try { v8 = f(2147483647); } catch (e) {}
    return v8;
};
try { oomTest(v6); } catch (e) {}
