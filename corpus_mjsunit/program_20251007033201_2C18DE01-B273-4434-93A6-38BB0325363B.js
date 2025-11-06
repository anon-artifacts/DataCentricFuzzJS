console.log("Tests that storing a value that is outside of the int32 range into a Uint32Array results in correct wrap-around.");
function foo(a4) {
    a4[0] = 2147829340;
}
const v8 = new Uint32Array(1);
var array = v8;
for (let i11 = 0; i11 < 200; ++i11) {
    foo(array);
    array[0];
}
