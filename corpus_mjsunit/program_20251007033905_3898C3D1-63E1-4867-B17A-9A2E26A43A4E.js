function f0() {
    const symbol = Symbol("symbol");
    const v7 = { [symbol]: 0, a: 1 };
    const v10 = { [symbol]: 1, b: 2 };
    const v13 = { [symbol]: 2, c: 3 };
    const OBJS = [v7,v10,v13,{ [symbol]: 3, d: 4 }];
    function foo(a20) {
        return a20[symbol];
    }
    for (let i23 = 0; i23 < OBJS.length; ++i23) {
        foo(OBJS[i23]);
        foo(OBJS[i23]);
    }
    for (let i34 = 0; i34 < OBJS.length; ++i34) {
        foo(OBJS[i34]);
        foo(OBJS[i34]);
    }
}
f0();
function f45() {
    const symbol = Symbol("symbol");
    const v52 = { [symbol]: 0, a: 1 };
    const v55 = { [symbol]: 1, b: 2 };
    const v58 = { [symbol]: 2, c: 3 };
    const OBJS = [v52,v55,v58,{ [symbol]: 3, d: 4 }];
    function foo(a65) {
        a65[symbol] = a65;
    }
    for (let i67 = 0; i67 < OBJS.length; ++i67) {
        foo(OBJS[i67]);
        foo(OBJS[i67]);
    }
    for (let i78 = 0; i78 < OBJS.length; ++i78) {
        foo(OBJS[i78]);
        foo(OBJS[i78]);
    }
    for (const v88 of OBJS) {
        v88[symbol];
    }
}
f45();
