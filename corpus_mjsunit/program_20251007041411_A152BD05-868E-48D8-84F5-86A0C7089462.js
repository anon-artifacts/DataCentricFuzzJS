function f0() {
    function f(a2) {
        function ifTrue() {
        }
        function ifFalse() {
        }
        if ((generation % 2) == 0) {
            let v10;
            try { v10 = ifTrue(); } catch (e) {}
            return v10;
        }
        let v11;
        try { v11 = ifFalse(); } catch (e) {}
        return v11;
    }
    let v12;
    try { v12 = f.toSource(); } catch (e) {}
    return v12 + "; f()";
}
let v15;
try { v15 = f0(); } catch (e) {}
var test = v15;
const v19 = { assertEqBytecode: true, assertEqResult: true };
try { evalWithCache(test, v19); } catch (e) {}
