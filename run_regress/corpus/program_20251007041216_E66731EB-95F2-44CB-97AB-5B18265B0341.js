const v0 = (a1) => {
    if (!a1) {
        let v5;
        try { v5 = Error("Bad Assertion"); } catch (e) {}
        throw v5;
    }
};
let assert = v0;
const v9 = {
    get foo() {
        return this?.a;
    },
};
let aObj = v9;
const v13 = {
    jaz() {
        return super.foo;
    },
};
let obj = v13;
obj.a = "foo";
try { Object.setPrototypeOf(obj, aObj); } catch (e) {}
const v18 = obj?.jaz;
try { noInline(v18); } catch (e) {}
for (let i22 = 0; i22 < 10000; i22++) {
    if (i22 == 9999) {
        delete aObj?.foo;
        let v31;
        try { v31 = obj.jaz(); } catch (e) {}
        v31 === undefined;
    } else {
        let v34;
        try { v34 = obj.jaz(); } catch (e) {}
        v34 == "foo";
    }
}
const v39 = {
    get foo() {
        return this?.a;
    },
};
let bObj = v39;
const v43 = {
    foo() {
        return super.foo;
    },
};
let obj2 = v43;
obj2.a = "foo";
try { Object.setPrototypeOf(obj2, bObj); } catch (e) {}
const v47 = obj?.jaz;
try { noInline(v47); } catch (e) {}
for (let i50 = 0; i50 < 10000; i50++) {
    if (i50 == 9999) {
        const v59 = () => {
            return "boo";
        };
        const v61 = { get: v59 };
        try { Object.defineProperty(bObj, "foo", v61); } catch (e) {}
        let v63;
        try { v63 = obj2.foo(); } catch (e) {}
        v63 == "boo";
    } else {
        let v66;
        try { v66 = obj2.foo(); } catch (e) {}
        v66 == "foo";
    }
}
