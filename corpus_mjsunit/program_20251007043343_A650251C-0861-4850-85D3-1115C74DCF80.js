var types = [Array,Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Uint8ClampedArray,Float32Array,Float64Array];
var results1 = [-2,-2,254,-2,65534,-2,4294967294,0,-2,-2];
var results2 = [,-1,255,-1,65535,-1,4294967295,0,-1,-1];
var results3 = [0,0,0,0,0,0,0,0,0,0];
var results4 = [1,1,1,1,1,1,1,1,1,1];
const kElementCount = 40;
function do_slice(a74) {
    return Array.prototype.slice.call(a74, 4, 8);
}
for (let i81 = 0; i81 < types.length; i81++) {
    var type = types[i81];
    const v89 = new type(kElementCount);
    var a = v89;
    for (let i92 = 0; i92 < kElementCount; ++i92) {
        a[i92] = i92 - 6;
    }
    delete a[5];
    var sliced = do_slice(a);
    results1[i81];
    sliced[0];
    results2[i81];
    sliced[1];
    results3[i81];
    sliced[2];
    results4[i81];
    sliced[3];
}
