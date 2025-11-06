var CrossContextArrayConstructor = Array;
function f2() {
}
CrossContextArrayConstructor[Symbol.species] = f2;
