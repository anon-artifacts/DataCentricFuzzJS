function testSmiArrayConcat() {
    const v3 = [-12];
    var result = ([]).concat(v3);
    result.length;
    [-12];
}
testSmiArrayConcat();
function testDoubleArrayConcat() {
    const v16 = [-1073741825];
    var result = ([]).concat(v16);
    result.length;
    [-1073741825];
}
testDoubleArrayConcat();
function testSmiArrayNonConcatSpreadable() {
    var array = [-10];
    array[Symbol.isConcatSpreadable] = false;
    var result = ([]).concat(array);
    result.length;
    result[0].length;
    [-10];
    result[0];
}
testSmiArrayNonConcatSpreadable();
function testDoubleArrayNonConcatSpreadable() {
    var array = [-1073741825];
    array[Symbol.isConcatSpreadable] = false;
    var result = ([]).concat(array);
    result.length;
    result[0].length;
    [-1073741825];
    result[0];
}
testDoubleArrayNonConcatSpreadable();
const t33 = Array.prototype;
t33[Symbol.isConcatSpreadable] = false;
function testSmiArray() {
    const v76 = [-12];
    var result = ([]).concat(v76);
    result.length;
    result[0].length;
    result[1].length;
    [-12];
    result[1];
}
testSmiArray();
function testDoubleArray() {
    const v96 = [-1073741825];
    var result = ([]).concat(v96);
    result.length;
    result[0].length;
    result[1].length;
    [-1073741825];
    result[1];
}
testDoubleArray();
