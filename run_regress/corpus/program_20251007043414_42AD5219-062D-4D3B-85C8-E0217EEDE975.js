const v1 = new Array();
var o = v1;
const v4 = new Object();
var a = v4;
function propString(a7) {
    function f8() {
        var ret = "a" + a7;
        return ret;
    }
    return f8;
}
function init(a13, a14) {
    for (let i16 = 0; i16 < 21; i16++) {
        const v22 = propString(i16);
        Object.defineProperty(a13, i16, { get: v22 });
        a14["a" + i16] = i16;
    }
}
init(o, a);
print(JSON.stringify(a, o));
const v35 = new Number(1.5);
print(JSON.stringify(true, [v35,true]));
const v42 = new Number(1.5);
print(JSON.stringify(false, [v42,true]));
const v49 = new Number(1.5);
print(JSON.stringify(null, [v49,true]));
print(JSON.stringify(a, [false,"a0",true,"a10",false]));
