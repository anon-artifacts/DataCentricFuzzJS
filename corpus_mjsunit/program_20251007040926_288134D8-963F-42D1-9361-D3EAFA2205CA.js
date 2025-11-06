const v0 = {};
class C1 {
    constructor() {
        const v4 = new Int16Array(Int16Array);
        return v4;
    }
}
function f5(a6, a7) {
    if (a7 == "constructor") {
        const v11 = Symbol.species;
        return { [v11]: C1 };
    } else {
        return 4;
    }
    return a7;
}
function f14(a15, a16) {
    return a16;
}
const v17 = { get: f5, has: f14 };
const v20 = new Proxy([v17,v17,v17,v17], v17);
try {
    const v24 = Array.prototype.filter.bind(v20);
    function f25() {
        return true;
    }
    v24(f25);
} catch(e28) {
}
