function foo() {
}
const v7 = new Boolean(true);
const v9 = new Boolean(false);
const v12 = +0;
const v14 = -0;
const v20 = -1;
const v22 = -5;
const v29 = -1026;
const v31 = +98768.2546;
const v33 = -88754.15478;
const v36 = 1 << 32;
const v40 = -(1 << 32);
const v45 = (1 << 32) - 1;
const v48 = 1 << 31;
const v52 = -(1 << 31);
const v55 = 1 << 25;
const v59 = -1 << 25;
const v61 = Number.MAX_VALUE;
const v62 = Number.MIN_VALUE;
const v63 = Number.NaN;
const v64 = Number.POSITIVE_INFINITY;
const v65 = Number.NEGATIVE_INFINITY;
const v66 = new Number(NaN);
const v69 = new Number(+0);
const v72 = new Number(-0);
const v74 = new Number(0);
const v76 = new Number(1);
const v78 = new Number(10);
const v80 = new Number(10.1);
const v82 = new Number(Number.MAX_VALUE);
const v84 = new Number(Number.MIN_VALUE);
const v86 = new Number(Number.NaN);
const v88 = new Number(Number.POSITIVE_INFINITY);
const v90 = new Number(Number.NEGATIVE_INFINITY);
const v95 = "hel" + "lo";
const v104 = new String("");
const v106 = new String("hello");
const v110 = new String("he" + "llo");
const v112 = new Object();
const v116 = [1,2,3];
const v117 = new Object();
var all = [,null,true,false,v7,v9,NaN,v12,v14,0,1,10,10.1,v20,v22,5,124,248,654,987,v29,v31,v33,v36,v40,v45,v48,v52,v55,v59,v61,v62,v63,v64,v65,v66,v69,v72,v74,v76,v78,v80,v82,v84,v86,v88,v90,"","hello",v95,"+0","-0","0","1","10.0","10.1",v104,v106,v110,v112,v116,v117,[1,2,3],foo];
function AsmModule(a125) {
    'use asm';
    var fround = a125.Math.fround;
    function posInt(a130) {
        return +(+((a130 = a130 | 0) | 0));
    }
    function posUInt(a138) {
        return +(+((a138 = a138 | 0) >>> 0));
    }
    function posDouble(a146) {
        return +(+(a146 = +a146));
    }
    function posFloat(a151) {
        return fround(+(a151 = fround(a151)));
    }
    function negInt(a156) {
        return -(a156 = a156 | 0) | 0;
    }
    function negDouble(a163) {
        return +(-(a163 = +a163));
    }
    function negFloat(a168) {
        return fround(-(a168 = fround(a168)));
    }
    function bitnotInt(a173) {
        return ~(a173 = a173 | 0) | 0;
    }
    function bitnotnotInt(a180) {
        return ~(~(a180 = +a180)) | 0;
    }
    function lognotInt(a187) {
        return !(a187 = a187 | 0) | 0;
    }
    function lognot2Int(a194) {
        return !(!(a194 = a194 | 0)) | 0;
    }
    const v201 = {
        posInt: posInt,
        posUInt: posUInt,
        posDouble: posDouble,
        posFloat: posFloat,
        negInt: negInt,
        negDouble: negDouble,
        negFloat: negFloat,
        bitnotInt: bitnotInt,
        bitnotnotInt: bitnotnotInt,
        lognotInt: lognotInt,
        lognot2Int: lognot2Int,
    };
    return v201;
}
var asmModule = AsmModule({ Math: Math });
for (let i207 = 0; i207 < all.length; ++i207) {
    print((((("i   +a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.posInt(all[i207]));
    print((((("ui  +a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.posUInt(all[i207]));
    print((((("d   +a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.posDouble(all[i207]));
    print((((("f   +a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.posFloat(all[i207]));
    print((((("i   -a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.negInt(all[i207]));
    print((((("d   -a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.negDouble(all[i207]));
    print((((("f   -a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.negFloat(all[i207]));
    print((((("i   ~a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.bitnotInt(all[i207]));
    print((((("i  ~~a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.bitnotnotInt(all[i207]));
    print((((("i   !a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.lognotInt(all[i207]));
    print((((("i  !!a[" + i207) + "](") + all[i207]) + ") = ") + asmModule.lognot2Int(all[i207]));
}
