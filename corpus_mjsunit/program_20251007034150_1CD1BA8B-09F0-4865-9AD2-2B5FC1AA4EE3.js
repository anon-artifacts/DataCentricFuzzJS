const v0 = [7];
const v1 = [129,-4096,8569,8,-12];
[1000,4];
new WeakMap();
function F8(a10, a11, a12, a13) {
    if (!new.target) { throw 'must be called with new'; }
    this.c = v0;
    this.f = a10;
}
new F8(v1, 2147483647, v0, F8);
new F8(v1, -4294967297, v0, v1);
new F8(v0, -6285, v0, WeakMap);
function SameValue(a21, a22) {
    if (a21 === a22) {
        return (a21 !== 0) || ((1 / a21) === (1 / a22));
    }
    return (a21 !== a21) && (a22 !== a22);
}
function compare(a36, a37, a38) {
    for (let i40 = 0; i40 < 1000; ++i40) {
        var xi = (i40 % a37?.length) | 0;
        var yi = ((i40 + ((i40 / a38?.length) | 0)) % a38?.length) | 0;
        const v61 = a37?.[xi];
        const v62 = a38?.[yi];
        try { Object.is(v61, v62); } catch (e) {}
        const v65 = a37?.[xi];
        const v66 = a38?.[yi];
        try { SameValue(v65, v66); } catch (e) {}
    }
}
var compareTemplate = compare;
const v69 = {};
function f70() {
}
const v72 = {};
const v73 = {};
let v74;
try { v74 = new Proxy(v72, v73); } catch (e) {}
const v75 = { plain: v69, function: f70, proxy: v74 };
const objects = v74;
let v78;
try { v78 = Symbol(); } catch (e) {}
const sym = v78;
const v87 = [-1,0,1,2,2147483647];
const v95 = [2,1,0,-5,-2147483648];
const v96 = { name: "Homogenous-Int32", xs: v87, ys: v95 };
const v100 = [true,false];
const v103 = [true,false];
const v104 = { name: "Homogenous-Boolean", xs: v100, ys: v103 };
const v110 = [{},[],objects?.plain,objects?.proxy];
const v115 = [{},objects?.function,objects?.plain,objects?.proxy];
const v116 = { name: "Homogenous-Object", xs: v110, ys: v115 };
const v123 = ["","abc","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂","ABCabc"];
["abc","ABCABC","ABCABC","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂"];
const v130 = { name: "Homogenous-String", xs: v123 };
const v131 = Symbol?.match;
let v132;
try { v132 = Symbol(); } catch (e) {}
let v134;
try { v134 = Symbol.for("object-is-two"); } catch (e) {}
[sym,v131,v132,v134];
const v136 = {};
const v140 = [null,null];
const v141 = { ys: v140 };
const v145 = [,,];
const v146 = { ys: v145 };
[null,,sym,true,0,"",{}];
const v155 = {};
const v162 = [null,,sym,true,0,"",{}];
const v163 = { ys: v162 };
const v165 = {};
const v166 = {};
const v173 = [null,,sym,true,0,"",{}];
const v174 = { ys: v173 };
const v176 = {};
const v178 = {};
const v180 = {};
const v182 = {};
const v189 = [null,,sym,true,0,"",{}];
const v190 = { xs: v189 };
const v193 = {};
const v195 = { name: "Value-Boolean" };
const v196 = {};
const v198 = {};
const v199 = {};
const v200 = {};
[null,,sym,true,0,"",{}];
const v208 = {};
const v210 = {};
const v212 = {};
const v213 = {};
const v214 = {};
const v216 = {};
const testCases = [v96,v104,v116,v130,v136,v141,v146,v155,v163,v166,v174,v178,v182,v190,v195,v199,v208,v213,{}];
for (const v220 of testCases) {
    const v221 = `(${compareTemplate})`;
    try { eval(v221); } catch (e) {}
    for (let i225 = 0; i225 < 5; ++i225) {
    }
}
