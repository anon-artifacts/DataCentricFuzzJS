function f0() {
}
const defaultAsyncStackLimit = 60;
function recur(a4, a5) {
    if (a4 > 0) {
        function recur() {
            const v10 = a4 - 1;
            let v11;
            try { v11 = recur(v10, a5); } catch (e) {}
            return v11;
        }
        let v13;
        try { v13 = saveStack(a5); } catch (e) {}
        let v16;
        try { v16 = callFunctionWithAsyncStack(recur, v13, "Recurse"); } catch (e) {}
        return v16;
    }
    let v18;
    try { v18 = saveStack(a5); } catch (e) {}
    return v18;
}
function checkRecursion(a20, a21) {
    let v24;
    try { v24 = uneval(a20); } catch (e) {}
    const v27 = ("checkRecursion(" + v24) + ", ";
    let v28;
    try { v28 = uneval(a21); } catch (e) {}
    const v31 = (v27 + v28) + ")";
    try { f0(v31); } catch (e) {}
    try {
        let v33;
        try { v33 = recur(a20, a21); } catch (e) {}
        var stack = v33;
    } catch(e35) {
        const v37 = "" + e35;
        const v38 = /too much recursion/;
        try { v38.test(v37); } catch (e) {}
        return;
    }
    if (a21 == 0) {
        if ((a20 + 1) < defaultAsyncStackLimit) {
            a21 = defaultAsyncStackLimit + 1;
        } else {
            a21 = (a20 + 2) - (defaultAsyncStackLimit / 2);
        }
    }
    for (let i54 = 0;
        (() => {
            let v56;
            try { v56 = Math.min(a20, a21); } catch (e) {}
            return i54 < v56;
        })();
        i54++) {
        stack?.functionDisplayName;
        stack?.parent;
        stack = stack?.asyncParent;
    }
    if (a21 > a20) {
        stack?.functionDisplayName;
        stack?.asyncParent;
        stack = stack?.parent;
    } else {
    }
    if (a21 > (a20 + 1)) {
        stack?.functionDisplayName;
        stack?.asyncParent;
        stack = stack?.parent;
    } else {
    }
    if (a21 > (a20 + 2)) {
        stack?.functionDisplayName;
        stack?.asyncParent;
        stack?.parent;
    } else {
    }
}
try { checkRecursion(0, 0); } catch (e) {}
try { checkRecursion(1, 0); } catch (e) {}
try { checkRecursion(2, 0); } catch (e) {}
const v109 = defaultAsyncStackLimit - 10;
try { checkRecursion(v109, 0); } catch (e) {}
try { checkRecursion(defaultAsyncStackLimit, 0); } catch (e) {}
const v115 = defaultAsyncStackLimit + 10;
try { checkRecursion(v115, 0); } catch (e) {}
try { checkRecursion(0, 1); } catch (e) {}
try { checkRecursion(1, 1); } catch (e) {}
try { checkRecursion(2, 1); } catch (e) {}
try { checkRecursion(0, 2); } catch (e) {}
try { checkRecursion(1, 2); } catch (e) {}
try { checkRecursion(2, 2); } catch (e) {}
try { checkRecursion(0, 3); } catch (e) {}
try { checkRecursion(1, 3); } catch (e) {}
try { checkRecursion(2, 3); } catch (e) {}
const v146 = defaultAsyncStackLimit + 10;
const v148 = defaultAsyncStackLimit + 10;
try { checkRecursion(v146, v148); } catch (e) {}
const v151 = defaultAsyncStackLimit + 11;
const v153 = defaultAsyncStackLimit + 10;
try { checkRecursion(v151, v153); } catch (e) {}
const v156 = defaultAsyncStackLimit + 12;
const v158 = defaultAsyncStackLimit + 10;
try { checkRecursion(v156, v158); } catch (e) {}
