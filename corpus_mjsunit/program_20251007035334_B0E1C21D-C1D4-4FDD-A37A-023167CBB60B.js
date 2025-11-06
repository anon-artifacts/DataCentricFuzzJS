var array = [0,1,2,3,4];
var arrayIterator = array[Symbol.iterator]();
var arrayIteratorPrototype = arrayIterator.__proto__;
var arrayIteratorPrototypeNext = arrayIteratorPrototype.next;
if (arrayIterator.hasOwnProperty("next")) {
}
if (!arrayIteratorPrototype.hasOwnProperty("next")) {
}
var array1 = [42,43,41];
var array1Iterator = array1[Symbol.iterator]();
var index = 0;
while (true) {
    var result = arrayIteratorPrototypeNext.call(array1Iterator);
    var value = result.value;
    if (result.done) {
        break;
    }
    if (value !== array1[index++]) {
    }
}
if (index !== 3) {
}
function increment(a42) {
    return arrayIteratorPrototypeNext.call(a42);
}
var array1 = [42,43,-20];
var array2 = [42,43,-20];
var array1Iterator = array1[Symbol.iterator]();
var array2Iterator = array2[Symbol.iterator]();
for (let i63 = 0; i63 < 3; ++i63) {
    var value1 = increment(array1Iterator).value;
    var value2 = increment(array2Iterator).value;
    if (value1 !== value2) {
    }
}
var array1 = [0,1,2,4,5,6];
var array1Iterator = array1[Symbol.iterator]();
var value = array1Iterator.next().value;
if (value !== 0) {
}
var value = array1Iterator.next().value;
if (value !== 1) {
}
var value = array1Iterator.next().value;
if (value !== 2) {
}
var value = arrayIteratorPrototypeNext.call(array1Iterator).value;
if (value !== 4) {
}
var value = arrayIteratorPrototypeNext.call(array1Iterator).value;
if (value !== 5) {
}
var value = arrayIteratorPrototypeNext.call(array1Iterator).value;
if (value !== 6) {
}
var value = arrayIteratorPrototypeNext.call(array1Iterator).value;
if (value !== undefined) {
}
var primitives = ["string",42,0.03,false,true,Symbol("Cocoa"),null,,];
for (const v133 of primitives) {
    var didThrow = null;
    try {
        arrayIteratorPrototypeNext.call(v133);
    } catch(e137) {
    }
}
const v138 = {};
const v139 = [];
const v141 = new Date();
const v143 = new Error();
const v146 = Object(Symbol());
const v149 = new String("Cappuccino");
const v152 = new Number(42);
const v155 = new Boolean(false);
function f156() {
}
var nonRelatedObjects = [v138,v139,v141,v143,v146,v149,v152,v155,f156];
for (const v159 of nonRelatedObjects) {
    var didThrow = null;
    try {
        arrayIteratorPrototypeNext.call(v159);
    } catch(e163) {
    }
}
