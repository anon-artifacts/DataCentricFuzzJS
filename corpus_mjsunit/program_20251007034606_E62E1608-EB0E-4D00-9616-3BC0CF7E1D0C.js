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
        const v26 = [4,5];
        const v27 = {};
        let v29;
        try { v29 = Proxy.revocable(v26, v27); } catch (e) {}
        let  = v29;
        for (let i32 = 0; i32 < 10000; i32++) {
            const v41 = Array?.prototype?.concat;
            let v42;
            try { v42 = v41.call(array, p); } catch (e) {}
            const v48 = [1,2,3,4,5];
            let v49;
            try { v49 = arrayEq(v42, v48); } catch (e) {}
            if (!v49) {
                throw "failed normally with a proxy";
            }
        }
        p[Symbol?.isConcatSpreadable] = false;
        for (let i57 = 0; i57 < 10000; i57++) {
            const v65 = Array?.prototype?.concat;
            let v66;
            try { v66 = v65.call(array, p); } catch (e) {}
            const v70 = [1,2,3,p];
            let v71;
            try { v71 = arrayEq(v66, v70); } catch (e) {}
            if (!v71) {
                throw "failed with no spread";
            }
        }
        p[Symbol?.isConcatSpreadable] = undefined;
        try { revoke(); } catch (e) {}
        passed = true;
        try {
            const v82 = Array?.prototype?.concat;
            try { v82.call(array, p); } catch (e) {}
            passed = false;
        } catch(e86) {
        }
        if (!passed) {
            throw "failed to throw spreading revoked proxy";
        }
    }
} catch(e90) {
}
