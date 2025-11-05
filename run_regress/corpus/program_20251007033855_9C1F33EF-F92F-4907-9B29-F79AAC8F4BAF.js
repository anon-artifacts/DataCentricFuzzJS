function f0() {
}
var returnCalled = 0;
function* wrapNoThrow() {
    const v5 = Symbol.iterator;
    const v14 = {
        [v5]() {
            return this;
        },
        next() {
            return { value: 10, done: false };
        },
        return() {
            returnCalled++;
            return {};
        },
    };
    let iter = v14;
    for (const v16 of iter) {
        yield v16;
    }
}
for (const v19 of wrapNoThrow()) {
    break;
}
function* wrapThrow() {
    const v23 = Symbol.iterator;
    const v31 = {
        [v23]() {
            return this;
        },
        next() {
            return { value: 10, done: false };
        },
        return() {
            throw 42;
        },
    };
    let iter = v31;
    for (const v33 of iter) {
        yield v33;
    }
}
const v35 = () => {
    for (const v37 of wrapThrow()) {
        break;
    }
};
try { v35(); } catch (e) {}
if (typeof f0 === "function") {
    f0(0, 0);
}
