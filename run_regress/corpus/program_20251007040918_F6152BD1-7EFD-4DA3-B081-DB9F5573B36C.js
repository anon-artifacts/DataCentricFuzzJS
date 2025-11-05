function foo(a1) {
    return a1 * a1;
}
try { foo(1); } catch (e) {}
try { foo(2); } catch (e) {}
function bar(a8) {
    try { foo(a8); } catch (e) {}
}
const v10 = () => {
    const v12 = Symbol?.toPrimitive;
    let v13;
    try { v13 = bar(v12); } catch (e) {}
    return v13;
};
try { v10(); } catch (e) {}
