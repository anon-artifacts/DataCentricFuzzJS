try {
    function f0() {
    }
    let v2;
    try { v2 = newGlobal(); } catch (e) {}
    let g = v2;
    for (const v5 of typedArrayConstructors) {
        const v7 = `new ${v5?.name}([1, 2, 3, 4, 5]);`;
        let v8;
        try { v8 = g.eval(v7); } catch (e) {}
        let a = v8;
        for (const v10 of typedArrayConstructors) {
            let v11;
            try { v11 = new v10(a); } catch (e) {}
            let b = v11;
            let v14;
            try { v14 = Object.getPrototypeOf(b); } catch (e) {}
            v14?.constructor;
            const v16 = b?.buffer;
            let v17;
            try { v17 = Object.getPrototypeOf(v16); } catch (e) {}
            v17?.constructor;
            g?.ArrayBuffer;
        }
    }
    let called = false;
    const v24 = Symbol?.species;
    let v26;
    try { v26 = Object.getOwnPropertyDescriptor(ArrayBuffer, v24); } catch (e) {}
    let origSpecies = v26;
    const v31 = {
        get() {
            called = true;
            return g?.ArrayBuffer;
        },
    };
    let modSpecies = v31;
    for (const v33 of typedArrayConstructors) {
        const v39 = [1,2,3,4,5];
        let v40;
        try { v40 = new v33(v39); } catch (e) {}
        let a = v40;
        for (const v42 of typedArrayConstructors) {
            called = false;
            const v44 = Symbol?.species;
            try { Object.defineProperty(ArrayBuffer, v44, modSpecies); } catch (e) {}
            let v46;
            try { v46 = new v42(a); } catch (e) {}
            let b = v46;
            const v48 = Symbol?.species;
            try { Object.defineProperty(ArrayBuffer, v48, origSpecies); } catch (e) {}
            let v51;
            try { v51 = Object.getPrototypeOf(b); } catch (e) {}
            v51?.constructor;
            const v53 = b?.buffer;
            let v54;
            try { v54 = Object.getPrototypeOf(v53); } catch (e) {}
            v54?.constructor;
            g?.ArrayBuffer;
        }
    }
    g.otherArrayBuffer = ArrayBuffer;
    const v57 = `\nvar called = false;\nvar origSpecies = Object.getOwnPropertyDescriptor(ArrayBuffer, Symbol.species);\nvar modSpecies = {\n  get() {\n    called = true;\n    return otherArrayBuffer;\n  }\n};\n`;
    try { g.eval(v57); } catch (e) {}
    for (const v59 of typedArrayConstructors) {
        const v61 = `new ${v59?.name}([1, 2, 3, 4, 5]);`;
        let v62;
        try { v62 = g.eval(v61); } catch (e) {}
        let a = v62;
        for (const v64 of typedArrayConstructors) {
            g.called = false;
            const v66 = `Object.defineProperty(ArrayBuffer, Symbol.species, modSpecies);`;
            try { g.eval(v66); } catch (e) {}
            let v68;
            try { v68 = new v64(a); } catch (e) {}
            let b = v68;
            const v70 = `Object.defineProperty(ArrayBuffer, Symbol.species, origSpecies);`;
            try { g.eval(v70); } catch (e) {}
            g?.called;
            let v74;
            try { v74 = Object.getPrototypeOf(b); } catch (e) {}
            v74?.constructor;
            const v76 = b?.buffer;
            let v77;
            try { v77 = Object.getPrototypeOf(v76); } catch (e) {}
            v77?.constructor;
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e85) {
}
