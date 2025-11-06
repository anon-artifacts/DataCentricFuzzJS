try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        var receiver = {};
        let v6;
        try { v6 = new v2(1); } catch (e) {}
        var ta = v6;
        try { Reflect.set(ta, 0, 47, receiver); } catch (e) {}
        ta?.[0];
        receiver?.[0];
        try { Reflect.set(ta, 10, 47, receiver); } catch (e) {}
        ta?.[10];
        receiver?.[10];
        const v28 = typeof detachArrayBuffer === "function";
        let v30;
        try { v30 = isSharedConstructor(v2); } catch (e) {}
        if (v28 && !v30) {
            const v33 = ta?.buffer;
            try { detachArrayBuffer(v33); } catch (e) {}
            ta?.[0];
            try { Reflect.set(ta, 0, 42, receiver); } catch (e) {}
            ta?.[0];
            receiver?.[0];
        }
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e51) {
}
