try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        const v3 = () => {
            let v4;
            try { v4 = v2(); } catch (e) {}
            return v4;
        };
        try { v3(); } catch (e) {}
        const v7 = () => {
            let v9;
            try { v9 = v2(1); } catch (e) {}
            return v9;
        };
        try { v7(); } catch (e) {}
        const v11 = () => {
            let v13;
            try { v13 = v2.call(null); } catch (e) {}
            return v13;
        };
        try { v11(); } catch (e) {}
        const v15 = () => {
            const v17 = [];
            let v18;
            try { v18 = v2.apply(null, v17); } catch (e) {}
            return v18;
        };
        try { v15(); } catch (e) {}
        const v20 = () => {
            const v22 = [];
            let v24;
            try { v24 = Reflect.apply(v2, null, v22); } catch (e) {}
            return v24;
        };
        try { v20(); } catch (e) {}
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e32) {
}
