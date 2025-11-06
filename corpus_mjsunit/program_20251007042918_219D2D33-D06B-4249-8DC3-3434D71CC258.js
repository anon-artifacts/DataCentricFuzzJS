function selfsetelem(a1, a2) {
    a1[a2] = a1;
}
const v4 = new Array();
var arr = v4;
selfsetelem(arr, "prop0");
selfsetelem(arr, 0);
selfsetelem(arr, 1);
selfsetelem(arr, 0);
arr.prop0.toString();
