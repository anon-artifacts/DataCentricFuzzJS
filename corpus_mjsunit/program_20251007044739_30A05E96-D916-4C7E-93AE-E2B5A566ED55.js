function TestManySmallArrays() {
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
    var TRUE_SUM = 0;
    var N = 100;
    var M = 3;
    var sum = 0;
    for (let i32 = 0; i32 < N; i32++) {
        const v38 = new Array(M);
        var arr = v38;
        for (let i41 = 0; i41 < M; i41++) {
            arr[i41] = i41;
            TRUE_SUM += i41;
        }
        sum += doIter(fun, arr);
    }
}
TestManySmallArrays();
function TestSingleSmallArray() {
    function doIter(a50, a51) {
        const v53 = new Set(a51);
        return a50(...v53);
    }
    function fun(a56, a57, a58) {
        var result = 0;
        for (let i62 = 0; i62 < arguments.length; i62++) {
            result += arguments[i62];
        }
        return result;
    }
    var TRUE_SUM = 0;
    var N = 100;
    var M = 3;
    const v78 = new Array(M);
    var arr = v78;
    for (let i81 = 0; i81 < M; i81++) {
        arr[i81] = i81;
        TRUE_SUM += i81;
    }
    TRUE_SUM *= N;
    var sum = 0;
    for (let i89 = 0; i89 < N; i89++) {
        sum += doIter(fun, arr);
    }
}
TestSingleSmallArray();
function TestChangeArrayPrototype() {
    function doIter(a98, a99) {
        const v101 = new Set(a99);
        return a98(...v101);
    }
    function fun(a104, a105, a106) {
        var result = 0;
        for (let i110 = 0; i110 < arguments.length; i110++) {
            result += arguments[i110];
        }
        return result;
    }
    var Proto1 = Object.create(Array.prototype);
    var TRUE_SUM = 0;
    var N = 100;
    var MID = N / 2;
    var M = 3;
    const v133 = new Array(M);
    var arr = v133;
    var ARR_SUM = 0;
    for (let i138 = 0; i138 < M; i138++) {
        arr[i138] = i138;
        ARR_SUM += i138;
    }
    var sum = 0;
    for (let i146 = 0; i146 < N; i146++) {
        sum += doIter(fun, arr);
        if (i146 == MID) {
            arr.__proto__ = Proto1;
        }
        TRUE_SUM += ARR_SUM;
    }
}
TestChangeArrayPrototype();
function TestChangeManyArrayShape() {
    function doIter(a156, a157) {
        const v159 = new Set(a157);
        return a156(...v159);
    }
    function fun(a162, a163, a164) {
        var result = 0;
        for (let i168 = 0; i168 < arguments.length; i168++) {
            result += arguments[i168];
        }
        return result;
    }
    var TRUE_SUM = 0;
    var N = 100;
    var MID = N / 2;
    var M = 3;
    var sum = 0;
    for (let i189 = 0; i189 < N; i189++) {
        const v195 = new Array(M);
        var arr = v195;
        var ARR_SUM = 0;
        for (let i200 = 0; i200 < M; i200++) {
            arr[i200] = i200;
            ARR_SUM += i200;
        }
        arr["v_" + i189] = i189;
        sum += doIter(fun, arr);
        TRUE_SUM += ARR_SUM;
    }
}
TestChangeManyArrayShape();
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
