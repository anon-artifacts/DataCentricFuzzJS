function f0() {
}
let v2;
try { v2 = Symbol(); } catch (e) {}
let v4;
try { v4 = Symbol("0"); } catch (e) {}
let v6;
try { v6 = Symbol.for("snowman"); } catch (e) {}
var symbols = [v2,v4,v6,Symbol?.iterator];
const v15 = -0;
let v20;
try { v20 = Symbol("0"); } catch (e) {}
var values = [,null,0,3.14,v15,NaN,"","alphabet",v20,{},[]];
for (const v30 of ["==","!=","===","!=="]) {
    const v35 = ("return a " + v30) + " b;";
    let v37;
    try { v37 = Function("a, b", v35); } catch (e) {}
    var f = v37;
    var expected = v30?.[0] == "!";
    for (const v43 of symbols) {
        for (const v44 of values) {
            try { f(v43, v44); } catch (e) {}
        }
    }
}
for (const v51 of ["<","<=",">",">="]) {
    const v56 = ("return a " + v51) + " b;";
    let v58;
    try { v58 = Function("a, b", v56); } catch (e) {}
    var f = v58;
    for (const v60 of symbols) {
        for (const v61 of values) {
            const v62 = () => {
                let v63;
                try { v63 = f(v60, v61); } catch (e) {}
                return v63;
            };
            try { v62(); } catch (e) {}
        }
    }
}
if (typeof f0 === "function") {
    try { f0(0, 0); } catch (e) {}
}
