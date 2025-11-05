function assert(a1) {
}
{
    let theTarget = [];
    let sawPrivateSymbolAsString = false;
    function f6(a7, a8, a9) {
        if (typeof a8 === "string") {
            sawPrivateSymbolAsString = a8 === "PrivateSymbol.arrayIterationKind";
        }
        return a7[a8];
    }
    let handler = { get: f6 };
    const v19 = new Proxy(theTarget, handler);
    let proxy = v19;
    for (let i22 = 0; i22 < 100; i22++) {
        let threw = false;
        try {
            proxy[Symbol.iterator]().next.call(proxy);
        } catch(e35) {
            e35.message === "%ArrayIteratorPrototype%.next requires that |this| be an Array Iterator instance";
            threw = true;
        }
        !sawPrivateSymbolAsString;
        sawPrivateSymbolAsString = false;
    }
}
{
    let theTarget = [];
    let sawPrivateSymbolAsString = false;
    function f46(a47, a48) {
        if (typeof a48 === "string") {
            sawPrivateSymbolAsString = a48 === "PrivateSymbol.arrayIterationKind";
        }
        return target[a48];
    }
    let handler = { getOwnPropertyDescriptor: f46 };
    const v59 = new Proxy(theTarget, handler);
    let proxy = v59;
    for (let i62 = 0; i62 < 100; i62++) {
        let threw = false;
        try {
            proxy[Symbol.iterator]().next.call(proxy);
        } catch(e75) {
            e75.message === "%ArrayIteratorPrototype%.next requires that |this| be an Array Iterator instance";
            threw = true;
        }
        !sawPrivateSymbolAsString;
        sawPrivateSymbolAsString = false;
    }
}
{
    let theTarget = [1,2,3,4,5];
    let iterator = theTarget[Symbol.iterator]();
    let sawPrivateSymbolAsString = false;
    function f95(a96, a97, a98, a99) {
        if (typeof a97 === "string") {
            sawPrivateSymbolAsString = a97 === "PrivateSymbol.arrayIterationKind";
        }
        return target[a97];
    }
    let handler = { set: f95 };
    const v110 = new Proxy(iterator, handler);
    let proxy = v110;
    for (let i113 = 0; i113 < 100; i113++) {
        let threw = false;
        try {
            proxy.next();
        } catch(e122) {
            e122.message === "%ArrayIteratorPrototype%.next requires that |this| be an Array Iterator instance";
            threw = true;
        }
        !threw;
        !sawPrivateSymbolAsString;
        sawPrivateSymbolAsString = false;
    }
}
