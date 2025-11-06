try {
    function foo(a1) {
        var result = 42;
        var o = {};
        if (a1) {
            let v7;
            try { v7 = isInt32(o); } catch (e) {}
            result = v7;
        }
        return result;
    }
    try { noInline(foo); } catch (e) {}
    let v11;
    try { v11 = foo(true); } catch (e) {}
    var result = v11;
    if (result !== false) {
        throw "Error: bad result at end: " + result;
    }
    for (let i18 = 0; i18 < 10000; ++i18) {
        let v25;
        try { v25 = foo(false); } catch (e) {}
        var result = v25;
        if (result !== 42) {
            throw "Error: bad result: " + result;
        }
    }
    let v32;
    try { v32 = foo(true); } catch (e) {}
    var result = v32;
    if (result !== false) {
        throw "Error: bad result at end: " + result;
    }
} catch(e38) {
}
