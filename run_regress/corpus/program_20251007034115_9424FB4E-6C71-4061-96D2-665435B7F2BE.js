const UNHANDLED = 0;
const HANDLED = 1;
const v5 = new Map();
let rejections = v5;
function rejectionTracker(a8, a9) {
    rejections.set(a8, a9);
}
let reject;
const v14 = (a15, a16) => {
    reject = a16;
    return a16;
};
const v17 = new Promise(v14);
let p = v17;
rejections.has(p);
reject("reason");
rejections.get(p);
const v24 = (a25) => {
    return a25;
};
const v26 = (a27) => {
    return a27;
};
p.then(v24, v26);
rejections.get(p);
rejections.clear();
const v31 = (a32, a33) => {
    reject = a33;
    return a33;
};
const v34 = new Promise(v31);
rejections.has(p = v34);
const v37 = (a38) => {
    return a38;
};
const v39 = (a40) => {
    return a40;
};
p.then(v37, v39);
reject("reason");
rejections.has(p);
this.reportCompare && reportCompare(true, true);
