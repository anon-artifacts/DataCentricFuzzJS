console.log("This test checks the behavior of [[DefineOwnProperty]] applied to Array objects (see ES5.1 15.4.5.1).");
const v3 = [];
function f5() {
    return true;
}
Object.defineProperty(v3, "x", { get: f5 }).x;
const v11 = [];
Object.defineProperty(v11, "length", { value: 1 }).length;
const v17 = [];
var a = Object.defineProperty(v17, "length", { writable: false });
a[1] = 1;
a.length;
const v25 = [];
var a = Object.defineProperty(v25, "length", { writable: false });
a.length = 1;
a.length;
const v33 = [];
var a = Object.defineProperty(v33, "length", {});
a.length = 1;
a.length;
try {
    const v40 = [];
    function f42() {
        return true;
    }
    Object.defineProperty(v40, "length", { get: f42 });
} catch(e46) {
}
try {
    const v47 = [];
    Object.defineProperty(v47, "length", { enumerable: true });
} catch(e52) {
}
try {
    const v53 = [];
    Object.defineProperty(v53, "length", { configurable: true });
} catch(e58) {
}
try {
    const v59 = [];
    const v63 = Object.defineProperty(v59, "length", { writable: false });
    Object.defineProperty(v63, "length", { writable: true });
} catch(e68) {
}
const v69 = [];
var a = Object.defineProperty(v69, "0", { value: 42 });
a[0];
const v77 = [42];
var a = Object.defineProperty(v77, "0", { writable: false });
a[0] = 1;
a[0];
const v86 = [42];
var a = Object.defineProperty(v86, "0", { enumerable: false });
a[0] + Object.keys(a).length;
const v97 = [42];
var a = Object.defineProperty(v97, "0", { configurable: false });
a.length = 0;
a[0];
var foo = 0;
const v108 = [];
function f110(a111) {
    foo = a111;
}
const t63 = Object.defineProperty(v108, "0", { set: f110 });
t63[0] = 42;
const v114 = [];
function f116() {
    return true;
}
Object.defineProperty(v114, "0", { get: f116 })[0];
const v122 = [true];
const v127 = Object.defineProperty(v122, "0", { configurable: true, writable: false });
Object.defineProperty(v127, "0", { writable: true })[0];
try {
    const v134 = [true];
    const v139 = Object.defineProperty(v134, "0", { configurable: false, writable: false });
    Object.defineProperty(v139, "0", { writable: true })[0];
} catch(e145) {
}
const v146 = [];
const v151 = Object.defineProperty(v146, "0", { value: 1, writable: true });
Object.defineProperty(v151, "0", { value: 2 })[0];
const v157 = [];
const v161 = Object.defineProperty(v157, "0", { value: 1 });
Object.defineProperty(v161, "0", { value: 1 })[0];
const v167 = [];
const v170 = Number.NaN;
const v172 = Object.defineProperty(v167, "0", { value: v170 });
const v175 = -Number.NaN;
Object.defineProperty(v172, "0", { value: v175 })[0];
const v179 = [];
const v184 = ("okay").substring(0, 2);
const v186 = Object.defineProperty(v179, "0", { value: v184 });
const v191 = ("not ok").substring(4, 6);
Object.defineProperty(v186, "0", { value: v191 })[0];
const v195 = [];
const v199 = Object.defineProperty(v195, "0", { value: true });
Object.defineProperty(v199, "0", { value: true })[0];
const v205 = [];
const v209 = Object.defineProperty(v205, "0", { value: false });
Object.defineProperty(v209, "0", { value: false })[0];
const v215 = [];
const v219 = Object.defineProperty(v215, "0", { value: null });
Object.defineProperty(v219, "0", { value: null })[0];
const v225 = [];
const v229 = Object.defineProperty(v225, "0", { value: undefined });
Object.defineProperty(v229, "0", { value: undefined })[0];
const v235 = [];
const v239 = Object.defineProperty(v235, "0", { value: Math });
Object.defineProperty(v239, "0", { value: Math })[0];
try {
    const v244 = [];
    const v248 = Object.defineProperty(v244, "0", { value: 1 });
    Object.defineProperty(v248, "0", { value: 2 })[0];
} catch(e254) {
}
try {
    const v255 = [];
    const v259 = Object.defineProperty(v255, "0", { value: "okay" });
    Object.defineProperty(v259, "0", { value: "not ok" })[0];
} catch(e265) {
}
try {
    const v266 = [];
    const v270 = Object.defineProperty(v266, "0", { value: true });
    Object.defineProperty(v270, "0", { value: false })[0];
} catch(e276) {
}
try {
    const v277 = [];
    const v281 = Object.defineProperty(v277, "0", { value: false });
    Object.defineProperty(v281, "0", { value: true })[0];
} catch(e287) {
}
try {
    const v288 = [];
    const v291 = Object.defineProperty(v288, "0", { value: Math });
    Object.defineProperty(v291, "0", { value: Object })[0];
} catch(e296) {
}
try {
    const v297 = [];
    const v301 = Object.defineProperty(v297, "0", { value: null });
    Object.defineProperty(v301, "0", { value: undefined })[0];
} catch(e307) {
}
try {
    const v308 = [];
    const v312 = Object.defineProperty(v308, "0", { value: undefined });
    Object.defineProperty(v312, "0", { value: null })[0];
} catch(e318) {
}
const v320 = Array.prototype;
function f322() {
    throw false;
}
Object.defineProperty(v320, "0", { set: f322 });
const v326 = Array.prototype;
function f328() {
    throw false;
}
Object.defineProperty(v326, "1", { set: f328 });
var arrObj = [,false];
function f337(a338) {
    this.set = a338 === 42;
}
Object.defineProperty(arrObj, "0", { set: f337 });
arrObj[0] = 42;
arrObj.set;
arrObj[1] = true;
arrObj[1];
successfullyParsed = true;
