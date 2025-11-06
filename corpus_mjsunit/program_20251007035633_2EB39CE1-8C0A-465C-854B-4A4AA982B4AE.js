try {
    function f0() {
    }
    let passed = false;
    let obj = { foo: true };
    function f6() {
    }
    let C = f6;
    const v9 = Symbol.hasInstance;
    function f10(a11) {
        passed = a11.foo;
        return false;
    }
    Object.defineProperty(C, v9, { value: f10 });
    obj instanceof C;
    {
        const v20 = Symbol.hasInstance;
        const v24 = {
            [v20](a22) {
                return true;
            },
        };
        let obj = v24;
        let whatevs = {};
        whatevs instanceof obj;
    }
    {
        function zzzz() {
        }
        const v31 = new zzzz();
        let xxxx = v31;
        xxxx instanceof zzzz;
        Symbol.hasInstance;
        zzzz[zzzz](xxxx);
    }
    const nonCallables = [1,,null,"nope"];
    for (const v44 of nonCallables) {
        v44 instanceof Function;
        v44 instanceof Object;
    }
    const v50 = () => {
        function foo() {
        }
        let obj = {};
        foo instanceof obj;
    };
    try { v50(); } catch (e) {}
    const v57 = Symbol.hasInstance;
    const v61 = {
        [v57](a59) {
            return true;
        },
    };
    let o = v61;
    1 instanceof o;
    for (const v66 of nonCallables) {
        const v68 = Function.prototype;
        Symbol.hasInstance;
        v68[v68].call(v66, Object);
    }
    const v74 = () => {
        return 1;
    };
    const v76 = Function.prototype;
    Symbol.hasInstance;
    v76[v76].call(Function, v74);
    const v81 = Function.prototype;
    Symbol.hasInstance;
    v81[v81].call(Function, Object);
    const v87 = Function.prototype;
    Symbol.hasInstance;
    v87[v87].call(Function, null);
    const v93 = Function.prototype;
    Symbol.hasInstance;
    v93[v93].call(Function, Array);
    const v98 = Function.prototype;
    Symbol.hasInstance;
    v98[v98].call(Object, Array);
    const v103 = Function.prototype;
    Symbol.hasInstance;
    v103[v103].call(Array, Function);
    const v108 = {};
    const v109 = Function.prototype;
    Symbol.hasInstance;
    v109[v109].call(v108, Function);
    const v114 = Function.prototype;
    Symbol.hasInstance;
    v114[v114].call();
    const v119 = {};
    const v120 = Function.prototype;
    Symbol.hasInstance;
    v120[v120].call(v119);
    function f125() {
    }
    let bindme = { x: f125 };
    const t95 = bindme.x;
    const v129 = new t95();
    let instance = v129;
    let xOuter = bindme.x;
    let bound = xOuter.bind(bindme);
    let doubleBound = bound.bind(bindme);
    let tripleBound = bound.bind(doubleBound);
    const v139 = Function.prototype;
    Symbol.hasInstance;
    v139[v139].call(bound, instance);
    const v144 = Function.prototype;
    Symbol.hasInstance;
    v144[v144].call(doubleBound, instance);
    const v149 = Function.prototype;
    Symbol.hasInstance;
    v149[v149].call(tripleBound, instance);
    let desc = Object.getOwnPropertyDescriptor(Function.prototype, Symbol.hasInstance);
    desc.configurable;
    const v160 = () => {
        function f161() {
        }
        var fun = f161;
        const v168 = {
            get(a165, a166) {
                return /not-callable/;
            },
        };
        const v169 = new Proxy(fun, v168);
        var p = v169;
        fun instanceof p;
    };
    try { v160(); } catch (e) {}
    if (typeof f0 === "function") {
        f0(true, true);
    }
} catch(e179) {
}
