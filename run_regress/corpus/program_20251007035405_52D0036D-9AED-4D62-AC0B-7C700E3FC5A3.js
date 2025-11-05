function f0() {
}
const v3 = -12;
const v4 = { a: 12, r: v3 };
const v6 = -3.376223738644218e+52;
const v8 = { a: v6, r: 3.376223738644218e+52 };
const v10 = -3.408597170995603e+45;
const v12 = { a: v10, r: 3.408597170995603e+45 };
const v14 = -5.649810668774758e+57;
const v16 = { a: v14, r: 5.649810668774758e+57 };
const v18 = -5.958630457660687e+58;
const v20 = { a: v18, r: 5.958630457660687e+58 };
const v23 = -4.0101947976203283e+52;
const v24 = { a: 4.0101947976203283e+52, r: v23 };
const v26 = -2.3094354071336887e+49;
const v28 = { a: v26, r: 2.3094354071336887e+49 };
const v30 = -9.780520248703708e+36;
const v32 = { a: v30, r: 9.780520248703708e+36 };
const v35 = -3.4384203415724334e+29;
const v36 = { a: 3.4384203415724334e+29, r: v35 };
const v39 = -23831217240832;
const v40 = { a: 23831217240832, r: v39 };
const v43 = -6.900928455571621e+41;
const v44 = { a: 6.900928455571621e+41, r: v43 };
const v46 = -2.989612293669302e+53;
const v48 = { a: v46, r: 2.989612293669302e+53 };
const v51 = -1.3673687202925953e+25;
const v52 = { a: 1.3673687202925953e+25, r: v51 };
const v55 = -1568;
const v56 = { a: 1568, r: v55 };
const v59 = -0;
const v60 = { a: 6.246112154090498e+58, r: v59 };
const v62 = -6.484795080223042e+46;
const v64 = { a: v62, r: 0 };
const v67 = -1.3347935685088806e+66;
const v68 = { a: 1.3347935685088806e+66, r: v67 };
const v70 = -9.062069937545024e+24;
const v72 = { a: v70, r: 9.062069937545024e+24 };
const v74 = -3.3550718319169737e+22;
const v76 = { a: v74, r: 0 };
const v78 = -2.0578861010630096e+63;
var data = [v4,v8,v12,v16,v20,v24,v28,v32,v36,v40,v44,v48,v52,v56,v60,v64,v68,v72,v76,{ a: v78, r: 2.0578861010630096e+63 }];
var error_count = 0;
for (let i86 = 0; i86 < data?.length; i86++) {
    var d = data?.[i86];
    var r = -d?.a;
    if (d?.r !== r) {
        const v101 = d?.a;
        let v102;
        try { v102 = v101.toString(16); } catch (e) {}
        const v103 = "Input:    " + v102;
        try { f0(v103); } catch (e) {}
        let v107;
        try { v107 = r.toString(16); } catch (e) {}
        const v108 = "Result:   " + v107;
        try { f0(v108); } catch (e) {}
        const v112 = "Expected: " + d?.r;
        try { f0(v112); } catch (e) {}
        error_count++;
    }
}
if (error_count !== 0) {
    const v120 = ("Finished with " + error_count) + " errors.";
    try { f0(v120); } catch (e) {}
    try { quit(1); } catch (e) {}
}
