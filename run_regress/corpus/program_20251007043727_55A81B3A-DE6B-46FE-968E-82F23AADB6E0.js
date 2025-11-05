const v20 = new Int8Array([-256,255,0,-0,NaN,null,,-1,256,-128,-127,127,128]);
var arr = v20;
const v24 = new Uint8ClampedArray(arr.length);
var dst1 = v24;
const v28 = new Uint8Array(arr.length);
var dst2 = v28;
const v48 = new Uint8Array([-256,255,0,-0,NaN,null,,-1,256,-128,-127,127,128]);
var arr2 = v48;
const v51 = new Int8Array(arr2.length);
var dst3 = v51;
const v55 = new Int32Array(arr2.length);
var dst4 = v55;
dst1.set(arr);
dst2.set(arr);
dst3.set(arr);
dst4.set(arr);
for (i = 0; i < dst1.length; i++) {
    print((("dst1[" + i) + "] = ") + dst1[i]);
}
for (i = 0; i < dst2.length; i++) {
    print((("dst2[" + i) + "] = ") + dst2[i]);
}
for (i = 0; i < dst3.length; i++) {
    print((("dst3[" + i) + "] = ") + dst3[i]);
}
for (i = 0; i < dst4.length; i++) {
    print((("dst4[" + i) + "] = ") + dst4[i]);
}
