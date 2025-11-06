var AB = ArrayBuffer;
function f() {
    let v4;
    try { v4 = new AB(256); } catch (e) {}
    return v4;
}
try { f(); } catch (e) {}
try { oomTest(f); } catch (e) {}
