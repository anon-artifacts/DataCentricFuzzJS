var count = 0;
let v3;
try { v3 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v3) {
    function f6() {
        count++;
    }
    const v8 = { get: f6 };
    try { Object.defineProperty(__proto__, "__iterator__", v8); } catch (e) {}
} else {
    count = 7;
}
let v12;
try { v12 = globalPrototypeChainIsMutable(); } catch (e) {}
if (v12) {
    function f13() {
    }
    __proto__ = f13;
}
for (let i16 = 0; i16 < 7; ++i16) {
    for (const v23 in 6) {
    }
}
