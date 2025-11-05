let s = 0;
let ff = [,,,];
for (const v11 of [1,2,3]) {
    s += v11;
    function f12() {
        return v11;
    }
    ff[v11 - 1] = f12;
}
ff[0]();
ff[1]();
ff[2]();
let x = 1;
s = 0;
for (const v33 of [x,x + 1,x + 2]) {
    s += v33;
}
s = 0;
var q = 1;
for (const v43 of [q,q + 1,q + 2]) {
    s += v43;
}
let z = 1;
s = 0;
for (let i49 = 1; z < 2; z++) {
    s += i49 + z;
}
s = "";
for (const v62 in [1,2,3]) {
    s += v62;
}
function f66() {
    let s = 0;
    for (const v73 of [1,2,3]) {
        s += v73;
    }
    let x = 1;
    s = 0;
    for (const v83 of [x,x + 1,x + 2]) {
        s += v83;
    }
    s = 0;
    var q = 1;
    for (const v93 of [q,q + 1,q + 2]) {
        s += v93;
    }
    s = "";
    for (const v100 in [1,2,3]) {
        s += v100;
    }
}
f66();
