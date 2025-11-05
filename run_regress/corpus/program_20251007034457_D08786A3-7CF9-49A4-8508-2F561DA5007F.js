try {
    let v1;
    try { v1 = newGlobal(); } catch (e) {}
    const global = v1;
    const OtherPromise = global?.Promise;
    class C5 extends OtherPromise {
    }
    const v7 = () => {
    };
    let v8;
    try { v8 = new C5(v7); } catch (e) {}
    v8 instanceof OtherPromise;
    const v11 = {};
    let v12;
    try { v12 = C5.resolve(v11); } catch (e) {}
    v12 instanceof OtherPromise;
    const v15 = {};
    let v16;
    try { v16 = C5.reject(v15); } catch (e) {}
    v16 instanceof OtherPromise;
    const v19 = () => {
    };
    const v20 = () => {
    };
    const v21 = {};
    let v22;
    try { v22 = C5.resolve(v21); } catch (e) {}
    let v23;
    try { v23 = v22.then(v19, v20); } catch (e) {}
    v23 instanceof OtherPromise;
} catch(e25) {
}
