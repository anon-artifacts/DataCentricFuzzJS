function f0() {
    Array?.from?.length;
    function assertArrayLikeEquals(a6, a7, a8) {
        a7?.length;
        a6?.length;
        for (let i12 = 0; i12 < a6?.length; ++i12) {
            a7?.[i12];
            a6?.[i12];
        }
    }
    var myCollectionCalled = false;
    function MyCollection(a23) {
        myCollectionCalled = true;
        arguments?.length;
    }
    const v30 = { length: 5 };
    const v31 = Array?.from;
    try { v31.call(MyCollection, v30); } catch (e) {}
    var global = this;
    function non_strict() {
    }
    function strict() {
        'use strict';
        void 0;
    }
    function strict_null() {
        'use strict';
    }
    const v45 = [1];
    try { Array.from(v45, non_strict); } catch (e) {}
    const v48 = [1];
    const v50 = void 0;
    try { Array.from(v48, non_strict, v50); } catch (e) {}
    const v53 = [1];
    try { Array.from(v53, non_strict, null); } catch (e) {}
    const v57 = [1];
    try { Array.from(v57, strict); } catch (e) {}
    const v60 = [1];
    const v62 = void 0;
    try { Array.from(v60, strict, v62); } catch (e) {}
    const v65 = [1];
    try { Array.from(v65, strict_null, null); } catch (e) {}
    function testArrayFrom(a69, a70) {
        const v71 = [];
        const v73 = Array?.from;
        try { v73.call(a69, v71, undefined); } catch (e) {}
        [];
        const v77 = Array?.from;
        try { v77.call(a69, NaN); } catch (e) {}
        [];
        const v81 = Array?.from;
        try { v81.call(a69, Infinity); } catch (e) {}
        [];
        const v85 = Array?.from;
        try { v85.call(a69, 10000000); } catch (e) {}
        [];
        const v89 = Array?.from;
        try { v89.call(a69, "test"); } catch (e) {}
        ["t","e","s","t"];
        const v98 = { foo: "bar" };
        const v99 = { length: 1, 0: v98 };
        const v100 = Array?.from;
        try { v100.call(a69, v99); } catch (e) {}
        [{ foo: "bar" }];
        const v106 = -1;
        const v108 = { foo: "bar" };
        const v109 = { length: v106, 0: v108 };
        const v110 = Array?.from;
        try { v110.call(a69, v109); } catch (e) {}
        [];
        const v116 = ["foo","bar","baz"];
        const v117 = Array?.from;
        try { v117.call(a69, v116); } catch (e) {}
        ["foo","bar","baz"];
        const v127 = ["foo","bar","baz"];
        let v128;
        try { v128 = new Set(v127); } catch (e) {}
        var kSet = v128;
        const v130 = Array?.from;
        try { v130.call(a69, kSet); } catch (e) {}
        ["foo","bar","baz"];
        const v140 = ["foo","bar","baz"];
        let v141;
        try { v141 = v140.entries(); } catch (e) {}
        let v142;
        try { v142 = new Map(v141); } catch (e) {}
        var kMap = v142;
        const v144 = Array?.from;
        try { v144.call(a69, kMap); } catch (e) {}
        [[0,"foo"],[1,"bar"],[2,"baz"]];
        function* generator() {
            yield "a";
            yield "b";
            yield "c";
        }
        let v163;
        try { v163 = generator(); } catch (e) {}
        const v164 = Array?.from;
        try { v164.call(a69, v163); } catch (e) {}
        ["a","b","c"];
        var gclef = "𝄞";
        const v172 = Array?.from;
        try { v172.call(a69, gclef); } catch (e) {}
        [gclef];
        const v176 = gclef + " G";
        const v177 = Array?.from;
        try { v177.call(a69, v176); } catch (e) {}
        [gclef," ","G"];
        function f183(a184) {
            let v186;
            try { v186 = this.filter(a184); } catch (e) {}
            return v186;
        }
        function f187(a188) {
            let v189;
            try { v189 = a188.toUpperCase(); } catch (e) {}
            return v189;
        }
        const v190 = { filter: f187 };
        const v191 = Array?.from;
        try { v191.call(a69, "test", f183, v190); } catch (e) {}
        ["T","E","S","T"];
        function f199(a200) {
            let v201;
            try { v201 = a200.toUpperCase(); } catch (e) {}
            return v201;
        }
        const v202 = Array?.from;
        try { v202.call(a69, "test", f199); } catch (e) {}
        ["T","E","S","T"];
        function f209() {
            const v211 = Array?.from;
            try { v211.call(a69, null); } catch (e) {}
        }
        try { f209(); } catch (e) {}
        function f215() {
            const v217 = Array?.from;
            try { v217.call(a69, undefined); } catch (e) {}
        }
        try { f215(); } catch (e) {}
        function f220() {
            const v221 = [];
            const v223 = Array?.from;
            try { v223.call(a69, v221, null); } catch (e) {}
        }
        try { f220(); } catch (e) {}
        function f226() {
            const v227 = [];
            const v229 = Array?.from;
            try { v229.call(a69, v227, "noncallable"); } catch (e) {}
        }
        try { f226(); } catch (e) {}
        var nullIterator = {};
        nullIterator[Symbol?.iterator] = null;
        const v237 = Array?.from;
        try { v237.call(a69, nullIterator); } catch (e) {}
        [];
        var nonObjIterator = {};
        function f242() {
            return "nonObject";
        }
        nonObjIterator[Symbol?.iterator] = f242;
        function f245() {
            const v246 = Array?.from;
            try { v246.call(a69, nonObjIterator); } catch (e) {}
        }
        try { f245(); } catch (e) {}
        function f249() {
            const v250 = [];
            const v252 = Array?.from;
            try { v252.call(a69, v250, null); } catch (e) {}
        }
        try { f249(); } catch (e) {}
        var called = false;
        var arr = [1,2,3];
        var obj = {};
        function testIterator() {
            called = true;
            const v268 = Symbol?.iterator;
            let v269;
            try { v269 = arr[v268](); } catch (e) {}
            return v269;
        }
        var getCalled = false;
        const v272 = Symbol?.iterator;
        function f273() {
            getCalled = true;
            return testIterator;
        }
        function f276() {
            '@@iterator should not be set';
        }
        const v277 = { get: f273, set: f276 };
        try { Object.defineProperty(obj, v272, v277); } catch (e) {}
        const v280 = Array?.from;
        try { v280.call(a69, obj); } catch (e) {}
        [1,2,3];
    }
    function Other() {
    }
    function f288() {
    }
    let v289;
    try { v289 = f288.bind(Array, 27); } catch (e) {}
    var boundFn = v289;
    try { testArrayFrom(Array, Array); } catch (e) {}
    try { testArrayFrom(null, Array); } catch (e) {}
    const v294 = {};
    try { testArrayFrom(v294, Array); } catch (e) {}
    try { testArrayFrom(Object, Object); } catch (e) {}
    try { testArrayFrom(Other, Other); } catch (e) {}
    const v300 = Math?.cos;
    try { testArrayFrom(v300, Array); } catch (e) {}
    const v302 = Math?.cos;
    let v303;
    try { v303 = v302.bind(Math); } catch (e) {}
    try { testArrayFrom(v303, Array); } catch (e) {}
    try { testArrayFrom(boundFn, boundFn); } catch (e) {}
    var setterCalled = 0;
    function exotic() {
        function f311() {
            return 2;
        }
        function f313() {
            setterCalled++;
        }
        const v315 = { get: f311, set: f313 };
        try { Object.defineProperty(this, "0", v315); } catch (e) {}
    }
    function f317() {
        const v319 = [1];
        const v320 = Array?.from;
        try { v320.call(exotic, v319); } catch (e) {}
    }
    try { f317(); } catch (e) {}
    items = {};
    items[Symbol?.iterator] = 7;
    function TestError() {
    }
    function ArrayLike() {
        let v333;
        try { v333 = new TestError(); } catch (e) {}
        throw v333;
    }
    function f334() {
        const v335 = Array?.from;
        try { v335.call(ArrayLike, items); } catch (e) {}
    }
    try { f334(); } catch (e) {}
    function ordinary() {
    }
    const v340 = [2];
    const v341 = Array?.from;
    let v342;
    try { v342 = v341.call(ordinary, v340); } catch (e) {}
    var x = v342;
    let v345;
    try { v345 = Object.getOwnPropertyDescriptor(x, "length"); } catch (e) {}
    var xlength = v345;
    xlength?.value;
    xlength?.writable;
    xlength?.enumerable;
    xlength?.configurable;
    let v356;
    try { v356 = Object.getOwnPropertyDescriptor(x, 0); } catch (e) {}
    var x0 = v356;
    x0?.value;
    xlength?.writable;
    xlength?.enumerable;
    xlength?.configurable;
}
try { f0(); } catch (e) {}
