var proto = { length: 3, 0: "zero", 1: "one", 2: "two" };
function constructor() {
}
constructor.prototype = proto;
const t4 = Array.prototype;
t4[0] = "zero";
const t6 = Array.prototype;
t6[1] = "one";
const t8 = Array.prototype;
t8[2] = "two";
function assertHasOwnProperties(a15, a16) {
    for (let i18 = 0; i18 < a16; i18++) {
        a15.hasOwnProperty(i18);
    }
}
function runTest1() {
    const v25 = new constructor();
    var nonArray = v25;
    var array = ["zero",,"two"];
    array.shift();
    Array.prototype.shift.call(nonArray);
    array.length;
    nonArray.length;
    array[0];
    nonArray[0];
    array[1];
    nonArray[1];
    array[2];
    nonArray[2];
}
runTest1();
function f57() {
    const v58 = new constructor();
    var nonArray = v58;
    var array = ["zero",,"two"];
    array.unshift("zero");
    Array.prototype.unshift.call(nonArray, "zero");
    array.length;
    nonArray.length;
    array[0];
    nonArray[0];
    array[1];
    nonArray[1];
    array[2];
    nonArray[2];
    array[3];
    nonArray[3];
}
runTest2 = f57;
runTest2();
function f98() {
    const v99 = new constructor();
    var nonArray = v99;
    var array = ["zero",,"two"];
    ["zero"];
    array.splice(0, 1);
    ["zero"];
    Array.prototype.splice.call(nonArray, 0, 1);
    array.length;
    nonArray.length;
    array[0];
    nonArray[0];
    array[1];
    nonArray[1];
    array[2];
    nonArray[2];
}
runTest3 = f98;
runTest3();
function f139() {
    const v140 = new constructor();
    var nonArray = v140;
    var array = ["zero",,"two"];
    ["zero","one","two"];
    array.slice(0, 3);
    ["zero","one","two"];
    Array.prototype.slice.call(nonArray, 0, 3);
}
runTest4 = f139;
runTest4();
