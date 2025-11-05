async function* gen1() {
    const v2 = () => {
    };
    let v3;
    try { v3 = new Promise(v2); } catch (e) {}
    const alwaysPending = v3;
    alwaysPending.then = "non-callable then";
    yield alwaysPending;
}
let v8;
try { v8 = gen(); } catch (e) {}
try { v8.next(); } catch (e) {}
