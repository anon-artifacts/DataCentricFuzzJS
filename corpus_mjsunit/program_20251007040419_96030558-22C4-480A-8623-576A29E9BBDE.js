try {
    function assert(a1) {
        if (!a1) {
            let v4;
            try { v4 = new Error(); } catch (e) {}
            throw v4;
        }
    }
    function onlyDouble(a6) {
        let v8;
        try { v8 = Number.isInteger(a6); } catch (e) {}
        return v8;
    }
    try { noInline(onlyDouble); } catch (e) {}
    let interestingValues = [[Infinity,false],[-Infinity,false],[NaN,false],[0,true],[-0,true],[9.007199254749001e+25,true],[9007199254749000704,true],[Number?.MAX_SAFE_INTEGER,true],[Number?.MIN_SAFE_INTEGER,true],[0.5,false],[Math?.PI,false],[42,true],[0,true],[-10,true],[2147483647,true],[-2147483648,true],[Number?.MIN_VALUE,false],[Number?.MAX_VALUE,true],[-Number?.MAX_VALUE,true]];
    for (let i77 = 0; i77 < 10000; ++i77) {
        for (const v83 of interestingValues) {
            let v85;
            try { v85 = onlyDouble(value); } catch (e) {}
            v85 === result;
        }
    }
    const v90 = [true,false];
    const v93 = [false,false];
    const v96 = [,false];
    const v99 = [null,false];
    const v102 = [{},false];
    const v107 = {
        valueOf() {
            let v106;
            try { v106 = new Error("Should not be called"); } catch (e) {}
            throw v106;
        },
    };
    const v109 = [v107,false];
    function f110() {
    }
    const v112 = [f110,false];
    try { interestingValues.push(v90, v93, v96, v99, v102, v109, v112); } catch (e) {}
    function generic(a115) {
        let v116;
        try { v116 = Number.isInteger(a115); } catch (e) {}
        return v116;
    }
    try { noInline(generic); } catch (e) {}
    for (let i119 = 0; i119 < 10000; ++i119) {
        for (const v125 of interestingValues) {
            let v127;
            try { v127 = generic(value); } catch (e) {}
            v127 === result;
        }
    }
    function onlyInts(a131) {
        let v132;
        try { v132 = Number.isInteger(a131); } catch (e) {}
        return v132;
    }
    try { noInline(onlyInts); } catch (e) {}
    for (let i135 = 0; i135 < 10000; ++i135) {
        let v141;
        try { v141 = onlyInts(i135); } catch (e) {}
        v141 === true;
    }
    for (let i145 = 0; i145 < 10000; ++i145) {
        for (const v151 of interestingValues) {
            let v153;
            try { v153 = onlyInts(value); } catch (e) {}
            v153 === result;
        }
    }
} catch(e156) {
}
