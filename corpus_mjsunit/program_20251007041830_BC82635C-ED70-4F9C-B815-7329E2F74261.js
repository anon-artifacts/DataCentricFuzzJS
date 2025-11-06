var global;
function TestSetWithCustomIterator(a3) {
    const k1 = {};
    const k2 = {};
    const entries = [k1];
    let callCount = 0;
    const v12 = () => {
        const v13 = () => {
            const v16 = callCount++ === 0;
            const v18 = { value: k2, done: false };
            return v16 ? v18 : { done: true };
        };
        return { next: v13 };
    };
    entries[Symbol.iterator] = v12;
    let v25;
    try { v25 = new a3(entries); } catch (e) {}
    const set = v25;
    try { set.has(k1); } catch (e) {}
    try { set.has(k2); } catch (e) {}
    global = entries;
}
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator(Set);
TestSetWithCustomIterator();
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator(WeakSet);
TestSetWithCustomIterator();
function TestMapWithCustomIterator(a43) {
    const k1 = {};
    const k2 = {};
    const entries = [[k1,1]];
    let callCount = 0;
    const v54 = () => {
        const v55 = () => {
            const v58 = callCount++ === 0;
            const v60 = [k2,2];
            const v62 = { value: v60, done: false };
            return v58 ? v62 : { done: true };
        };
        return { next: v55 };
    };
    entries[Symbol.iterator] = v54;
    let v69;
    try { v69 = new a43(entries); } catch (e) {}
    const map = v69;
    try { map.has(k1); } catch (e) {}
    try { map.get(k2); } catch (e) {}
    global = entries;
}
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator(Map);
TestMapWithCustomIterator();
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator(WeakMap);
TestMapWithCustomIterator();
