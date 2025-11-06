try {
    function f0() {
    }
    for (const v2 of anyTypedArrayConstructors) {
        const v9 = {
            valueOf() {
                array[3] = 30;
                return 2;
            },
        };
        let array = [0,1,v9,3,4];
        let v14;
        try { v14 = new v2(array); } catch (e) {}
        let typedArray = v14;
        typedArray?.length;
        array?.length;
        [0,1,2,3,4];
    }
    if (typeof f0 === "function") {
        try { f0(true, true); } catch (e) {}
    }
} catch(e30) {
}
