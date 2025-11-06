const v5 = new Set(["testing","testing",123]);
var s = v5;
s.size;
const v15 = -0;
const v18 = -Infinity;
var values = [,null,false,NaN,0,v15,6.022e+23,v18,"","xyzzy",{},Math.sin];
for (const v26 of values) {
    const v27 = {};
    const v28 = {};
    const v29 = {};
    var a = [v26,v27,v28,v29,v26,{},v26,v26];
    const v33 = new Set(a);
    (s = v33).size;
    s.has(v26);
}
