function f0() {
    const v17 = {
        [-23159]: -23159,
        b: 11,
        3: 1.086011734169474e+308,
        get h() {
            this.b;
            const v7 = Symbol.asyncIterator;
            this[v7];
            v7.b = f0;
            new BigUint64Array(2321);
            new BigInt64Array(16);
            const v16 = new BigUint64Array(231);
            return v16;
        },
    };
    return v17;
}
const v18 = f0();
f0();
f0();
const v21 = [-641145.3177009865,3.0,0.6980569277147822,1.5625085109147664e+308];
[-2.220446049250313e-16,0.891644397895053,-9.859444558211983];
const v23 = [603188.886225241,-Infinity,-1.7976931348623157e+308,1.5897815102223838,-1e-15,-1e-15,-0.0];
const v26 = [-2.0,1.216695256664675];
const v27 = [3.0,5.0,-391986.1157969156,7.850219775503806,3.587033242819773];
const v28 = [-4.544054574622547,0.0,-998862.1981737107,10.296536504014398,1000.0,1.0,-3.031196752825651,899513.4951750443,-162.60127284433895];
function f29(a30, a31) {
    const v47 = {
        __proto__: v23,
        c: v21,
        [a30]: v18,
        set g(a33) {
            a33 !== v18 ? a33 : v18;
        },
        valueOf(a37, a38, a39, a40) {
            super["matchAll"];
            let v42 = 0;
            do {
                f0();
                v42++;
            } while (v42 < 9)
            return v26;
        },
    };
    return v47;
}
f29("bigint", "bigint");
f29("bigint", "bigint");
f29("matchAll", "matchAll");
function f51() {
}
var UBound = 0;
var BUGNUMBER = 172699;
var summary = v27;
var status = "";
var statusitems = [];
var actual = "";
[];
var actualvalues = v28;
var expect = "";
var expectedvalues = [];
let v71;
try { v71 = inSection(1); } catch (e) {}
status = v71;
expect = "URIError thrown";
try {
    try {
    const t0 = "%C0%AF";
    t0("%C0%AF");
    } catch (e) {}
    actual = "no error thrown";
} catch(e76) {
    if (e76 instanceof URIError) {
        actual = "URIError thrown";
    } else {
        if (e76 instanceof Error) {
            actual = "wrong error thrown: " + e76?.name;
        }
    }
}
function f85() {
    for (let v86 = 0; v86 < 5; v86++) {
        actualvalues?.[v86];
    }
    return f51;
}
