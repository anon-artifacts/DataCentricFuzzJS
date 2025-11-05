for (const v6 of [true,3.14,"hello",Symbol()]) {
    let prototype = Object.getPrototypeOf(v6);
    const v10 = Symbol.iterator;
    const v17 = {
        configurable: true,
        get() {
            'use strict';
            const v13 = () => {
                return ([this])[Symbol.iterator]();
            };
            return v13;
        },
    };
    Object.defineProperty(prototype, v10, v17);
    Array.from(v6)[0];
    delete prototype[Symbol.iterator];
}
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
