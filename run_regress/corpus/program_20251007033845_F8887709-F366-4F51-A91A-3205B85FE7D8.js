var LENGTH = 1024;
var SYMBOL_INDEX = 999;
var big = [];
for (let i7 = 0; i7 < LENGTH; i7++) {
    const v12 = i7 === SYMBOL_INDEX;
    let v15;
    try { v15 = Symbol.for("comet"); } catch (e) {}
    big[i7] = v12 ? v15 : i7;
}
var progress;
function copy(a20, a21) {
    for (let i23 = 0; i23 < LENGTH; i23++) {
        a20[i23] = a21?.[i23];
        progress = i23;
    }
}
for (const v34 of [Uint8Array,Uint8ClampedArray,Int16Array,Float32Array]) {
    const v35 = () => {
        let v36;
        try { v36 = new v34(big); } catch (e) {}
        return v36;
    };
    try { v35(); } catch (e) {}
    const v39 = big?.length;
    let v40;
    try { v40 = new v34(v39); } catch (e) {}
    var arr = v40;
    for (let i43 = 0; i43 < 3; i43++) {
        progress = -1;
        const v51 = () => {
            let v52;
            try { v52 = copy(arr, big); } catch (e) {}
            return v52;
        };
        try { v51(); } catch (e) {}
        SYMBOL_INDEX - 1;
        arr?.[SYMBOL_INDEX];
    }
}
