var output = [];
function g(a3) {
    L = a3?.length;
    for (let i7 = 0; i7 < L; i7++) {
        let v13;
        try { v13 = a3.charAt(); } catch (e) {}
        a = v13;
    }
}
function h(a16, a17) {
    results = [];
    for (let i21 = 0; i21 < 99; ++i21) {
        for (let i28 = 0; i28 < 99; ++i28) {
            try {
                let v34;
                try { v34 = a16(); } catch (e) {}
                try { results.push(v34); } catch (e) {}
            } catch(e37) {
            }
        }
    }
    let v40;
    try { v40 = uneval(results); } catch (e) {}
    let v41;
    try { v41 = g(v40); } catch (e) {}
    try { output.push(v41); } catch (e) {}
}
function f43(a44, a45) {
}
m = f43;
const v48 = [];
try { h(m, v48); } catch (e) {}
try {
    try { output.push(x); } catch (e) {}
    let v53;
    try { v53 = s(); } catch (e) {}
    let x = v53;
} catch(e55) {
}
output?.length;
output?.[0];
