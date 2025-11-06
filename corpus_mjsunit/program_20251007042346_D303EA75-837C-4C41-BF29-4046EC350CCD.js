const v0 = (a1, a2) => {
    return a2;
};
const v5 = new Int8Array(20);
var ab = v5.map(v0).buffer;
const v11 = new Int8Array(ab, 0, 10);
var ta = v11;
var seen_length = -1;
function f16(a17) {
    seen_length = a17;
    const v19 = new Int8Array(ab, 1, a17);
    return v19;
}
const v21 = Symbol.species;
ta.constructor = { [v21]: f16 };
-1;
[0,1,2,3,4,5,6,7,8,9];
var tb = ta.slice();
[0,0,0,0,0,0,0,0,0,0];
[0,0,0,0,0,0,0,0,0,0];
