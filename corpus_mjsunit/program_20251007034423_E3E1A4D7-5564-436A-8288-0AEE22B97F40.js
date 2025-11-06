function f0() {
}
const v3 = { a: 11788176, r: 11788176 };
const v6 = { a: 3.9940399107074386e+51, r: 3.9940399107074386e+51 };
const v9 = { a: 7.099457187218879e+43, r: 0 };
const v11 = -3.257992450841809e+62;
const v13 = -0;
const v14 = { a: v11, r: v13 };
const v16 = -1.5267010613990654e+73;
const v18 = -1.5267010613990654e+73;
const v19 = { a: v16, r: v18 };
const v21 = -9.55116697413545e+18;
const v23 = -9.55116697413545e+18;
const v24 = { a: v21, r: v23 };
const v26 = -1.6330400134379972e+36;
const v28 = -0;
const v29 = { a: v26, r: v28 };
const v31 = -2.4520185576248976e+63;
const v33 = -3.923229692199836e+64;
const v34 = { a: v31, r: v33 };
const v37 = { a: 0, r: 0 };
const v40 = { a: 2.778513586913965e+67, r: 0 };
const v43 = { a: 1.3321823370572626e+19, r: 2.13149173929162e+20 };
const v46 = { a: 1.5008953949115074e+21, r: 1.5008953949115074e+21 };
const v49 = { a: 1.9615895265921267e+43, r: 0 };
const v52 = { a: 38560, r: 0 };
const v54 = -1.909400829077452e+26;
const v56 = -1.909400829077452e+26;
const v57 = { a: v54, r: v56 };
const v60 = { a: 2.2681463673738544e+71, r: 2.2681463673738544e+71 };
const v63 = { a: 1.1268030558484512e+60, r: 0 };
const v65 = -2.2830212217935985e+39;
const v67 = -2.2830212217935985e+39;
const v68 = { a: v65, r: v67 };
const v71 = { a: 8.706233053501939e+46, r: 8.706233053501939e+46 };
const v73 = -1.2745742930083097e+80;
const v75 = -0;
var data = [v3,v6,v9,v14,v19,v24,v29,v34,v37,v40,v43,v46,v49,v52,v57,v60,v63,v68,v71,{ a: v73, r: v75 }];
var error_count = 0;
for (let i82 = 0; i82 < data?.length; i82++) {
    var d = data?.[i82];
    let v90 = d?.a;
    var r = ++v90;
    if (d?.r !== r) {
        const v97 = d?.a;
        let v98;
        try { v98 = v97.toString(16); } catch (e) {}
        const v99 = "Input:    " + v98;
        try { f0(v99); } catch (e) {}
        let v103;
        try { v103 = r.toString(16); } catch (e) {}
        const v104 = "Result:   " + v103;
        try { f0(v104); } catch (e) {}
        const v108 = "Expected: " + d?.r;
        try { f0(v108); } catch (e) {}
        error_count++;
    }
}
if (error_count !== 0) {
    const v116 = ("Finished with " + error_count) + " errors.";
    try { f0(v116); } catch (e) {}
    try { quit(1); } catch (e) {}
}
