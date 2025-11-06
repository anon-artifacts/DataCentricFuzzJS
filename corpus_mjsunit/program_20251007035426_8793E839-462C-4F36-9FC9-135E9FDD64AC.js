function TestMapConstructorEntrySideEffect(a1) {
    const k1 = {};
    const k2 = {};
    const k3 = {};
    const v10 = [,1];
    const v21 = {
        get() {
            const v15 = () => {
                return [k3,3];
            };
            const v18 = { get: v15 };
            try { Object.defineProperty(input, "1", v18); } catch (e) {}
            return k1;
        },
    };
    let v23;
    try { v23 = Object.defineProperty(v10, "0", v21); } catch (e) {}
    const input = [v23,[k2,2]];
    let v28;
    try { v28 = new a1(input); } catch (e) {}
    const col = v28;
    if ("size" in col) {
        col?.size;
    }
    try { col.has(k1); } catch (e) {}
    try { col.has(k2); } catch (e) {}
    try { col.has(k3); } catch (e) {}
}
try { TestMapConstructorEntrySideEffect(Map); } catch (e) {}
try { TestMapConstructorEntrySideEffect(Map); } catch (e) {}
try { TestMapConstructorEntrySideEffect(Map); } catch (e) {}
try { TestMapConstructorEntrySideEffect(Map); } catch (e) {}
try { TestMapConstructorEntrySideEffect(); } catch (e) {}
try { TestMapConstructorEntrySideEffect(WeakMap); } catch (e) {}
try { TestMapConstructorEntrySideEffect(WeakMap); } catch (e) {}
try { TestMapConstructorEntrySideEffect(WeakMap); } catch (e) {}
try { TestMapConstructorEntrySideEffect(WeakMap); } catch (e) {}
try { TestMapConstructorEntrySideEffect(); } catch (e) {}
