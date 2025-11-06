try {
    function test() {
        var obj = { foo: 1, bar: 2 };
        let v6;
        try { v6 = Reflect.enumerate(obj); } catch (e) {}
        var iterator = v6;
        var passed = 1;
        if ((typeof Symbol === "function") && ("iterator" in Symbol)) {
            passed &= Symbol?.iterator in iterator;
        }
        let v19;
        try { v19 = iterator.next(); } catch (e) {}
        var item = v19;
        passed &= (item?.value === "foo") && (item?.done === false);
        let v28;
        try { v28 = iterator.next(); } catch (e) {}
        item = v28;
        passed &= (item?.value === "bar") && (item?.done === false);
        let v36;
        try { v36 = iterator.next(); } catch (e) {}
        item = v36;
        passed &= (item?.value === undefined) && (item?.done === true);
        return passed === 1;
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
