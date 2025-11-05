function testTestIntegrityLevel(a1, a2) {
    Object.isExtensible(a1);
    Object.isSealed(a1);
    Object.isFrozen(a1);
    Object.preventExtensions(a1);
    Object.isExtensible(a1);
    Object.isSealed(a1);
    !a2;
    Object.isFrozen(a1);
    Object.seal(a1);
    Object.isExtensible(a1);
    Object.isSealed(a1);
    Object.isFrozen(a1);
    Object.freeze(a1);
    Object.isExtensible(a1);
    Object.isSealed(a1);
    Object.isFrozen(a1);
}
testTestIntegrityLevel([1,2,3], true);
testTestIntegrityLevel([1,,,2], true);
testTestIntegrityLevel([1,,,], true);
testTestIntegrityLevel([,,,], false);
testTestIntegrityLevel([], false);
testTestIntegrityLevel({ 0: 0 }, true);
var a = [,,,,,,,1];
a.pop();
testTestIntegrityLevel(a, false);
function testDescriptor() {
    var a = [1];
    Object.preventExtensions(a);
    JSON.stringify(Object.getOwnPropertyDescriptors(a));
    `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":true},` + `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`;
    a = [1];
    Object.seal(a);
    JSON.stringify(Object.getOwnPropertyDescriptors(a));
    `{"0":{"value":1,"writable":true,"enumerable":true,"configurable":false},` + `"length":{"value":1,"writable":true,"enumerable":false,"configurable":false}}`;
    a = [1];
    Object.freeze(a);
    JSON.stringify(Object.getOwnPropertyDescriptors(a));
    `{"0":{"value":1,"writable":false,"enumerable":true,"configurable":false},` + `"length":{"value":1,"writable":false,"enumerable":false,"configurable":false}}`;
}
testDescriptor();
