function test(a1) {
    let v4;
    try { v4 = a1.splice(2, 2); } catch (e) {}
    a1 = v4;
    let v7;
    try { v7 = a1.slice(0, 5); } catch (e) {}
    a1 = v7;
    const v11 = [1,2,3];
    let v12;
    try { v12 = a1.concat(v11); } catch (e) {}
    a1 = v12;
    return a1;
}
try { noInline(test); } catch (e) {}
function arrayEq(a16, a17) {
    if (a16?.length !== a17?.length) {
        let v22;
        try { v22 = new Error(); } catch (e) {}
        throw v22;
    }
    for (let i24 = 0; i24 < a16?.length; i24++) {
        if (a16?.[i24] !== a17?.[i24]) {
            let v34;
            try { v34 = new Error(); } catch (e) {}
            throw v34;
        }
    }
}
for (let i36 = 0; i36 < 100; i36++) {
    const v51 = [1,2,3,4,5,6,7,8,9];
    let v52;
    try { v52 = test(v51); } catch (e) {}
    const v58 = [3,4,1,2,3];
    try { arrayEq(v52, v58); } catch (e) {}
}
class C61 extends Array {
}
for (let i63 = 0; i63 < 100; i63++) {
    let v78;
    try { v78 = new C61(1, 2, 3, 4, 5, 6, 7, 8, 9); } catch (e) {}
    let v79;
    try { v79 = test(v78); } catch (e) {}
    let result = v79;
    const v86 = [3,4,1,2,3];
    try { arrayEq(result, v86); } catch (e) {}
    if (!(result instanceof C61)) {
        let v91;
        try { v91 = new Error(); } catch (e) {}
        throw v91;
    }
}
for (let i93 = 0; i93 < 100; i93++) {
    const v108 = [1,2,3,4,5,6,7,8,9];
    let v109;
    try { v109 = test(v108); } catch (e) {}
    const v115 = [3,4,1,2,3];
    try { arrayEq(v109, v115); } catch (e) {}
}
const t58 = Array?.prototype;
delete t58?.sort;
for (let i120 = 0; i120 < 100; i120++) {
    const v135 = [1,2,3,4,5,6,7,8,9];
    let v136;
    try { v136 = test(v135); } catch (e) {}
    const v142 = [3,4,1,2,3];
    try { arrayEq(v136, v142); } catch (e) {}
}
for (let i145 = 0; i145 < 100; i145++) {
    let v160;
    try { v160 = new C61(1, 2, 3, 4, 5, 6, 7, 8, 9); } catch (e) {}
    let v161;
    try { v161 = test(v160); } catch (e) {}
    let result = v161;
    const v168 = [3,4,1,2,3];
    try { arrayEq(result, v168); } catch (e) {}
    if (!(result instanceof C61)) {
        let v173;
        try { v173 = new Error(); } catch (e) {}
        throw v173;
    }
}
