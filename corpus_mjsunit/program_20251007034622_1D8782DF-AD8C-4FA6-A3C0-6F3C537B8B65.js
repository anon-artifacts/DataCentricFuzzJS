try {
    function f0() {
    }
    const v3 = [,[]];
    const v5 = [[]];
    const v8 = ["x",{}];
    const v10 = ["x"];
    const v13 = ["x",{}];
    const v15 = ["x"];
    const v16 = [];
    const v18 = ["x"];
    const v19 = [];
    const v20 = [];
    const v21 = [];
    const v24 = ["x",0];
    const v26 = [{}];
    const v27 = {
        apply: v3,
        construct: v5,
        defineProperty: v8,
        deleteProperty: v10,
        get: v13,
        getOwnPropertyDescriptor: v15,
        getPrototypeOf: v16,
        has: v18,
        isExtensible: v19,
        ownKeys: v20,
        preventExtensions: v21,
        set: v24,
        setPrototypeOf: v26,
    };
    var methodInfo = v27;
    let v30;
    try { v30 = Reflect.ownKeys(Reflect); } catch (e) {}
    for (const v31 of v30) {
        if (v31 !== "parse") {
            v31 in methodInfo;
        }
    }
    let v37;
    try { v37 = Object.keys(methodInfo); } catch (e) {}
    for (const v38 of v37) {
        var args = methodInfo?.[v38];
        Reflect?.[v38];
        for (const v44 of SOME_PRIMITIVE_VALUES) {
            const v45 = () => {
                let v46;
                try { v46 = Reflect[v38](v44, ...args); } catch (e) {}
                return v46;
            };
            try { v45(); } catch (e) {}
        }
    }
    try { f0(0, 0); } catch (e) {}
} catch(e51) {
}
