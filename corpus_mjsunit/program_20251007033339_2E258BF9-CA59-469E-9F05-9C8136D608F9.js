function SameValue(a1, a2) {
    if (a1 === a2) {
        return (a1 !== 0) || ((1 / a1) === (1 / a2));
    }
    return (a1 !== a1) && (a2 !== a2);
}
function compare(a16, a17, a18) {
    for (let i20 = 0; i20 < 1000; ++i20) {
        var xi = (i20 % a17?.length) | 0;
        var yi = ((i20 + ((i20 / a18?.length) | 0)) % a18?.length) | 0;
        const v41 = a17?.[xi];
        const v42 = a18?.[yi];
        try { Object.is(v41, v42); } catch (e) {}
        const v45 = a17?.[xi];
        const v46 = a18?.[yi];
        try { SameValue(v45, v46); } catch (e) {}
    }
}
var compareTemplate = compare;
const v49 = {};
function f50() {
}
const v52 = {};
const v53 = {};
let v54;
try { v54 = new Proxy(v52, v53); } catch (e) {}
const objects = { plain: v49, function: f50, proxy: v54 };
let v58;
try { v58 = Symbol(); } catch (e) {}
const sym = v58;
const v67 = [-1,0,1,2,2147483647];
const v75 = [2,1,0,-5,-2147483648];
const v76 = { name: "Homogenous-Int32", xs: v67, ys: v75 };
const v80 = [true,false];
const v83 = [true,false];
const v84 = { name: "Homogenous-Boolean", xs: v80, ys: v83 };
const v90 = [{},[],objects?.plain,objects?.proxy];
const v95 = [{},objects?.function,objects?.plain,objects?.proxy];
const v96 = { name: "Homogenous-Object", xs: v90, ys: v95 };
const v103 = ["","abc","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂","ABCabc"];
const v109 = ["abc","ABC","ABCABC","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂"];
const v110 = { name: "Homogenous-String", xs: v103, ys: v109 };
const v112 = Symbol?.iterator;
let v113;
try { v113 = Symbol(); } catch (e) {}
let v115;
try { v115 = Symbol.for("object-is"); } catch (e) {}
const v116 = [v112,v113,v115,sym];
const v117 = Symbol?.match;
let v118;
try { v118 = Symbol(); } catch (e) {}
let v120;
try { v120 = Symbol.for("object-is-two"); } catch (e) {}
const v121 = [sym,v117,v118,v120];
const v122 = { name: "Homogenous-Symbol", xs: v116, ys: v121 };
const v126 = [null,null];
const v129 = [null,null];
const v130 = { name: "Homogenous-Null", xs: v126, ys: v129 };
const v134 = [,,];
const v137 = [,,];
const v138 = { name: "Homogenous-Undefined", xs: v134, ys: v137 };
const v144 = ["","abc","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂"];
const v151 = [null,,sym,true,0,"",{}];
const v152 = { name: "String-Value", xs: v144, ys: v151 };
const v156 = [null,null];
const v163 = [null,,sym,true,0,"",{}];
const v164 = { name: "Null-Value", xs: v156, ys: v163 };
const v168 = [,,];
const v175 = [null,,sym,true,0,"",{}];
const v176 = { name: "Undefined-Value", xs: v168, ys: v175 };
const v180 = [true,false];
const v187 = [null,,sym,true,0,"",{}];
const v188 = { name: "Boolean-Value", xs: v180, ys: v187 };
const v196 = [null,,sym,true,0,"",{}];
const v201 = ["","abc","αβγαβγ","𝐀𝐁𝐂𝐀𝐁𝐂"];
const v202 = { name: "Value-String", xs: v196, ys: v201 };
const v210 = [null,,sym,true,0,"",{}];
const v213 = [null,null];
const v214 = { name: "Value-Null", xs: v210, ys: v213 };
const v222 = [null,,sym,true,0,"",{}];
const v225 = [,,];
const v226 = { name: "Value-Undefined", xs: v222, ys: v225 };
const v234 = [null,,sym,true,0,"",{}];
const v237 = [,,];
const v238 = { name: "Value-Boolean", xs: v234, ys: v237 };
const v245 = [null,,sym,true,0,{}];
const v251 = [null,,sym,true,0,{}];
const v252 = { name: "Value-Value", xs: v245, ys: v251 };
const v260 = [null,,sym,true,0,"",{}];
const v267 = [null,,sym,true,0,"",{}];
const v268 = { name: "ValueMaybeString-ValueMaybeString", xs: v260, ys: v267 };
const v275 = [null,,sym,true,0,{}];
const v282 = [null,,sym,true,0,"",{}];
const v283 = { name: "Value-ValueMaybeString", xs: v275, ys: v282 };
const v291 = [null,,sym,true,0,"",{}];
const v297 = [null,,sym,true,0,{}];
const testCases = [v76,v84,v96,v110,v122,v130,v138,v152,v164,v176,v188,v202,v214,v226,v238,v252,v268,v283,{ name: "ValueMaybeString-Value", xs: v291, ys: v297 }];
for (const v301 of testCases) {
    const v302 = `(${compareTemplate})`;
    let v305;
    try { v305 = eval(v302); } catch (e) {}
    const compare = v305;
    for (let i308 = 0; i308 < 5; ++i308) {
        try { compare(name, xs, ys); } catch (e) {}
    }
}
