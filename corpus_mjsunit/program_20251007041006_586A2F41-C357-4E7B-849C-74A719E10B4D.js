var log = "";
function f2(a3) {
    log += "o";
    return "(function outer() { 3; })";
}
function f7() {
    log += "O";
    function f9() {
        function f10(a11) {
            log += "m";
            throw "borborygmus";
        }
        function f15() {
            log += "M";
            function f17(a18) {
                log += "i";
                return "(function inner() { 1; })";
            }
            function f22() {
                log += "I";
                const v27 = { fileName: "inner", sourceIsLazy: true };
                let v29;
                try { v29 = evaluate("(function inner() { 2; })", v27); } catch (e) {}
                let v30;
                try { v30 = v29.toSource(); } catch (e) {}
                return v30;
            }
            try { withSourceHook(f17, f22); } catch (e) {}
            const v37 = { fileName: "middle", sourceIsLazy: true };
            let v39;
            try { v39 = evaluate("(function middle() { })", v37); } catch (e) {}
            try { v39.toSource(); } catch (e) {}
        }
        try { withSourceHook(f10, f15); } catch (e) {}
    }
    try { f9(); } catch (e) {}
    const v48 = { fileName: "outer", sourceIsLazy: true };
    let v50;
    try { v50 = evaluate("(function outer() { 4; })", v48); } catch (e) {}
    try { v50.toSource(); } catch (e) {}
}
try { withSourceHook(f2, f7); } catch (e) {}
