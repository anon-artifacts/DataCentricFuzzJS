function TestMapConstructorEntrySideEffect(a1) {
    const originalPrototypeSet = a1?.prototype?.set;
    const k1 = {};
    const k2 = {};
    let callCount = 0;
    const v13 = [,1];
    const v19 = {
        get() {
            const v16 = () => {
                callCount++;
            };
            const t3 = a1.prototype;
            t3.set = v16;
            return k1;
        },
    };
    const input = [Object.defineProperty(v13, "0", v19),[k2,2]];
    let v26;
    try { v26 = new a1(input); } catch (e) {}
    const col = v26;
    if ("size" in col) {
        col.size;
    }
    col.has(k1);
    col.has(k2);
    const v35 = new a1(input);
    const col2 = v35;
    if ("size" in col) {
        col2.size;
    }
    col2.has(k1);
    col2.has(k2);
    const t30 = a1.prototype;
    t30.set = originalPrototypeSet;
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
