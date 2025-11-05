function f0() {
}
var BUGNUMBER = 290592;
var summary = "Array extras: forEach, indexOf, filter, map";
var actual = "";
var expect = "";
f0(BUGNUMBER);
f0(summary);
function identity(a12, a13, a14) {
    f0(a12, a14[a13], "identity: check callback argument consistency");
    return a12;
}
function mutate(a19, a20, a21) {
    f0(a19, a21[a20], "mutate: check callback argument consistency");
    if (a20 == 0) {
        a21[1] = "mutated";
        delete a21[2];
        a21.push("not visited");
    }
    return a19;
}
function mutateForEach(a33, a34, a35) {
    f0(a33, a35[a34], "mutateForEach: check callback argument consistency");
    if (a34 == 0) {
        a35[1] = "mutated";
        delete a35[2];
        a35.push("not visited");
    }
    actual += a33 + ",";
}
function makeUpperCase(a49, a50, a51) {
    f0(a49, a51[a50], "makeUpperCase: check callback argument consistency");
    try {
        return a49.toUpperCase();
    } catch(e56) {
    }
    return a49;
}
function concat(a58, a59, a60) {
    f0(a58, a60[a59], "concat: check callback argument consistency");
    actual += a58 + ",";
}
function isUpperCase(a67, a68, a69) {
    f0(a67, a69[a68], "isUpperCase: check callback argument consistency");
    try {
        return a67 == a67.toUpperCase();
    } catch(e75) {
    }
    return false;
}
function isString(a78, a79, a80) {
    f0(a78, a80[a79], "isString: check callback argument consistency");
    return typeof a78 == "string";
}
function ArrayCallback(a88) {
    this.state = a88;
}
function f90(a91, a92, a93) {
    f0(a91, a93[a92], "ArrayCallback.prototype.makeUpperCase: check callback argument consistency");
    try {
        return this.state ? a91.toUpperCase() : a91.toLowerCase();
    } catch(e102) {
    }
    return a91;
}
const t65 = ArrayCallback.prototype;
t65.makeUpperCase = f90;
function f104(a105, a106, a107) {
    f0(a105, a107[a106], "ArrayCallback.prototype.concat: check callback argument consistency");
    actual += a105 + ",";
}
const t71 = ArrayCallback.prototype;
t71.concat = f104;
function f114(a115, a116, a117) {
    f0(a115, a117[a116], "ArrayCallback.prototype.isUpperCase: check callback argument consistency");
    try {
        return this.state ? true : a115 == a115.toUpperCase();
    } catch(e127) {
    }
    return false;
}
const t81 = ArrayCallback.prototype;
t81.isUpperCase = f114;
function f130(a131, a132, a133) {
    f0(a131, a133[a132], "ArrayCallback.prototype.isString: check callback argument consistency");
    return this.state ? true : typeof a131 == "string";
}
const t87 = ArrayCallback.prototype;
t87.isString = f130;
function dumpError(a146) {
    var s = (((((((a146.name + ": ") + a146.message) + " File: ") + a146.fileName) + ", Line: ") + a146.lineNumber) + ", Stack: ") + a146.stack;
    return s;
}
var obj;
var strings = ["hello","Array","WORLD"];
var mixed = [0,"0",0];
const v178 = new Array();
var sparsestrings = v178;
sparsestrings[2] = "sparse";
if ("map" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.map.length;
    f0(expect, actual, "Array.prototype.map.length == 1");
    expect = "TypeError";
    try {
        strings.map();
        actual = "no error";
    } catch(e193) {
        actual = e193.name;
    }
    f0(expect, actual, "Array.map(undefined) throws TypeError");
    try {
        expect = "hello,Array,WORLD";
        actual = strings.map(identity).toString();
    } catch(e200) {
        actual = dumpError(e200);
    }
    f0(expect, actual, "Array.map: identity");
    try {
        expect = "hello,mutated,";
        actual = strings.map(mutate).toString();
    } catch(e207) {
        actual = dumpError(e207);
    }
    f0(expect, actual, "Array.map: mutate");
    strings = ["hello","Array","WORLD"];
    try {
        expect = "HELLO,ARRAY,WORLD";
        actual = strings.map(makeUpperCase).toString();
    } catch(e218) {
        actual = dumpError(e218);
    }
    f0(expect, actual, "Array.map: uppercase");
    try {
        expect = "HELLO,ARRAY,WORLD";
        const v224 = new ArrayCallback(true);
        var obj = v224;
        actual = strings.map(obj.makeUpperCase, obj).toString();
    } catch(e229) {
        actual = dumpError(e229);
    }
    f0(expect, actual, "Array.map: uppercase with object callback");
    try {
        expect = "hello,array,world";
        const v235 = new ArrayCallback(false);
        obj = v235;
        actual = strings.map(obj.makeUpperCase, obj).toString();
    } catch(e239) {
        actual = dumpError(e239);
    }
    f0(expect, actual, "Array.map: lowercase with object callback");
    try {
        expect = ",,SPARSE";
        actual = sparsestrings.map(makeUpperCase).toString();
    } catch(e246) {
        actual = dumpError(e246);
    }
    f0(expect, actual, "Array.map: uppercase on sparse array");
}
if ("forEach" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.forEach.length;
    f0(expect, actual, "Array.prototype.forEach.length == 1");
    expect = "TypeError";
    try {
        strings.forEach();
        actual = "no error";
    } catch(e262) {
        actual = e262.name;
    }
    f0(expect, actual, "Array.forEach(undefined) throws TypeError");
    try {
        expect = "hello,Array,WORLD,";
        actual = "";
        strings.forEach(concat);
    } catch(e269) {
        actual = dumpError(e269);
    }
    f0(expect, actual, "Array.forEach");
    try {
        expect = "hello,mutated,";
        actual = "";
        strings.forEach(mutateForEach);
    } catch(e276) {
        actual = dumpError(e276);
    }
    f0(expect, actual, "Array.forEach: mutate");
    strings = ["hello","Array","WORLD"];
    try {
        expect = "hello,Array,WORLD,";
        actual = "";
        const v287 = new ArrayCallback(true);
        obj = v287;
        strings.forEach(obj.concat, obj);
    } catch(e290) {
        actual = dumpError(e290);
    }
    f0(expect, actual, "Array.forEach with object callback 1");
    try {
        expect = "hello,Array,WORLD,";
        actual = "";
        const v297 = new ArrayCallback(false);
        obj = v297;
        strings.forEach(obj.concat, obj);
    } catch(e300) {
        actual = dumpError(e300);
    }
    f0(expect, actual, "Array.forEach with object callback 2");
    try {
        expect = "sparse,";
        actual = "";
        sparsestrings.forEach(concat);
    } catch(e307) {
        actual = dumpError(e307);
    }
    f0(expect, actual, "Array.forEach on sparse array");
}
if ("filter" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.filter.length;
    f0(expect, actual, "Array.prototype.filter.length == 1");
    expect = "TypeError";
    try {
        strings.filter();
        actual = "no error";
    } catch(e323) {
        actual = e323.name;
    }
    f0(expect, actual, "Array.filter(undefined) throws TypeError");
    try {
        expect = "WORLD";
        actual = strings.filter(isUpperCase).toString();
    } catch(e330) {
        actual = dumpError(e330);
    }
    f0(expect, actual, "Array.filter");
    try {
        expect = "WORLD";
        const v336 = new ArrayCallback(false);
        obj = v336;
        actual = strings.filter(obj.isUpperCase, obj).toString();
    } catch(e340) {
        actual = dumpError(e340);
    }
    f0(expect, actual, "Array.filter object callback 1");
    try {
        expect = "hello,Array,WORLD";
        const v346 = new ArrayCallback(true);
        obj = v346;
        actual = strings.filter(obj.isUpperCase, obj).toString();
    } catch(e350) {
        actual = dumpError(e350);
    }
    f0(expect, actual, "Array.filter object callback 2");
}
if ("every" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.every.length;
    f0(expect, actual, "Array.prototype.every.length == 1");
    expect = "TypeError";
    try {
        strings.every();
        actual = "no error";
    } catch(e366) {
        actual = e366.name;
    }
    f0(expect, actual, "Array.every(undefined) throws TypeError");
    try {
        expect = true;
        actual = strings.every(isString);
    } catch(e372) {
        actual = dumpError(e372);
    }
    f0(expect, actual, "strings: every element is a string");
    try {
        expect = false;
        actual = mixed.every(isString);
    } catch(e378) {
        actual = dumpError(e378);
    }
    f0(expect, actual, "mixed: every element is a string");
    try {
        expect = true;
        actual = sparsestrings.every(isString);
    } catch(e384) {
        actual = dumpError(e384);
    }
    f0(expect, actual, "sparsestrings: every element is a string");
    const v389 = new ArrayCallback(false);
    obj = v389;
    try {
        expect = true;
        actual = strings.every(obj.isString, obj);
    } catch(e393) {
        actual = dumpError(e393);
    }
    f0(expect, actual, "strings: every element is a string, via object callback");
    try {
        expect = false;
        actual = mixed.every(obj.isString, obj);
    } catch(e400) {
        actual = dumpError(e400);
    }
    f0(expect, actual, "mixed: every element is a string, via object callback");
    try {
        expect = true;
        actual = sparsestrings.every(obj.isString, obj);
    } catch(e407) {
        actual = dumpError(e407);
    }
    f0(expect, actual, "sparsestrings: every element is a string, via object callback");
}
if ("some" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.some.length;
    f0(expect, actual, "Array.prototype.some.length == 1");
    expect = "TypeError";
    try {
        strings.some();
        actual = "no error";
    } catch(e423) {
        actual = e423.name;
    }
    f0(expect, actual, "Array.some(undefined) throws TypeError");
    try {
        expect = true;
        actual = strings.some(isString);
    } catch(e429) {
        actual = dumpError(e429);
    }
    f0(expect, actual, "strings: some element is a string");
    try {
        expect = true;
        actual = mixed.some(isString);
    } catch(e435) {
        actual = dumpError(e435);
    }
    f0(expect, actual, "mixed: some element is a string");
    try {
        expect = true;
        actual = sparsestrings.some(isString);
    } catch(e441) {
        actual = dumpError(e441);
    }
    f0(expect, actual, "sparsestrings: some element is a string");
    const v446 = new ArrayCallback(false);
    obj = v446;
    try {
        expect = true;
        actual = strings.some(obj.isString, obj);
    } catch(e450) {
        actual = dumpError(e450);
    }
    f0(expect, actual, "strings: some element is a string, via object callback");
    try {
        expect = true;
        actual = mixed.some(obj.isString, obj);
    } catch(e457) {
        actual = dumpError(e457);
    }
    f0(expect, actual, "mixed: some element is a string, via object callback");
    try {
        expect = true;
        actual = sparsestrings.some(obj.isString, obj);
    } catch(e464) {
        actual = dumpError(e464);
    }
    f0(expect, actual, "sparsestrings: some element is a string, via object callback");
}
if ("indexOf" in Array.prototype) {
    expect = 1;
    actual = Array.prototype.indexOf.length;
    f0(expect, actual, "Array.prototype.indexOf.length == 1");
    try {
        expect = -1;
        actual = mixed.indexOf("not found");
    } catch(e481) {
        actual = dumpError(e481);
    }
    f0(expect, actual, "indexOf returns -1 if value not found");
    try {
        expect = 0;
        actual = mixed.indexOf(0);
    } catch(e488) {
        actual = dumpError(e488);
    }
    f0(expect, actual, "indexOf matches using strict equality");
    try {
        expect = 1;
        actual = mixed.indexOf("0");
    } catch(e495) {
        actual = dumpError(e495);
    }
    f0(expect, actual, "indexOf matches using strict equality");
    try {
        expect = 2;
        actual = mixed.indexOf(0, 1);
    } catch(e503) {
        actual = dumpError(e503);
    }
    f0(expect, actual, "indexOf begins searching at fromIndex");
}
