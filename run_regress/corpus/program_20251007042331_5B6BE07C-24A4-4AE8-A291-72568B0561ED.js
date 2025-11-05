const v5 = new Int32Array([1,99,2]);
let outsideArray = v5;
function addingComparator(a8, a9) {
    if ((a8 == 99) || (a9 == 99)) {
        outsideArray[0] = 101;
        outsideArray[outsideArray.length - 1] = 102;
    }
    return a8 - a9;
}
outsideArray.sort(addingComparator);
const v22 = (a23) => {
    return ([1,2,99,101,102]).includes(a23);
};
outsideArray.every(v22);
const v37 = new Int32Array([1,99,2]);
outsideArray = v37;
function recursiveComparator(a39, a40) {
    outsideArray.sort();
    return a39 - a40;
}
outsideArray.sort(recursiveComparator);
const v44 = (a45) => {
    return outsideArray.includes(a45);
};
outsideArray.every(v44);
let nanComparatorData = [2112,42,1111,34];
const v55 = new Int32Array(nanComparatorData);
let nanComparatorArray = v55;
const v57 = (a58, a59) => {
    return NaN;
};
nanComparatorArray.sort(v57);
const v62 = (a63) => {
    return nanComparatorArray.includes(a63);
};
nanComparatorData.every(v62);
if (typeof reportCompare === "function") {
    reportCompare(true, true);
}
