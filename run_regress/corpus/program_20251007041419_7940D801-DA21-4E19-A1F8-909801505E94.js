var largeArray = [];
largeArray[16776960] = 123;
function sloppyArguments() {
    return arguments;
}
function sloppyArguments2(a6, a7) {
    return arguments;
}
function slowSloppyArguments() {
    arguments[1048575] = -1;
    return arguments;
}
function slowSloppyArguments2(a15, a16) {
    arguments[1048575] = -1;
    return arguments;
}
const v28 = -1;
const v31 = -2.2;
const v33 = -0;
const v36 = -Infinity;
const v41 = "a" + "b";
const v42 = {};
const v44 = { 1: 1 };
const v46 = { a: 1 };
const v49 = { 1: 1, 2: 2 };
const v52 = Object.create(null);
const v53 = [];
const v54 = {};
const v56 = [v54,{}];
const v60 = [1,1,1];
const v66 = [1.1,1.1,1.1,1.1,2];
const v68 = {};
const v70 = new Proxy(v68, {});
const v72 = new Date();
const v75 = new String(" a");
const v78 = new Uint8Array(12);
const v85 = new Float32Array([1,2,4,5]);
const v88 = new Uint8ClampedArray(2048);
const v89 = /asdf/;
const v91 = new RegExp();
const v92 = Object.create;
const v95 = Symbol.iterator;
const v98 = ([])[Symbol.iterator]();
const v100 = new Map();
const v102 = new Set();
const v103 = new Map();
const v104 = v103.entries();
const v105 = new Set();
var objects = [this,true,false,null,,1,v28,1.1,v31,v33,0,Infinity,v36,NaN,"aasdfasdfasdfasdf",v41,v42,v44,v46,v49,v52,v53,v56,v60,v66,largeArray,v70,v72,v75,v78,v85,v88,v89,v91,v92,Object,Array,v95,v98,v100,v102,v104,v105.entries(),sloppyArguments(),sloppyArguments(1, 2, 3, 4),sloppyArguments2(),sloppyArguments2(1, 2, 3, 4),slowSloppyArguments(),slowSloppyArguments(1, 2, 3, 4),slowSloppyArguments2(),slowSloppyArguments2(1, 2, 3, 4)];
