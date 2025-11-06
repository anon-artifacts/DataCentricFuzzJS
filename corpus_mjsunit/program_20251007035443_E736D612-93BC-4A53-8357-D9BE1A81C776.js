try {
    function arrayEq(a1, a2) {
        if (a1?.length !== a2?.length) {
            return false;
        }
        for (let i8 = 0; i8 < a1?.length; i8++) {
            if (a1?.[i8] !== a2?.[i8]) {
                return false;
            }
        }
        return true;
    }
    {
        let array = [1,2,3];
        function f24(a25, a26) {
            return a25?.[a26];
        }
        const v28 = { get: f24 };
        let v30;
        try { v30 = Proxy.revocable(array, v28); } catch (e) {}
        let  = v30;
        for (let i33 = 0; i33 < 100000; i33++) {
            const v42 = Array?.prototype?.concat;
            let v43;
            try { v43 = v42.call(p, p); } catch (e) {}
            const v50 = [1,2,3,1,2,3];
            let v51;
            try { v51 = arrayEq(v43, v50); } catch (e) {}
            if (!v51) {
                throw "failed normally with a proxy";
            }
        }
        p[Symbol?.isConcatSpreadable] = false;
        for (let i59 = 0; i59 < 100000; i59++) {
            const v67 = Array?.prototype?.concat;
            let v68;
            try { v68 = v67.call(p, p); } catch (e) {}
            const v69 = [p,p];
            let v70;
            try { v70 = arrayEq(v68, v69); } catch (e) {}
            if (!v70) {
                throw "failed with no spread";
            }
        }
        p[Symbol?.isConcatSpreadable] = undefined;
        try { revoke(); } catch (e) {}
        passed = true;
        try {
            const v79 = [];
            const v82 = Array?.prototype?.concat;
            try { v82.call(p, v79); } catch (e) {}
            passed = false;
        } catch(e86) {
        }
        if (!passed) {
            throw "failed to throw spreading revoked proxy";
        }
    }
} catch(e90) {
}
