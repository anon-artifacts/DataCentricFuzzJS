function f0() {
}
var BUGNUMBER = 329383;
var summary = "Math copysign issues";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
var inputs = [-Infinity,-10.01,-9.01,-8.01,-7.01,-6.01,-5.01,-4.01,-Math.PI,-3.01,-2.01,-1.01,-0.5,-0.49,-0.01,-0,0,+0,0.01,0.49,0.5,0,1.01,2.01,3.01,Math.PI,4.01,5.01,6.01,7.01,8.01,9.01,10.01,Infinity];
var iinput;
for ((() => {
        iinput = 0;
    })();
    iinput < inputs.length;
    iinput++) {
    var input = inputs[iinput];
    f0(Math.round(input), emulateRound(input), ((summary + ": Math.round(") + input) + ")");
}
f0(isNaN(Math.round(NaN)), isNaN(emulateRound(NaN)), ((summary + ": Math.round(") + input) + ")");
function emulateRound(a96) {
    if (!isFinite(a96) || (a96 === 0)) {
        return a96;
    }
    if ((-0.5 <= a96) && (a96 < 0)) {
        return -0;
    }
    return Math.floor(a96 + 0.5);
}
var z;
z = Math.min(-0, 0);
f0(-Math.PI, Math.atan2(z, z), summary + ": Math.atan2(-0, -0)");
f0(-Infinity, 1 / z, summary + ": 1/-0");
z = Math.max(-0, 0);
f0(0, Math.atan2(z, z), summary + ": Math.atan2(0, 0)");
f0(Infinity, 1 / z, summary + ": 1/0");
