speciesConstructors = [RegExp,Array,Int32Array.__proto__,Map,Set,ArrayBuffer,Promise];
function testSymbolSpeciesOnConstructor(a11) {
    if (a11[Symbol.species] !== a11) {
        throw "Symbol.species should return the constructor for " + a11.name;
    }
    a11[Symbol.species] = true;
    if (a11[Symbol.species] !== a11) {
        throw "Symbol.species was mutable " + a11.name;
    }
    const v27 = Symbol.species;
    Object.defineProperty(a11, v27, { value: true });
}
speciesConstructors.forEach(testSymbolSpeciesOnConstructor);
