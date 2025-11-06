try {
    function foo(a1) {
        return a1?.f;
    }
    try { noInline(foo); } catch (e) {}
    function makeWithGetter() {
        var o = {};
        function f9() {
            throw "hello";
        }
        try { o.__defineGetter__("f", f9); } catch (e) {}
        return o;
    }
    for (let i13 = 0; i13 < 100000; ++i13) {
        const v20 = { f: 23 };
        let v21;
        try { v21 = foo(v20); } catch (e) {}
        var result = v21;
        if (result != 23) {
            throw "Error: bad result: " + result;
        }
        const v29 = { g: 12, f: 13 };
        let v30;
        try { v30 = foo(v29); } catch (e) {}
        result = v30;
        if (result != 13) {
            throw "Error: bad result: " + result;
        }
        const v38 = { g: 12, h: 13, f: 14 };
        let v39;
        try { v39 = foo(v38); } catch (e) {}
        result = v39;
        if (result != 14) {
            throw "Error: bad result: " + result;
        }
    }
    var didThrow;
    try {
        let v46;
        try { v46 = makeWithGetter(); } catch (e) {}
        try { foo(v46); } catch (e) {}
    } catch(e48) {
        didThrow = e48;
    }
    if (didThrow != "hello") {
        throw "Error: didn't throw or threw wrong exception: " + didThrow;
    }
} catch(e53) {
}
