function denseCount(a1) {
    var c = 0;
    for (let i5 = 0; i5 < a1.length; i5++) {
        if (i5 in a1) {
            c++;
        }
    }
    return c;
}
const v15 = { size: 1 };
let a = [,,,,,,,,,,,,,,,,,,,,v15,{ size: 2 }];
const v22 = { size: 1 };
let b = ([,,,,,,,,,,,,,,,,,,,,v22,{ size: 2 }]).sort();
const v28 = (a29, a30) => {
    +a29.size - +a30.size;
};
const v38 = { size: 1 };
let c = ([,,,,,,,,,,,,,,,,,,,,v38,{ size: 2 }]).sort(v28);
a.length;
denseCount(a);
a.length;
b.length;
b.length;
c.length;
denseCount(a);
denseCount(b);
denseCount(b);
denseCount(c);
const v58 = new Array(5000);
let superSparce = v58;
superSparce[0] = 99;
superSparce[4000] = 0;
superSparce[4999] = -1;
superSparce.length;
denseCount(superSparce);
const v68 = (a69, a70) => {
    return (1 * a69) - a70;
};
superSparce.sort(v68);
superSparce.length;
denseCount(superSparce);
superSparce[0];
-1;
superSparce[1];
superSparce[2];
const v87 = new Array(2600);
let allHoles = v87;
allHoles.length;
denseCount(allHoles);
const v93 = (a94, a95) => {
    return (1 * a94) - a95;
};
allHoles.sort(v93);
allHoles.length;
denseCount(allHoles);
const v105 = new Array(2600);
let oneHole = v105;
oneHole[1399] = { size: 27 };
oneHole.length;
denseCount(oneHole);
const v113 = (a114, a115) => {
    +a114.size - +a115.size;
};
oneHole.sort(v113);
oneHole[0];
const v124 = { size: 27 };
oneHole.length;
denseCount(oneHole);
const v129 = (a130, a131) => {
    return (1 * a130) - a131;
};
Object.seal([0,99,-1]).sort(v129);
Object.seal([-1,0,99]);
const v149 = (a150, a151) => {
    return (1 * a150) - a151;
};
Object.seal([1,5,4,,,]).sort(v149);
Object.seal([1,4,5,,,]);
if (typeof reportCompare === "function") {
    reportCompare(0, 0);
}
