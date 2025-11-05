function f0() {
}
function f1() {
    'use strict';
    return { foo: 0, foo: 1 };
}
a = f1;
a().foo;
function f10() {
    return { foo: 0, foo: 1 };
}
a = f10;
a().foo;
function f17() {
    'use strict';
    const v21 = {
        foo: 1,
        get foo() {
            return 2;
        },
    };
    return v21;
}
a = f17;
a().foo;
function f25() {
    const v29 = {
        foo: 1,
        get foo() {
            return 2;
        },
    };
    return v29;
}
a = f25;
a().foo;
function f33() {
    'use strict';
    const v37 = {
        get foo() {
            return 2;
        },
        foo: 1,
    };
    return v37;
}
a = f33;
a().foo;
function f41() {
    const v45 = {
        get foo() {
            return 2;
        },
        foo: 1,
    };
    return v45;
}
a = f41;
a().foo;
function f49() {
    'use strict';
    const v54 = {
        foo: 1,
        set foo(a52) {
            throw 2;
        },
    };
    return v54;
}
a = f49;
try {
    const t71 = a();
    t71.foo = 5;
    const v59 = new Error("2 should be thrown here");
    throw v59;
} catch(e60) {
    if (e60 !== 2) {
        const v65 = new Error("2 should be thrown here");
        throw v65;
    }
}
function f66() {
    const v71 = {
        foo: 1,
        set foo(a69) {
            throw 2;
        },
    };
    return v71;
}
a = f66;
try {
    const t92 = a();
    t92.foo = 5;
    const v76 = new Error("2 should be thrown here");
    throw v76;
} catch(e77) {
    if (e77 !== 2) {
        const v82 = new Error("2 should be thrown here");
        throw v82;
    }
}
function f83() {
    'use strict';
    const v88 = {
        get foo() {
            return 2;
        },
        get foo() {
            return 3;
        },
    };
    return v88;
}
a = f83;
a().foo;
function f92() {
    const v97 = {
        get foo() {
            return 2;
        },
        get foo() {
            return 3;
        },
    };
    return v97;
}
a = f92;
a().foo;
function f101() {
    'use strict';
    const v106 = {
        set foo(a104) {
            throw 2;
        },
        foo: 1,
    };
    return v106;
}
a = f101;
a().foo;
function f110() {
    const v115 = {
        set foo(a113) {
            throw 2;
        },
        foo: 1,
    };
    return v115;
}
a = f110;
a().foo;
function f119() {
    'use strict';
    const v126 = {
        set foo(a121) {
            throw 2;
        },
        set foo(a124) {
            throw 3;
        },
    };
    return v126;
}
a = f119;
try {
    const t166 = a();
    t166.foo = 5;
    const v131 = new Error("3 should be thrown here");
    throw v131;
} catch(e132) {
    if (e132 !== 3) {
        const v137 = new Error("3 should be thrown here");
        throw v137;
    }
}
function f138() {
    const v145 = {
        set foo(a140) {
            throw 2;
        },
        set foo(a143) {
            throw 3;
        },
    };
    return v145;
}
a = f138;
try {
    const t189 = a();
    t189.foo = 5;
    const v150 = new Error("3 should be thrown here");
    throw v150;
} catch(e151) {
    if (e151 !== 3) {
        const v156 = new Error("3 should be thrown here");
        throw v156;
    }
}
function f157() {
    'use strict';
    const v165 = {
        get foo() {
            return 2;
        },
        set foo(a161) {
            throw 3;
        },
        get foo() {
            return 4;
        },
    };
    return v165;
}
a = f157;
try {
    a().foo;
    const t216 = a();
    t216.foo = 5;
    const v173 = new Error("3 should be thrown here");
    throw v173;
} catch(e174) {
    if (e174 !== 3) {
        const v179 = new Error("3 should be thrown here");
        throw v179;
    }
}
function f180() {
    const v188 = {
        get foo() {
            return 2;
        },
        set foo(a184) {
            throw 3;
        },
        get foo() {
            return 4;
        },
    };
    return v188;
}
a = f180;
try {
    a().foo;
    const t243 = a();
    t243.foo = 5;
    const v196 = new Error("3 should be thrown here");
    throw v196;
} catch(e197) {
    if (e197 !== 3) {
        const v202 = new Error("3 should be thrown here");
        throw v202;
    }
}
function f203() {
    'use strict';
    const v212 = {
        set foo(a205) {
            throw 2;
        },
        get foo() {
            return 4;
        },
        set foo(a210) {
            throw 3;
        },
    };
    return v212;
}
a = f203;
try {
    a().foo;
    const t271 = a();
    t271.foo = 5;
    const v220 = new Error("3 should be thrown here");
    throw v220;
} catch(e221) {
    if (e221 !== 3) {
        const v226 = new Error("3 should be thrown here");
        throw v226;
    }
}
function f227() {
    const v236 = {
        set foo(a229) {
            throw 2;
        },
        get foo() {
            return 4;
        },
        set foo(a234) {
            throw 3;
        },
    };
    return v236;
}
a = f227;
try {
    a().foo;
    const t298 = a();
    t298.foo = 5;
    const v244 = new Error("3 should be thrown here");
    throw v244;
} catch(e245) {
    if (e245 !== 3) {
        const v250 = new Error("3 should be thrown here");
        throw v250;
    }
}
f0(0, 0);
