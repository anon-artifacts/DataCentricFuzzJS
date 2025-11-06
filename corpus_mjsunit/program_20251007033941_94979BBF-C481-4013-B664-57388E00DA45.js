class C0 {
    constructor() {
        const v4 = new Int16Array(4);
        return v4;
    }
}
function f5(a6, a7) {
    if (a7.toString() == "constructor") {
        const v12 = Symbol.species;
        return { [v12]: C0 };
    } else {
        return 4;
    }
}
function f15(a16, a17) {
    return Reflect.has(a16, a17);
}
var handler = { get: f5, has: f15 };
var array = [1];
const v26 = new Proxy(array, handler);
var proxy = v26;
try {
    var boundFilter = Array.prototype.filter.bind(proxy);
    function f33() {
        return true;
    }
    boundFilter(f33);
    WScript.Echo("TypeError expected. TypedArray indicies should be non-configurable.");
} catch(e39) {
    if (e39 == "TypeError: Cannot redefine property '0'") {
        WScript.Echo("passed");
    }
}
