let length;
const v3 = Symbol.iterator;
const v10 = {
    [v3]() {
        return this;
    },
    next() {
        length = arguments.length;
        return { done: true };
    },
};
let iterable = v10;
new Map(iterable);
let typeofThis;
const v18 = Number.prototype;
const v19 = Symbol.iterator;
const v26 = {
    value() {
        'use strict';
        typeofThis = typeof this;
        const v25 = {
            next() {
                return { done: true };
            },
        };
        return v25;
    },
};
Object.defineProperty(v18, v19, v26);
new Map(0);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
