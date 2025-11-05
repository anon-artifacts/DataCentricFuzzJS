function f0() {
    const v1 = {};
    const v4 = Number.prototype.toExponential;
    try { v4.call(v1); } catch (e) {}
}
f0();
function f8() {
    const v9 = {};
    const v12 = Number.prototype.toPrecision;
    try { v12.call(v9); } catch (e) {}
}
f8();
function f15() {
    const v16 = {};
    const v19 = Number.prototype.toFixed;
    try { v19.call(v16); } catch (e) {}
}
f15();
function f22() {
    const v23 = {};
    const v26 = Number.prototype.toString;
    try { v26.call(v23); } catch (e) {}
}
f22();
function f29() {
    const v30 = {};
    const v33 = Number.prototype.toLocaleString;
    try { v33.call(v30); } catch (e) {}
}
f29();
function f36() {
    const v37 = {};
    const v40 = Number.prototype.ValueOf;
    try { v40.call(v37); } catch (e) {}
}
f36();
const v45 = new Number(1);
var x_obj = v45;
function f47() {
}
x_obj.valueOf = f47;
Number.prototype.toExponential.call(x_obj, 2);
Number.prototype.toPrecision.call(x_obj, 2);
Number.prototype.toFixed.call(x_obj, 2);
Number.prototype.toExponential.call(1, 2);
Number.prototype.toPrecision.call(1, 2);
Number.prototype.toFixed.call(1, 2);
var f_flag = false;
function f83() {
    f_flag = true;
    return 1000;
}
var f_obj = { valueOf: f83 };
Number.prototype.toExponential.call(NaN, f_obj);
f_flag = false;
const v97 = 1 / 0;
Number.prototype.toExponential.call(v97, f_obj);
f_flag = false;
const v106 = -1 / 0;
Number.prototype.toExponential.call(v106, f_obj);
f_flag = false;
Number.prototype.toPrecision.call(NaN, f_obj);
f_flag = false;
const v119 = 1 / 0;
Number.prototype.toPrecision.call(v119, f_obj);
f_flag = false;
const v128 = -1 / 0;
Number.prototype.toPrecision.call(v128, f_obj);
f_flag = false;
function f133() {
    const v135 = Number.prototype.toFixed;
    try { v135.call(NaN, f_obj); } catch (e) {}
}
f133();
f_flag = false;
function f140() {
    const v143 = 1 / 0;
    const v145 = Number.prototype.toFixed;
    try { v145.call(v143, f_obj); } catch (e) {}
}
f140();
f_flag = false;
function f149() {
    const v153 = -1 / 0;
    const v155 = Number.prototype.toFixed;
    try { v155.call(v153, f_obj); } catch (e) {}
}
f149();
