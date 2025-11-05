console.log("This tests that sort() is a stable sort.");
function clone(a4, a5) {
    for (i = 0; i < a4.length; i++) {
        a5[i] = a4[i];
    }
}
var arr = [];
const v19 = new Number(1);
arr[0] = v19;
const v21 = new Number(2);
arr[1] = v21;
const v23 = new Number(1);
arr[2] = v23;
const v25 = new Number(2);
arr[3] = v25;
var sortArr = [];
clone(arr, sortArr);
sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3];
sortArr.sort();
arr[0];
arr[1];
arr[2];
arr[3];
