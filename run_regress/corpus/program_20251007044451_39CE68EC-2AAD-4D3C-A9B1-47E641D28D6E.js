const MIN_DICTIONARY_INDEX = 8192;
function ToStringThrows() {
    function TestError() {
    }
    let callCount = 0;
    const a = [1,2];
    const v10 = () => {
        const v14 = {
            toString() {
                callCount++;
                const v13 = new TestError();
                throw v13;
            },
        };
        let v15;
        try { v15 = a.join(v14); } catch (e) {}
        return v15;
    };
    v10();
    TestError();
    a.join();
}
ToStringThrows();
function RecursiveJoinCall() {
    const a = [1,2,3];
    let callCount = 0;
    const v34 = {
        toString() {
            callCount++;
            return a.join("-");
        },
    };
    const sep = v34;
    a.join(sep);
    a.join();
}
RecursiveJoinCall();
function ArrayLengthIncreased() {
    const a = [1,2,3];
    let callCount = 0;
    const v56 = {
        toString() {
            callCount++;
            a.push(4);
            return ",";
        },
    };
    a.join(v56);
    a.join();
}
ArrayLengthIncreased();
function ArrayLengthDecreased() {
    const a = [1,2,3];
    let callCount = 0;
    const v75 = {
        toString() {
            callCount++;
            a.pop();
            return ",";
        },
    };
    a.join(v75);
    a.join();
}
ArrayLengthDecreased();
function ArrayEmptied() {
    const a = [1,2,3];
    let callCount = 0;
    const v94 = {
        toString() {
            callCount++;
            a.length = 0;
            return ",";
        },
    };
    a.join(v94);
}
ArrayEmptied();
function NumberDictionaryEmptied() {
    const a = [];
    a[0] = 1;
    a[MIN_DICTIONARY_INDEX] = 2;
    let callCount = 0;
    ("-").repeat(MIN_DICTIONARY_INDEX);
    const v111 = {
        toString() {
            callCount++;
            a.length = 0;
            return "-";
        },
    };
    a.join(v111);
}
NumberDictionaryEmptied();
function NumberDictionaryEmptiedEmptySeparator() {
    const a = [];
    a[0] = 1;
    a[MIN_DICTIONARY_INDEX] = 2;
    let callCount = 0;
    ("").repeat(MIN_DICTIONARY_INDEX);
    const v128 = {
        toString() {
            callCount++;
            a.length = 0;
            return "";
        },
    };
    a.join(v128);
}
NumberDictionaryEmptiedEmptySeparator();
function ElementsKindSmiToDoubles() {
    const a = [1,2,3];
    let callCount = 0;
    const v145 = {
        toString() {
            callCount++;
            a[0] = 1.5;
            return ",";
        },
    };
    a.join(v145);
    a.join();
}
ElementsKindSmiToDoubles();
function ElementsKindDoublesToObjects() {
    const a = [1.5,2.5,3.5];
    let callCount = 0;
    const v164 = {
        toString() {
            callCount++;
            a[0] = "one";
            return ",";
        },
    };
    a.join(v164);
    a.join();
}
ElementsKindDoublesToObjects();
function ArrayIsNoLongerFast() {
    const a = [1,2,3];
    let callCount = 0;
    const v188 = {
        toString() {
            callCount++;
            const v184 = {
                get() {
                    return 666;
                },
            };
            Object.defineProperty(a, "0", v184);
            return ",";
        },
    };
    a.join(v188);
    a.join();
}
ArrayIsNoLongerFast();
function ArrayPrototypeUnset() {
    const a = [1,2];
    a.length = 3;
    let callCount = 0;
    const v208 = {
        toString() {
            callCount++;
            a.__proto__ = { 2: 4 };
            return ",";
        },
    };
    a.join(v208);
    a.__proto__ = Array.prototype;
    a.join();
}
ArrayPrototypeUnset();
function ArrayPrototypeIsNoLongerFast() {
    const a = [1,2,3];
    let callCount = 0;
    const v237 = {
        toString() {
            callCount++;
            a.pop();
            const v229 = Array.prototype;
            const v233 = {
                get() {
                    return 777;
                },
            };
            Object.defineProperty(v229, "2", v233);
            return ",";
        },
    };
    a.join(v237);
    a.join();
}
ArrayPrototypeIsNoLongerFast();
