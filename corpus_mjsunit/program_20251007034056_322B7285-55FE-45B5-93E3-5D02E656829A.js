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
        var result = "";
        const v39 = [1,2,3];
        let v40;
        try { v40 = global.__createIterableObject(v39); } catch (e) {}
        var iterable = v40;
        for (const v42 of iterable) {
            result += v42;
        }
        return result === "123";
    }
    let v45;
    try { v45 = test(); } catch (e) {}
    if (!v45) {
        let v49;
        try { v49 = new Error("Test failed"); } catch (e) {}
        throw v49;
    }
} catch(e50) {
}
