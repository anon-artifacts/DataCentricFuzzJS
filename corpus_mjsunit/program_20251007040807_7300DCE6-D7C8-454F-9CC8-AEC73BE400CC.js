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
        let concat = Array?.prototype?.concat;
        try { noInline(concat); } catch (e) {}
        let array = [1,2,3];
        function f30(a31, a32) {
            return a31?.[a32];
        }
        const v34 = { get: f30 };
        let v36;
        try { v36 = Proxy.revocable(array, v34); } catch (e) {}
        let  = v36;
        try { concat.call(p, p); } catch (e) {}
        for (let i41 = 0; i41 < 100000; i41++) {
            let v47;
            try { v47 = concat.call(p, p); } catch (e) {}
            const v54 = [1,2,3,1,2,3];
            let v55;
            try { v55 = arrayEq(v47, v54); } catch (e) {}
            if (!v55) {
                throw "bad";
            }
        }
        try { revoke(); } catch (e) {}
        failed = true;
        try {
            try { concat.call(p, p); } catch (e) {}
        } catch(e63) {
            failed = false;
        }
        if (failed) {
            throw "bad";
        }
    }
} catch(e68) {
}
