function f0() {
    function foo(a2, a3) {
        let v4;
        try { v4 = a2.charCodeAt(a3); } catch (e) {}
        return v4;
    }
    try { noInline(foo); } catch (e) {}
    var array = "";
    for (let i10 = 0; i10 < array?.length; ++i10) {
        const v17 = 5 - i10;
        let v19;
        try { v19 = String.fromCharCode(v17); } catch (e) {}
        array += v19;
    }
    for (let i21 = 0; i21 < 1000; ++i21) {
        var result = 0;
        var expectedResult = 0;
        for (let i32 = 0; i32 < array?.length; ++i32) {
            let v38;
            try { v38 = foo(array, i32); } catch (e) {}
            result += v38;
            expectedResult += 5 - i32;
        }
        if (result != expectedResult) {
            const v44 = "Bad result: " + result;
            let v45;
            try { v45 = new Error(v44); } catch (e) {}
            throw v45;
        }
    }
}
try { f0(); } catch (e) {}
