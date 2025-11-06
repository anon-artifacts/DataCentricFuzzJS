function CheckSequence(a1, a2) {
    var array = [1,2,3];
    var callback_count = 0;
    function f10() {
        callback_count++;
        return a2();
    }
    var callback_wrapper = f10;
    function f15() {
        delete array[1];
    }
    Object.defineProperty(array, "1", { get: f15, configurable: true });
    array.hasOwnProperty("1");
    a1.apply(array, [callback_wrapper,"argument"]);
    array.hasOwnProperty("1");
}
const v32 = Array.prototype.every;
function f33() {
    return true;
}
CheckSequence(v32, f33);
const v37 = Array.prototype.filter;
function f38() {
    return true;
}
CheckSequence(v37, f38);
const v42 = Array.prototype.forEach;
function f43() {
    return 0;
}
CheckSequence(v42, f43);
const v47 = Array.prototype.map;
function f48() {
    return 0;
}
CheckSequence(v47, f48);
const v52 = Array.prototype.reduce;
function f53() {
    return 0;
}
CheckSequence(v52, f53);
const v57 = Array.prototype.reduceRight;
function f58() {
    return 0;
}
CheckSequence(v57, f58);
const v62 = Array.prototype.some;
function f63() {
    return false;
}
CheckSequence(v62, f63);
