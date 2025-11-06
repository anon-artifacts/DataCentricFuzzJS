try {
    var global = this;
    function __createIterableObject(a3, a4) {
        a4 = a4 || {};
        if ((typeof Symbol !== "function") || !Symbol?.iterator) {
            return {};
        }
        let v15 = a3?.length;
        v15++;
        function f17() {
            let v18;
            try { v18 = a3.shift(); } catch (e) {}
            const v21 = a3?.length <= 0;
            return { value: v18, done: v21 };
        }
        const v24 = a4?.["return"];
        const v26 = a4?.["throw"];
        var iterator = { next: f17, return: v24, throw: v26 };
        var iterable = {};
        function f31() {
            return iterator;
        }
        iterable[Symbol?.iterator] = f31;
        return iterable;
    }
    function test() {
        const v37 = [1,2,3];
        let v38;
        try { v38 = global.__createIterableObject(v37); } catch (e) {}
        var iterable = v38;
        let v41;
        try { v41 = Array.from(iterable); } catch (e) {}
        return (v41 + "") === "1,2,3";
    }
    let v46;
    try { v46 = test(); } catch (e) {}
    if (!v46) {
        let v50;
        try { v50 = new Error("Test failed"); } catch (e) {}
        throw v50;
    }
} catch(e51) {
}
