function f0() {
}
let count = 0;
const v4 = {};
const v30 = {
    defineProperty(a6, a7, a8) {
        a8.enumerable;
        a8.configurable;
        if ("set" in a8) {
            a8.set;
            const v18 = Object.prototype;
            try { v18.__defineSetter__(); } catch (e) {}
        } else {
            a8.get;
            const v22 = Object.prototype;
            try { v22.__defineGetter__(); } catch (e) {}
        }
        Object.keys(a8).length;
        count++;
        return true;
    },
};
const v31 = new Proxy(v4, v30);
let verifyProxy = v31;
for (const v39 of [Object.prototype.__defineGetter__,Object.prototype.__defineSetter__]) {
    for (const v43 of [,null]) {
        const v44 = () => {
            let v46;
            try { v46 = v39.call(v43, "x", v39); } catch (e) {}
            return v46;
        };
        v44();
    }
    const v49 = {};
    const v50 = [];
    const v51 = {};
    const v53 = new Proxy(v51, {});
    let nonCallable = [v49,v50,v53];
    for (const v56 of nonCallable) {
        const v57 = () => {
            let v59;
            try { v59 = v39.call(verifyProxy, "x", v56); } catch (e) {}
            return v59;
        };
        v57();
    }
    const v63 = Symbol.toPrimitive;
    const v72 = {
        [v63](a65) {
            return {};
        },
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            throw "wrongly invoked";
        },
    };
    let key = v72;
    const v74 = () => {
        let v75;
        try { v75 = v39.call(verifyProxy, key, v39); } catch (e) {}
        return v75;
    };
    v74();
    const v78 = Symbol.toPrimitive;
    const v87 = {
        [v78](a80) {
            return "x";
        },
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            throw "wrongly invoked";
        },
    };
    key = v87;
    v39.call(verifyProxy, key, v39);
    const v90 = Symbol.toPrimitive;
    const v95 = {
        [v90]: undefined,
        valueOf() {
            throw "wrongly invoked";
        },
        toString() {
            return "x";
        },
    };
    key = v95;
    v39.call(verifyProxy, key, v39);
    v39.call(verifyProxy, "x", v39);
    let obj = {};
    v39.call(obj, "x", v39);
    let descriptor = Object.getOwnPropertyDescriptor(obj, "x");
    descriptor.enumerable;
    descriptor.configurable;
    if (v39 == Object.prototype.__defineSetter__) {
        descriptor.get;
        descriptor.set;
    } else {
        descriptor.get;
        descriptor.set;
    }
    Object.keys(descriptor).length;
}
f0(0, 0);
