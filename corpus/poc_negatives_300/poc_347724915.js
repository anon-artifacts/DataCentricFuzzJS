for (let v0 = 0; v0 < 83; v0++) {
    function F1(a3, a4, a5, a6) {
        if (!new.target) { throw 'must be called with new'; }
        const v8 = ("number").source;
        function F9(a11, a12, ...a13) {
            if (!new.target) { throw 'must be called with new'; }
            a13[0];
            try {
                const v15 = new F9(a12, ...a13, F9);
            } catch(e16) {
            }
        }
        const v17 = new F9(F9, v8, v8);
    }
    const v18 = new F1();
}
//d8 --expose-gc --omit-quit --future --harmony --assert-types --harmony-struct --allow-natives-syntax --interrupt-budget=1000 --fuzzing program_20240616125405_DD3686A2-ED9F-413D-AAE3-0D69F7A03569_deterministic.js