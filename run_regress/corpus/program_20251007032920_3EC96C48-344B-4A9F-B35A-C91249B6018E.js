function TestArgumentsAccess() {
    class C1 {
        constructor() {
            arguments?.length;
            arguments?.[0];
            arguments?.[1];
        }
    }
    let v14;
    try { v14 = new C1(1, 2); } catch (e) {}
    let b = v14;
    class C16 extends C1 {
        constructor() {
            arguments?.length;
            arguments?.[0];
            arguments?.[1];
            super(1, 2);
        }
    }
    let v31;
    try { v31 = new C16(3, 4); } catch (e) {}
    let s = v31;
    C16?.length;
    class C35 extends C1 {
        constructor(a37, a38) {
            arguments?.length;
            arguments?.[0];
            arguments?.[1];
            super(1, 2);
        }
    }
    let v52;
    try { v52 = new C35(3, 4); } catch (e) {}
    let s2 = v52;
    C35?.length;
}
try { TestArgumentsAccess(); } catch (e) {}
function TestThisAccessRestriction() {
    class C58 {
        constructor(a60, a61) {
            let v63;
            try { v63 = new Object(); } catch (e) {}
            let o = v63;
            o.prp = a60 + a61;
            return o;
        }
    }
    class C66 extends C58 {
        constructor(a68, a69) {
            var exn;
            try {
                this.prp1 = 3;
            } catch(e73) {
                exn = e73;
            }
            exn instanceof ReferenceError;
            super(a68, a69);
            a68 + a69;
            this?.prp;
            this?.prp1;
            try { this.hasOwnProperty("prp1"); } catch (e) {}
            return this;
        }
    }
    let v84;
    try { v84 = new C58(1, 2); } catch (e) {}
    let b = v84;
    b?.prp;
    const v90 = -1;
    let v91;
    try { v91 = new C66(2, v90); } catch (e) {}
    let s = v91;
    s?.prp;
    s?.prp1;
    try { s.hasOwnProperty("prp1"); } catch (e) {}
    class C99 extends C58 {
        constructor(a101) {
            super(1, 2);
            if (a101 < 0) {
                return;
            }
            let called = false;
            function tmp() {
                called = true;
                return 3;
            }
            var exn = null;
            try {
                let v113;
                try { v113 = tmp(); } catch (e) {}
                super(v113, 4);
            } catch(e115) {
                exn = e115;
            }
            exn instanceof ReferenceError;
        }
    }
    let v119;
    try { v119 = new C99(1); } catch (e) {}
    var s2 = v119;
    s2?.prp;
    const v124 = -1;
    let v125;
    try { v125 = new C99(v124); } catch (e) {}
    var s3 = v125;
    s3?.prp;
    function f129() {
        let v131;
        try { v131 = new Object(); } catch (e) {}
        try { C66.call(v131, 1, 2); } catch (e) {}
    }
    try { f129(); } catch (e) {}
    function f137() {
        let v139;
        try { v139 = new Object(); } catch (e) {}
        try { C58.call(v139, 1, 2); } catch (e) {}
    }
    try { f137(); } catch (e) {}
    class C144 extends C58 {
        constructor() {
        }
    }
    function f146() {
        try { new C144(); } catch (e) {}
    }
    try { f146(); } catch (e) {}
}
try { TestThisAccessRestriction(); } catch (e) {}
function TestThisCheckOrdering() {
    let baseCalled = 0;
    class C154 {
        constructor() {
            baseCalled++;
        }
    }
    let fCalled = 0;
    function f() {
        fCalled++;
        return 3;
    }
    class C162 extends C154 {
        constructor() {
            baseCalled = 0;
            super();
            let obj = this;
            let exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                let v171;
                try { v171 = f(); } catch (e) {}
                super(v171);
            } catch(e172) {
                exn = e172;
            }
            exn instanceof ReferenceError;
            exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                super();
                let v180;
                try { v180 = f(); } catch (e) {}
                super(this, v180);
            } catch(e181) {
                exn = e181;
            }
            exn instanceof ReferenceError;
            exn = null;
            baseCalled = 0;
            fCalled = 0;
            try {
                let v188;
                try { v188 = f(); } catch (e) {}
                super();
                super(v188, this);
            } catch(e189) {
                exn = e189;
            }
            exn instanceof ReferenceError;
        }
    }
    try { new C162(); } catch (e) {}
}
try { TestThisCheckOrdering(); } catch (e) {}
function TestPrototypeWiring() {
    class C196 {
        constructor(a198) {
            this.foobar = a198;
        }
    }
    class C199 extends C196 {
        constructor(a201) {
            super(a201);
        }
    }
    let v203;
    try { v203 = new C199(1); } catch (e) {}
    let s = v203;
    s?.foobar;
    C199?.prototype;
    s?.__proto__;
    let v211;
    try { v211 = new C199(1, 2); } catch (e) {}
    let s1 = v211;
    s1?.foobar;
    s1?.__proto__ === C199?.prototype;
    let v218;
    try { v218 = new C199(); } catch (e) {}
    let s2 = v218;
    s2?.foobar;
    C199?.prototype;
    s2?.__proto__;
    function f224() {
        try { C199(1); } catch (e) {}
    }
    try { f224(); } catch (e) {}
    function f229() {
        try { C199(1, 2, 3, 4); } catch (e) {}
    }
    try { f229(); } catch (e) {}
    class C236 extends C199 {
        constructor() {
            super(5, 6, 7);
        }
    }
    let v241;
    try { v241 = new C236(); } catch (e) {}
    let ss2 = v241;
    ss2?.foobar;
    C236?.prototype;
    ss2?.__proto__;
    class C247 extends C196 {
        constructor(a249, a250) {
            super(a249 + a250);
        }
    }
    const v255 = 42 - 27;
    let v256;
    try { v256 = new C247(27, v255); } catch (e) {}
    let ss3 = v256;
    ss3?.foobar;
    C247?.prototype;
    ss3?.__proto__;
}
try { TestPrototypeWiring(); } catch (e) {}
function TestSublclassingBuiltins() {
    class C265 extends Uint8Array {
        constructor() {
            super(10);
            this[0] = 255;
            this[1] = 4090;
        }
    }
    let v270;
    try { v270 = new C265(); } catch (e) {}
    var eua = v270;
    eua?.length;
    eua?.byteLength;
    eua?.[0];
    eua?.[1];
    C265?.prototype;
    eua?.__proto__;
    const v285 = Object?.prototype?.toString;
    try { v285.call(eua); } catch (e) {}
}
try { TestSublclassingBuiltins(); } catch (e) {}
function TestSubclassingNull() {
    let N = null;
    class C291 extends N {
        constructor(a293, a294) {
            return {};
        }
    }
    try { new C291(1, 2); } catch (e) {}
}
try { TestSubclassingNull(); } catch (e) {}
function TestSubclassBinding() {
    class C303 {
        constructor(a305, a306) {
            this.x = a305;
            this.y = a306;
        }
    }
    let obj = {};
    class C309 extends C303 {
        constructor(a311, a312) {
            super(a311, a312);
            this !== obj;
        }
    }
    let v314;
    try { v314 = C309.bind(obj); } catch (e) {}
    let f = v314;
    function f316() {
        try { f(1, 2); } catch (e) {}
    }
    try { f316(); } catch (e) {}
    let v324;
    try { v324 = new f(1, 2); } catch (e) {}
    let s = v324;
    s?.x;
    s?.y;
    C309?.prototype;
    s?.__proto__;
    let v333;
    try { v333 = new f(1); } catch (e) {}
    let s1 = v333;
    s1?.x;
    s1?.y;
    C309?.prototype;
    s1?.__proto__;
    let v342;
    try { v342 = C309.bind(obj, 1); } catch (e) {}
    let g = v342;
    function f344() {
        try { g(8); } catch (e) {}
    }
    try { f344(); } catch (e) {}
    let v349;
    try { v349 = new g(8); } catch (e) {}
    let s2 = v349;
    s2?.x;
    s2?.y;
    C309?.prototype;
    s?.__proto__;
}
try { TestSubclassBinding(); } catch (e) {}
function TestDefaultConstructor() {
    class C359 {
    }
    function f360() {
        try { C359(); } catch (e) {}
    }
    try { f360(); } catch (e) {}
    class C364 extends C359 {
    }
    function f365() {
        try { C364(); } catch (e) {}
    }
    try { f365(); } catch (e) {}
    let v368;
    try { v368 = new C364(); } catch (e) {}
    let s1 = v368;
    s1?.__proto__;
    C364?.prototype;
    class C372 {
        constructor(a374, a375) {
            this.x = a374;
            this.y = a375;
        }
    }
    class C376 extends C372 {
    }
    let v379;
    try { v379 = new C376(1, 2); } catch (e) {}
    let s2 = v379;
    s2?.__proto__;
    C376?.prototype;
    s2?.x;
    s2?.y;
    const v387 = {};
    let v390;
    try { v390 = C376.bind(v387, 3, 4); } catch (e) {}
    let f = v390;
    let v392;
    try { v392 = new f(); } catch (e) {}
    let s2prime = v392;
    s2prime?.__proto__;
    C376?.prototype;
    s2prime?.x;
    s2prime?.y;
    let obj = {};
    class C402 {
        constructor() {
            return obj;
        }
    }
    class C404 extends C402 {
    }
    let v405;
    try { v405 = new C404(); } catch (e) {}
    let s3 = v405;
    class C408 extends Uint8Array {
    }
    let v410;
    try { v410 = new C408(10); } catch (e) {}
    var eua = v410;
    eua?.length;
    eua?.byteLength;
    eua[0] = 255;
    eua[1] = 4090;
    eua?.[0];
    eua?.[1];
    C408?.prototype;
    eua?.__proto__;
    const v427 = Object?.prototype?.toString;
    try { v427.call(eua); } catch (e) {}
}
try { TestDefaultConstructor(); } catch (e) {}
