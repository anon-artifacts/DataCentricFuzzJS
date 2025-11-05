try {
    function f0() {
    }
    const INT32_MAX = (2 ** 31) - 1;
    for (const v8 of typedArrayConstructors) {
        const v9 = () => {
            let v10;
            try { v10 = new v8(INT32_MAX); } catch (e) {}
            return v10;
        };
        try { v9(); } catch (e) {}
        const v13 = () => {
            const v14 = v8?.BYTES_PER_ELEMENT;
            let v16;
            try { v16 = Math.log2(v14); } catch (e) {}
            const v17 = INT32_MAX >> v16;
            let v18;
            try { v18 = new v8(v17); } catch (e) {}
            return v18;
        };
        try { v13(); } catch (e) {}
    }
    for (const v20 of typedArrayConstructors) {
        const v21 = () => {
            const v22 = { length: INT32_MAX };
            let v23;
            try { v23 = new v20(v22); } catch (e) {}
            return v23;
        };
        try { v21(); } catch (e) {}
        const v26 = () => {
            const v27 = v20?.BYTES_PER_ELEMENT;
            let v29;
            try { v29 = Math.log2(v27); } catch (e) {}
            const v30 = INT32_MAX >> v29;
            const v31 = { length: v30 };
            let v32;
            try { v32 = new v20(v31); } catch (e) {}
            return v32;
        };
        try { v26(); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e40) {
}
