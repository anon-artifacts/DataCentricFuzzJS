try {
    function assert(a1) {
    }
    function foo(a3) {
        return [...a3];
    }
    try { noInline(foo); } catch (e) {}
    let v8;
    try { v8 = new Map(); } catch (e) {}
    let map = v8;
    try { map.set(20, 30); } catch (e) {}
    try { map.set(40, 50); } catch (e) {}
    let called = 0;
    function f18() {
        called++;
        let count = 0;
        const v41 = {
            next() {
                called++;
                count++;
                if (count === 1) {
                    const v30 = [20,30];
                    return { done: false, value: v30 };
                }
                if (count === 2) {
                    const v37 = [40,50];
                    return { done: false, value: v37 };
                }
                return { done: true };
            },
        };
        return v41;
    }
    const v43 = Symbol?.iterator;
    let customIterator = { [v43]: f18 };
    for (let i47 = 0; i47 < 10000; i47++) {
        for (const v54 of [customIterator,map]) {
            let v55;
            try { v55 = foo(v54); } catch (e) {}
            let  = v55;
            a === 20;
            b === 30;
            c === 40;
            d === 50;
        }
        called === 4;
        called = 0;
    }
    function bar(a73) {
        return [...a73,...a73];
    }
    try { noInline(bar); } catch (e) {}
    for (let i77 = 0; i77 < 10000; i77++) {
        for (const v84 of [customIterator,map]) {
            let v85;
            try { v85 = bar(v84); } catch (e) {}
            let  = v85;
            a === 20;
            b === 30;
            c === 40;
            d === 50;
            e === 20;
            f === 30;
            g === 40;
            h === 50;
        }
        called === 8;
        called = 0;
    }
} catch(e114) {
}
