function f0() {
}
const v3 = { a: 1.4591345406492043e+52, r: 1.4591345406492043e+52 };
const v6 = { a: 9.519035115884797e+58, r: 1.5230456185415676e+60 };
const v9 = { a: 19506585619292416, r: 19506585619292416 };
const v11 = -3.11023435262239e+74;
const v13 = -3.11023435262239e+74;
const v14 = { a: v11, r: v13 };
const v17 = { a: 1.1119459627204853e+50, r: 1.1119459627204853e+50 };
const v19 = -2.4641527261644233e+26;
const v21 = -2.4641527261644233e+26;
const v22 = { a: v19, r: v21 };
const v24 = -1.2646784837691e+42;
const v26 = -1.2646784837691e+42;
const v27 = { a: v24, r: v26 };
const v29 = -1.1304243015870137e+50;
const v31 = -1.1304243015870137e+50;
const v32 = { a: v29, r: v31 };
const v35 = { a: 635792, r: 635792 };
const v38 = { a: 6429207320195844096, r: 0 };
const v40 = -2.4863356789374174e+73;
const v42 = -2.4863356789374174e+73;
const v43 = { a: v40, r: v42 };
const v46 = { a: 5.242487323547315e+45, r: 3.276554577217072e+44 };
const v48 = -8.640342650348932e+40;
const v50 = -8.640342650348932e+40;
const v51 = { a: v48, r: v50 };
const v53 = -3.104331571875883e+57;
const v55 = -3.104331571875883e+57;
const v56 = { a: v53, r: v55 };
const v59 = { a: 129601360, r: 129601360 };
const v61 = -5.711813140251579e+58;
const v63 = -5.711813140251579e+58;
const v64 = { a: v61, r: v63 };
const v66 = -1.1265470175593506e+48;
const v68 = -0;
const v69 = { a: v66, r: v68 };
const v71 = -253748984612240;
const v73 = -4059983753795936;
const v74 = { a: v71, r: v73 };
const v76 = -8.021802824625691e+29;
const v78 = -8.021802824625691e+29;
const v79 = { a: v76, r: v78 };
var data = [v3,v6,v9,v14,v17,v22,v27,v32,v35,v38,v43,v46,v51,v56,v59,v64,v69,v74,v79,{ a: 2.796189770316516e+69, r: 0 }];
var error_count = 0;
for (let i88 = 0; i88 < data?.length; i88++) {
    var d = data?.[i88];
    let v96 = d?.a;
    var r = --v96;
    if (d?.r !== r) {
        const v103 = d?.a;
        let v104;
        try { v104 = v103.toString(16); } catch (e) {}
        const v105 = "Input:    " + v104;
        try { f0(v105); } catch (e) {}
        let v109;
        try { v109 = r.toString(16); } catch (e) {}
        const v110 = "Result:   " + v109;
        try { f0(v110); } catch (e) {}
        const v114 = "Expected: " + d?.r;
        try { f0(v114); } catch (e) {}
        error_count++;
    }
}
if (error_count !== 0) {
    const v122 = ("Finished with " + error_count) + " errors.";
    try { f0(v122); } catch (e) {}
    try { quit(1); } catch (e) {}
}
