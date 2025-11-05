function Throws() {
    function TestError() {
    }
    let callCount = 0;
    const a = [0,1];
    const v13 = {
        configurable: true,
        get() {
            callCount++;
            const v12 = new TestError();
            throw v12;
        },
    };
    Object.defineProperty(a, "0", v13);
    const v16 = () => {
        let v17;
        try { v17 = a.join(); } catch (e) {}
        return v17;
    };
    v16();
    TestError();
    const v26 = {
        configurable: true,
        get() {
            callCount++;
            return 777;
        },
    };
    Object.defineProperty(a, "0", v26);
    a.join();
}
Throws();
function ArrayLengthIncreased() {
    let callCount = 0;
    const a = [1];
    const v45 = {
        configurable: true,
        get() {
            callCount++;
            a.push(2);
            return 9;
        },
    };
    Object.defineProperty(a, "0", v45);
    a.join();
    a.join();
}
ArrayLengthIncreased();
function ArrayLengthIncreasedWithHole() {
    let callCount = 0;
    const a = [1,,2];
    const v69 = {
        configurable: true,
        get() {
            callCount++;
            a.push(3);
        },
    };
    Object.defineProperty(a, "1", v69);
    a.join();
    a.join();
}
ArrayLengthIncreasedWithHole();
function ArrayLengthDecreased() {
    let callCount = 0;
    const a = [0,1];
    const v92 = {
        configurable: true,
        get() {
            callCount++;
            a.length = 1;
            return 9;
        },
    };
    Object.defineProperty(a, "0", v92);
    a.join();
    a.join();
}
ArrayLengthDecreased();
function ElementsKindChangedToHoley() {
    let callCount = 0;
    const a = [0,1];
    const v115 = {
        configurable: true,
        get() {
            callCount++;
            a.length = 3;
            return 9;
        },
    };
    Object.defineProperty(a, "0", v115);
    a.join();
    a.join();
}
ElementsKindChangedToHoley();
