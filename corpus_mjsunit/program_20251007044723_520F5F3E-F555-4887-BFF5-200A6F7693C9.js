const t0 = Array.prototype;
t0[1] = 5;
function arrayEq(a4, a5) {
    if (a4.length !== a5.length) {
        const v12 = new Error([a4,"\n\n",a5]);
        throw v12;
    }
    for (let i14 = 0; i14 < a4.length; i14++) {
        if (a4[i14] !== a5[i14]) {
            const v26 = new Error([a4,"\n\n",a5]);
            throw v26;
        }
    }
}
let obj = {};
arrayEq(([1,2,3]).concat(4), [1,2,3,4]);
arrayEq(([1,2,3]).concat(1.34), [1,2,3,1.34]);
arrayEq(([1.35,2,3]).concat(1.34), [1.35,2,3,1.34]);
arrayEq(([1.35,2,3]).concat(obj), [1.35,2,3,obj]);
arrayEq(([1,2,3]).concat(obj), [1,2,3,obj]);
