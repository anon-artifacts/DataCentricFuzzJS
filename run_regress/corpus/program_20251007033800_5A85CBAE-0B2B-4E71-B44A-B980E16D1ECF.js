function f0() {
}
function base() {
    this.prop = 42;
}
class C4 extends base {
    constructor() {
        try {
            let v7;
            try { v7 = new Error(); } catch (e) {}
            throw v7;
        } catch(e8) {
            if (!(e8 instanceof ReferenceError)) {
                throw e8;
            }
        }
        super();
        this?.prop;
    }
}
let v14;
try { v14 = new C4(); } catch (e) {}
v14?.prop;
class C17 extends base {
    constructor() {
        super();
        super();
    }
}
const v19 = () => {
    let v20;
    try { v20 = new C17(); } catch (e) {}
    return v20;
};
try { v19(); } catch (e) {}
class C23 extends base {
    constructor() {
        for (let i26 = 0; i26 < 3; i26++) {
            super();
        }
    }
}
const v32 = () => {
    let v33;
    try { v33 = new C23(); } catch (e) {}
    return v33;
};
try { v32(); } catch (e) {}
class C35 extends base {
    constructor() {
        super();
        try {
            super();
        } catch(e37) {
        }
    }
}
let v38;
try { v38 = new C35(); } catch (e) {}
v38?.prop;
if (typeof f0 === "function") {
    try { f0(0, 0, "OK"); } catch (e) {}
}
