function TestSetWithCustomIterator(a1) {
    const k1 = {};
    const k2 = {};
    let callCount = 0;
    const v8 = () => {
        const v9 = () => {
            const v12 = callCount++ === 0;
            const v14 = { value: k2, done: false };
            return v12 ? v14 : { done: true };
        };
        return { next: v9 };
    };
    const t12 = Array?.prototype;
    t12[Symbol?.iterator] = v8;
    const entries = [k1];
    let v25;
    try { v25 = new a1(entries); } catch (e) {}
    const set = v25;
    try { set.has(k1); } catch (e) {}
    try { set.has(k2); } catch (e) {}
}
try { TestSetWithCustomIterator(Set); } catch (e) {}
try { TestSetWithCustomIterator(Set); } catch (e) {}
try { TestSetWithCustomIterator(Set); } catch (e) {}
try { TestSetWithCustomIterator(Set); } catch (e) {}
try { TestSetWithCustomIterator(); } catch (e) {}
try { TestSetWithCustomIterator(WeakSet); } catch (e) {}
try { TestSetWithCustomIterator(WeakSet); } catch (e) {}
try { TestSetWithCustomIterator(WeakSet); } catch (e) {}
try { TestSetWithCustomIterator(WeakSet); } catch (e) {}
try { TestSetWithCustomIterator(); } catch (e) {}
function TestMapWithCustomIterator(a43) {
    const k1 = {};
    const k2 = {};
    let callCount = 0;
    const v50 = () => {
        const v51 = () => {
            const v54 = callCount++ === 0;
            const v56 = [k2,2];
            const v58 = { value: v56, done: false };
            return v54 ? v58 : { done: true };
        };
        return { next: v51 };
    };
    const t44 = Array?.prototype;
    t44[Symbol?.iterator] = v50;
    const entries = [[k1,1]];
    let v71;
    try { v71 = new a43(entries); } catch (e) {}
    const map = v71;
    try { map.has(k1); } catch (e) {}
    try { map.get(k2); } catch (e) {}
}
try { TestMapWithCustomIterator(Map); } catch (e) {}
try { TestMapWithCustomIterator(Map); } catch (e) {}
try { TestMapWithCustomIterator(Map); } catch (e) {}
try { TestMapWithCustomIterator(Map); } catch (e) {}
try { TestMapWithCustomIterator(); } catch (e) {}
try { TestMapWithCustomIterator(WeakMap); } catch (e) {}
try { TestMapWithCustomIterator(WeakMap); } catch (e) {}
try { TestMapWithCustomIterator(WeakMap); } catch (e) {}
try { TestMapWithCustomIterator(WeakMap); } catch (e) {}
try { TestMapWithCustomIterator(); } catch (e) {}
