function NonConstHasInstance() {
    const v1 = () => {
        return true;
    };
    const v4 = Symbol?.hasInstance;
    var C = { [v4]: v1 };
    function f() {
        return {} instanceof C;
    }
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    const v13 = () => {
        return false;
    };
    C[Symbol?.hasInstance] = v13;
    try { f(); } catch (e) {}
}
try { NonConstHasInstance(); } catch (e) {}
function NumberHasInstance() {
    const v21 = Symbol?.hasInstance;
    var C = { [v21]: 0.1 };
    function f(a25, a26) {
        if (a25) {
            return {} instanceof a26;
        }
        return false;
    }
    function g(a31) {
        let v32;
        try { v32 = f(a31, C); } catch (e) {}
        return v32;
    }
    try { f(true, Number); } catch (e) {}
    try { f(true, Number); } catch (e) {}
    try { g(false); } catch (e) {}
    try { g(false); } catch (e) {}
    const v42 = () => {
        let v44;
        try { v44 = g(true); } catch (e) {}
        return v44;
    };
    try { v42(); } catch (e) {}
}
try { NumberHasInstance(); } catch (e) {}
function NonFunctionHasInstance() {
    const v48 = {};
    const v50 = Symbol?.hasInstance;
    var C = { [v50]: v48 };
    function f(a54, a55) {
        if (a54) {
            return {} instanceof a55;
        }
        return false;
    }
    function g(a60) {
        let v61;
        try { v61 = f(a60, C); } catch (e) {}
        return v61;
    }
    try { f(true, Number); } catch (e) {}
    try { f(true, Number); } catch (e) {}
    try { g(false); } catch (e) {}
    try { g(false); } catch (e) {}
    const v71 = () => {
        let v73;
        try { v73 = g(true); } catch (e) {}
        return v73;
    };
    try { v71(); } catch (e) {}
}
try { NonFunctionHasInstance(); } catch (e) {}
function NonConstHasInstanceProto() {
    const v78 = Symbol?.hasInstance;
    const v81 = {
        [v78]() {
            return true;
        },
    };
    var B = v81;
    var C = { __proto__: B };
    function f() {
        return {} instanceof C;
    }
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    const v91 = () => {
        return false;
    };
    B[Symbol?.hasInstance] = v91;
    try { f(); } catch (e) {}
}
try { NonConstHasInstanceProto(); } catch (e) {}
function HasInstanceOverwriteOnProto() {
    const v97 = () => {
        return false;
    };
    const v100 = Symbol?.hasInstance;
    var A = { [v100]: v97 };
    var B = { __proto__: A };
    var C = { __proto__: B };
    function f() {
        return {} instanceof C;
    }
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    try { f(); } catch (e) {}
    const v113 = () => {
        return true;
    };
    B[Symbol?.hasInstance] = v113;
    try { f(); } catch (e) {}
}
try { HasInstanceOverwriteOnProto(); } catch (e) {}
