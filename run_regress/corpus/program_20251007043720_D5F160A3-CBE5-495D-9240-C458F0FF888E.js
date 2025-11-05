function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
const v16 = new Set([0,1,2,3,4,5]);
var set = v16;
var array = Array.from(set);
shouldBe(array.length, set.size);
for (let i25 = 0; i25 < array.length; ++i25) {
    shouldBe(set.has(array[i25]), true);
}
const v55 = new Map([[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]]);
var map = v55;
var array = Array.from(map);
shouldBe(array.length, map.size);
for (let i63 = 0; i63 < array.length; ++i63) {
    shouldBe(array[i63][1], 0);
    shouldBe(map.has(array[i63][0]), true);
    shouldBe(map.get(array[i63][0]), 0);
}
var string = "Cocoa Cappuccino";
var array = Array.from(string);
shouldBe(array.length, string.length);
for (let i91 = 0; i91 < array.length; ++i91) {
    shouldBe(array[i91], string[i91]);
}
function f100() {
    return arguments;
}
function f102() {
    'use strict';
    return arguments;
}
function f104(a105, a106, a107) {
    return arguments;
}
function f109(a110, a111, a112) {
    'use strict';
    return arguments;
}
var argumentsGenerators = [f100,f102,f104,f109];
for (const v116 of argumentsGenerators) {
    var args = v116(1, 2, 3, 4, 5);
    var array = Array.from(args);
    shouldBe(array.length, args.length);
    for (let i130 = 0; i130 < array.length; ++i130) {
        shouldBe(array[i130], args[i130]);
    }
}
