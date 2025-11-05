function f0() {
}
function assert(a2) {
}
try { noInline(assert); } catch (e) {}
let v6;
try { v6 = new WeakMap(); } catch (e) {}
let weakMap = v6;
function objectKey(a9) {
    let v10;
    try { v10 = weakMap.get(a9); } catch (e) {}
    return v10;
}
try { noInline(objectKey); } catch (e) {}
const iters = 1000000;
let v15;
try { v15 = Date.now(); } catch (e) {}
let start = v15;
{
    let o = { f: 20 };
    var array = [];
    for (let i23 = 0; i23 < 10; i23++) {
        let newObject = { f: i23 };
        try { weakMap.set(newObject, i23); } catch (e) {}
        array[i23] = newObject;
    }
    for (let i33 = 0; i33 < iters; ++i33) {
        for (let i39 = 0; i39 < 10; i39++) {
            const v45 = array?.[i39];
            let v46;
            try { v46 = objectKey(v45); } catch (e) {}
            v46 === i39;
        }
    }
}
const verbose = false;
if (verbose) {
    let v50;
    try { v50 = Date.now(); } catch (e) {}
    const v51 = v50 - start;
    try { f0(v51); } catch (e) {}
}
