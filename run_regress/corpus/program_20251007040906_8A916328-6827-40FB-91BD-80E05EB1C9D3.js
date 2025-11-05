function TestMapConstructorEntrySideEffect(a1) {
    const k1 = {};
    const k2 = {};
    const k3 = {};
    let callCount = 0;
    const v12 = [,1];
    const v17 = {
        get() {
            input.length = 2;
            return k1;
        },
    };
    const v19 = Object.defineProperty(v12, "0", v17);
    const v21 = [k2,2];
    const v24 = [,3];
    const v28 = {
        get() {
            callCount++;
            return k3;
        },
    };
    const input = [v19,v21,Object.defineProperty(v24, "0", v28)];
    let v32;
    try { v32 = new a1(input); } catch (e) {}
    const col = v32;
    if ("size" in col) {
        col.size;
    }
    col.get(k1);
    col.get(k2);
    col.has(k3);
}
TestMapConstructorEntrySideEffect(Map);
TestMapConstructorEntrySideEffect(Map);
TestMapConstructorEntrySideEffect(Map);
TestMapConstructorEntrySideEffect(Map);
try { TestMapConstructorEntrySideEffect(); } catch (e) {}
TestMapConstructorEntrySideEffect(WeakMap);
TestMapConstructorEntrySideEffect(WeakMap);
TestMapConstructorEntrySideEffect(WeakMap);
TestMapConstructorEntrySideEffect(WeakMap);
try { TestMapConstructorEntrySideEffect(); } catch (e) {}
