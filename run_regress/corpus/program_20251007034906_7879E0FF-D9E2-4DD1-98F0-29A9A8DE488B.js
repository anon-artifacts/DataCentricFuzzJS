console.log("Tests that assignments into arrays behave properly after the array is resized.");
function resize(a4) {
    a4[9999] = 0;
    return 1;
}
function getZerothEntry(a8) {
    return a8[0];
}
const v11 = new Array();
var A = v11;
A[0] = 0;
A[0] = resize(A);
getZerothEntry(A).toString();
