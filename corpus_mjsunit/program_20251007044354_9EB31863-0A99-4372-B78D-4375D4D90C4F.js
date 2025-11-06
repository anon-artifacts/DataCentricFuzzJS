try {
    function foo(a1) {
        var x = a1 + 1;
        function f5(a6) {
            x += a6;
            return a6;
        }
        return f5;
    }
    let v8;
    try { v8 = foo(42); } catch (e) {}
    var f = v8;
    try { noInline(f); } catch (e) {}
    for (let i13 = 0; i13 < 10000; ++i13) {
        let v20;
        try { v20 = f(1); } catch (e) {}
        var result = v20;
        if (result != (((42 + 1) + i13) + 1)) {
            throw "Error: bad result: " + result;
        }
    }
    let v32;
    try { v32 = foo(43); } catch (e) {}
    var f = v32;
    let v35;
    try { v35 = f(1); } catch (e) {}
    var result = v35;
    if (result != ((43 + 1) + 1)) {
        throw "Error: bad result: " + result;
    }
} catch(e45) {
}
