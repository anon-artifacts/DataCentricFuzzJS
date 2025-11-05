function TestIncreaseArrayLength() {
    function doIter(a2, a3) {
        const v5 = new Set(a3);
        return a2(...v5);
    }
    function fun(a8, a9, a10) {
        var result = 0;
        for (let i14 = 0; i14 < arguments.length; i14++) {
            result += arguments[i14];
        }
        return result;
    }
    var GET_COUNT = 0;
    function getter() {
        GET_COUNT++;
        if (GET_COUNT == MID) {
            ARR_SUM += arr.length;
            arr.push(arr.length);
        }
        return M2;
    }
    var iter = ([])[Symbol.iterator]();
    var iterProto = Object.getPrototypeOf(iter);
    var OldNext = iterProto.next;
    function f45() {
        return OldNext.apply(this, arguments);
    }
    var NewNext = f45;
    var TRUE_SUM = 0;
    var N = 100;
    var MID = N / 2;
    var M = 3;
    const v60 = new Array(M);
    var arr = v60;
    var ARR_SUM = 0;
    for (let i65 = 0; i65 < M; i65++) {
        arr[i65] = i65;
        ARR_SUM += i65;
    }
    var M2 = (M / 2) | 0;
    Object.defineProperty(arr, M2, { get: getter });
    var sum = 0;
    for (let i80 = 0; i80 < N; i80++) {
        sum += doIter(fun, arr);
        TRUE_SUM += ARR_SUM;
    }
}
TestIncreaseArrayLength();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
