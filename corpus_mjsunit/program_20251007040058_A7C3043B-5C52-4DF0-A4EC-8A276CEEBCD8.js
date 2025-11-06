function f0() {
}
var BUGNUMBER = 312385;
var summary = "Generic methods with null or undefined |this|";
var actual = "";
var expect = true;
var voids = [null,,];
function noop() {
}
const v14 = [];
const v15 = { substring: v14 };
const v16 = [];
const v17 = { toLowerCase: v16 };
const v18 = [];
const v19 = { toUpperCase: v18 };
const v20 = [];
const v21 = { charAt: v20 };
const v22 = [];
const v23 = { charCodeAt: v22 };
const v24 = [];
const v25 = { indexOf: v24 };
const v26 = [];
const v27 = { lastIndexOf: v26 };
const v28 = [];
const v29 = { toLocaleLowerCase: v28 };
const v30 = [];
const v31 = { toLocaleUpperCase: v30 };
const v32 = [];
const v33 = { localeCompare: v32 };
const v35 = [/(?:)/];
const v36 = { match: v35 };
const v37 = [];
const v38 = { search: v37 };
const v39 = [];
const v40 = { replace: v39 };
const v41 = [];
const v42 = { split: v41 };
const v43 = [];
const v44 = { substr: v43 };
const v45 = [];
const v46 = { concat: v45 };
const v47 = [];
const v49 = [v15,v17,v19,v21,v23,v25,v27,v29,v31,v33,v36,v38,v40,v42,v44,v46,{ slice: v47 }];
const v50 = [];
const v51 = { join: v50 };
const v52 = [];
const v53 = { reverse: v52 };
const v54 = [];
const v55 = { sort: v54 };
const v56 = [];
const v57 = { unshift: v56 };
const v58 = [];
const v59 = { concat: v58 };
const v60 = [];
const v61 = { indexOf: v60 };
const v62 = [];
const v63 = { lastIndexOf: v62 };
const v64 = [noop];
const v65 = { map: v64 };
const v66 = [noop];
const v67 = { filter: v66 };
const v68 = [noop];
const v69 = { some: v68 };
const v70 = [noop];
const v72 = [v51,v53,v55,v57,v59,v61,v63,v65,v67,v69,{ every: v70 }];
var generics = { String: v49, Array: v72 };
f0(BUGNUMBER);
f0(summary);
var global = this;
for (const v79 in generics) {
    var methods = generics[v79];
    for (let i83 = 0; i83 < methods.length; i83++) {
        var method = methods[i83];
        for (const v91 in method) {
            for (let i93 = 0; i93 < voids.length; i93++) {
                var Constructor = global[v79];
                var argsLen = method[v91].length;
                (argsLen === 0) || (argsLen === 1);
                var generic = Constructor[v91];
                var prototypy = Constructor.prototype[v91];
                typeof generic;
                typeof prototypy;
                try {
                    switch (method[v91].length) {
                        case 0:
                            generic(voids[i93]);
                            break;
                        case 1:
                            generic(voids[i93], method[v91][0]);
                            break;
                    }
                    const v138 = new Error((((v79 + ".") + v91) + " must throw for null or ") + "undefined first argument");
                    throw v138;
                } catch(e139) {
                    e139 instanceof TypeError;
                    ((("Didn't get a TypeError for " + v79) + ".") + v91) + " called with null or undefined first argument";
                }
                try {
                    prototypy.apply(voids[i93], method[v91][0]);
                    const v162 = new Error((((v79 + ".prototype.") + v91) + " must throw ") + "for null or undefined this");
                    throw v162;
                } catch(e163) {
                    e163 instanceof TypeError;
                    (((v79 + ".prototype.") + v91) + "didn't throw a ") + "TypeError when called with null or undefined this";
                }
            }
        }
    }
}
if (typeof f0 === "function") {
    f0(true, true);
}
f0("Tests finished.");
