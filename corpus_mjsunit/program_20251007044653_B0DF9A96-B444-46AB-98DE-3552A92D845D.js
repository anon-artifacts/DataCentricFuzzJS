try {
    function foo() {
        function bar(a2) {
            return this;
        }
        function inner() {
            let result;
            for (let i8 = 0; i8 < 1000000; i8++) {
                let v14;
                try { v14 = bar(i8); } catch (e) {}
                result = v14;
            }
            return result;
        }
        try { noInline(inner); } catch (e) {}
        let v17;
        try { v17 = inner(); } catch (e) {}
        return v17;
    }
    let v18;
    try { v18 = foo(); } catch (e) {}
    let result = v18;
    if (result !== undefined) {
        let v24;
        try { v24 = new Error("Bad result"); } catch (e) {}
        throw v24;
    }
} catch(e25) {
}
