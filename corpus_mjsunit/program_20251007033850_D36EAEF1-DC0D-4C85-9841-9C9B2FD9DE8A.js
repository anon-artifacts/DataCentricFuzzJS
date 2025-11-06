function f0() {
}
var BUGNUMBER = "364104";
var summary = "Array.prototype.indexOf, Array.prototype.lastIndexOf issues " + "with the optional second fromIndex argument";
var actual;
var expect;
f0(BUGNUMBER);
f0(summary);
var failed = false;
try {
    if (([2]).indexOf(2) != 0) {
        throw "indexOf: not finding 2!?";
    }
    if (([2]).indexOf(2, 0) != 0) {
        throw "indexOf: not interpreting explicit second argument 0!";
    }
    if (([2]).indexOf(2, 1) != -1) {
        throw "indexOf: ignoring second argument with value equal to array length!";
    }
    if (([2]).indexOf(2, 2) != -1) {
        throw "indexOf: ignoring second argument greater than array length!";
    }
    if (([2]).indexOf(2, 17) != -1) {
        throw "indexOf: ignoring large second argument!";
    }
    const v59 = -5;
    if (([2]).indexOf(2, v59) != 0) {
        throw "indexOf: calculated fromIndex < 0, should search entire array!";
    }
    const v68 = -1;
    if (([2,3]).indexOf(2, v68) != -1) {
        throw "indexOf: not handling index == (-1 + 2), element 2 correctly!";
    }
    const v79 = -1;
    if (([2,3]).indexOf(3, v79) != 1) {
        throw "indexOf: not handling index == (-1 + 2), element 3 correctly!";
    }
    if (([2]).lastIndexOf(2) != 0) {
        throw "lastIndexOf: not finding 2!?";
    }
    if (([2]).lastIndexOf(2, 1) != 0) {
        throw "lastIndexOf: not interpreting explicit second argument 1!?";
    }
    if (([2]).lastIndexOf(2, 17) != 0) {
        throw "lastIndexOf: should have searched entire array!";
    }
    const v112 = -5;
    if (([2]).lastIndexOf(2, v112) != -1) {
        throw "lastIndexOf: -5 + 1 < 0, so array shouldn't be searched!";
    }
    const v122 = -2;
    if (([2]).lastIndexOf(2, v122) != -1) {
        throw "lastIndexOf: -2 + 1 < 0, so array shouldn't be searched!";
    }
    const v132 = -1;
    if (([2,3]).lastIndexOf(2, v132) != 0) {
        throw "lastIndexOf: not handling index == (-1 + 2), element 2 correctly!";
    }
    const v142 = -1;
    if (([2,3]).lastIndexOf(3, v142) != 1) {
        throw "lastIndexOf: not handling index == (-1 + 2), element 3 correctly!";
    }
    const v152 = -2;
    if (([2,3]).lastIndexOf(2, v152) != 0) {
        throw "lastIndexOf: not handling index == (-2 + 2), element 2 correctly!";
    }
    const v162 = -2;
    if (([2,3]).lastIndexOf(3, v162) != -1) {
        throw "lastIndexOf: not handling index == (-2 + 2), element 3 correctly!";
    }
    const v173 = -3;
    if (([2,3]).lastIndexOf(2, v173) != -1) {
        throw "lastIndexOf: calculated fromIndex < 0, shouldn't search array for 2!";
    }
    const v184 = -3;
    if (([2,3]).lastIndexOf(3, v184) != -1) {
        throw "lastIndexOf: calculated fromIndex < 0, shouldn't search array for 3!";
    }
} catch(e193) {
    failed = e193;
}
f0(expect = false, actual = failed, summary);
