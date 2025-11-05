function test0() {
    let v2;
    try { v2 = new Uint32Array(); } catch (e) {}
    var ui32 = v2;
    for (const v4 in ui32) {
        if (typeof v4) {
            continue;
        }
        try {
        } catch(e6) {
            continue;
        } finally {
        }
        break;
    }
}
function test1() {
    var arrObj0 = {};
    if (arrObj0?.length) {
        for (const v12 of IntArr0) {
            if (typeof v12) {
                continue;
            }
            try {
            } catch(e14) {
                continue;
            } finally {
            }
            break;
        }
    }
}
function test2() {
    var obj1 = {};
    let v19;
    try { v19 = Array(); } catch (e) {}
    var ary = v19;
    let v22;
    try { v22 = new Int8Array(); } catch (e) {}
    var i8 = v22;
    if (!(-530320868 >= (obj1?.method1 & 255))) {
        for (const v31 of i8) {
        }
    }
    ary | 0;
}
function test3() {
    let v36;
    try { v36 = new Array(); } catch (e) {}
    var IntArr0 = v36;
    var VarArr0 = [];
    try {
    } catch(e40) {
    } finally {
        do {
            try {
                try { VarArr0.reverse(); } catch (e) {}
            } catch(e42) {
                continue;
            } finally {
            }
        } while (IntArr0?.[5])
    }
}
function test5() {
    for (let i47 = 0, i48 = /x/g; i47;) {
        {
            if (/x/) {
                try {
                } catch(e54) {
                }
            } else {
                throw "err";
                while ((() => {
                        const v57 = Array?.isArray;
                        const v58 = /x/g;
                        let v60;
                        try { v60 = new v57(v58, "u56DC"); } catch (e) {}
                        return v60 && 0;
                    })()) {
                }
            }
        }
    }
}
function test4() {
    var obj0 = {};
    var obj1 = {};
    var arrObj0 = {};
    function f70() {
    }
    var func0 = f70;
    function f72() {
    }
    var func2 = f72;
    obj0.method1 = func0;
    obj1.method1 = func2;
    let v75;
    try { v75 = Array(); } catch (e) {}
    var ary = v75;
    let v78;
    try { v78 = Object(obj1); } catch (e) {}
    var protoObj1 = v78;
    while (typeof 11) {
        const v83 = {};
        let v84;
        try { v84 = Object.defineProperty(obj1, "prop1", v83); } catch (e) {}
        let v85;
        try { v85 = ary.unshift(v84); } catch (e) {}
        let v86;
        try { v86 = obj0.method1(v85); } catch (e) {}
        try { protoObj1.method1(v86); } catch (e) {}
        try {
        } catch(e88) {
            continue;
        } finally {
            obj1.prop1 = typeof arrObj0?.length;
            break;
        }
    }
}
function test6() {
    var litObj0 = {};
    for (;
        87587180 < typeof ("prop0" in litObj0);
        (() => {
            try { arrObj0(); } catch (e) {}
        })()) {
        try {
            continue;
        } finally {
            let v102;
            try { v102 = IntArr0(); } catch (e) {}
            var v1 = v102;
            while (1) {
                try { WScript.Echo("help"); } catch (e) {}
                if (num > 10) {
                    try { WScript.Echo("help2"); } catch (e) {}
                }
            }
        }
    }
}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test0(); } catch (e) {}
try { test1(); } catch (e) {}
try { test1(); } catch (e) {}
try { test1(); } catch (e) {}
try { test2(); } catch (e) {}
try { test2(); } catch (e) {}
try { test2(); } catch (e) {}
try { test3(); } catch (e) {}
try { test3(); } catch (e) {}
try { test3(); } catch (e) {}
try { test4(); } catch (e) {}
try { test4(); } catch (e) {}
try { test4(); } catch (e) {}
try { test5(); } catch (e) {}
try { test5(); } catch (e) {}
try { test5(); } catch (e) {}
try { test6(); } catch (e) {}
try { test6(); } catch (e) {}
try { test6(); } catch (e) {}
try { WScript.Echo("passed"); } catch (e) {}
