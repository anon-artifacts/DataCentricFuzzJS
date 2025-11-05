try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        const v4 = [,];
        const v6 = [,,];
        let v9;
        try { v9 = Array(1024); } catch (e) {}
        for (const v11 of [v4,v6,v9]) {
            let v12;
            try { v12 = new v2(v11); } catch (e) {}
            let typedArray = v12;
            typedArray?.length;
            v11?.length;
            let v17;
            try { v17 = isFloatConstructor(v2); } catch (e) {}
            const v20 = v17 ? NaN : 0;
            const v21 = v11?.length;
            let v22;
            try { v22 = Array(v21); } catch (e) {}
            let v23;
            try { v23 = v22.fill(v20); } catch (e) {}
            let expectedArray = v23;
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e31) {
}
