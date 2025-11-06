function f0() {
}
function cold_and_warm(a2, a3, a4) {
    let v6;
    try { v6 = uneval(a3); } catch (e) {}
    try { f0(v6); } catch (e) {}
    if (a2) {
        for (i = 0; i < 10; i++) {
            try { a2(); } catch (e) {}
        }
    }
}
function entry1() {
}
const v17 = { function: entry1 };
const v19 = ["entry1"];
try { cold_and_warm(entry1, v17, v19); } catch (e) {}
const v22 = {
    get x() {
    },
};
var getx = v22;
const v27 = Object.getOwnPropertyDescriptor(getx, "x").get;
const v29 = { object: getx, property: "x" };
const v31 = ["get x"];
try { cold_and_warm(v27, v29, v31); } catch (e) {}
const v35 = {
    set y(a34) {
    },
};
var sety = v35;
const v39 = Object.getOwnPropertyDescriptor(sety, "y").set;
const v42 = { object: sety, property: "y", value: "glerk" };
const v44 = ["set y"];
try { cold_and_warm(v39, v42, v44); } catch (e) {}
const v47 = Object.prototype.toString;
const v48 = {};
const v49 = { ToString: v48 };
const v50 = [];
try { cold_and_warm(v47, v49, v50); } catch (e) {}
function myToString() {
    return "string";
}
var toS = { toString: myToString };
const v56 = toS.toString;
const v57 = { ToString: toS };
const v59 = ["myToString"];
try { cold_and_warm(v56, v57, v59); } catch (e) {}
const v63 = { ToNumber: 5 };
const v64 = [];
try { cold_and_warm(undefined, v63, v64); } catch (e) {}
function myValueOf() {
    return 42;
}
var vOf = { valueOf: myValueOf };
const v70 = vOf.valueOf;
const v71 = { ToNumber: vOf };
const v73 = ["myValueOf"];
try { cold_and_warm(v70, v71, v73); } catch (e) {}
function relations() {
    return Object;
}
function wallpaper() {
    return 17;
}
var toSvOf = { toString: relations, valueOf: wallpaper };
const v80 = () => {
    try { toSvOf.toString(); } catch (e) {}
    try { toSvOf.valueOf(); } catch (e) {}
};
const v83 = { ToString: toSvOf };
const v86 = ["relations","wallpaper"];
try { cold_and_warm(v80, v83, v86); } catch (e) {}
function ettes() {
    return "6-inch lengths";
}
function deathBy() {
    return Math;
}
var vOftoS = { toString: ettes, valueOf: deathBy };
const v94 = () => {
    try { vOftoS.valueOf(); } catch (e) {}
    try { vOftoS.toString(); } catch (e) {}
};
const v97 = { ToNumber: vOftoS };
const v100 = ["deathBy","ettes"];
try { cold_and_warm(v94, v97, v100); } catch (e) {}
const v102 = () => {
    return 0;
};
const v105 = { eval: "Math.atan2(1,1);" };
const v107 = ["eval:entryPoint eval"];
try { cold_and_warm(v102, v105, v107); } catch (e) {}
