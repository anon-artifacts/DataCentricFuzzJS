try {
    function f0() {
    }
    const origIterator = Array?.prototype?.[Symbol?.iterator];
    function* f7() {
        let v9;
        try { v9 = origIterator.call(this); } catch (e) {}
        for (const v10 of v9) {
            yield v10 * 5;
        }
    }
    const modifiedIterator = f7;
    for (const v16 of anyTypedArrayConstructors) {
        const v17 = [];
        const v19 = [1];
        const v22 = [2,3];
        const v26 = [4,5,6];
        const v27 = (a28, a29) => {
            return a29 % 24;
        };
        let v34;
        try { v34 = Array(1024); } catch (e) {}
        let v35;
        try { v35 = v34.fill(0); } catch (e) {}
        let v36;
        try { v36 = v35.map(v27); } catch (e) {}
        for (const v38 of [v17,v19,v22,v26,v36]) {
            const t27 = Array?.prototype;
            t27[Symbol?.iterator] = modifiedIterator;
            let typedArray;
            try {
                let v43;
                try { v43 = new v16(v38); } catch (e) {}
                typedArray = v43;
            } finally {
                const t35 = Array?.prototype;
                t35[Symbol?.iterator] = origIterator;
            }
            typedArray?.length;
            v38?.length;
            const v48 = (a49) => {
                return a49 * 5;
            };
            try { v38.map(v48); } catch (e) {}
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e59) {
}
