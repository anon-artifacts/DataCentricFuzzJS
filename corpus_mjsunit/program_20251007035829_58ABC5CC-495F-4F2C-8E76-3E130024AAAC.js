function f0() {
    for (const v3 of Int8Array.prototype) {
        throw "FAIL";
    }
}
try { f0(); } catch (e) {}
