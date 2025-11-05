function assert(a1) {
}
let p = Object.getOwnPropertyDescriptor(BigInt.prototype, "constructor");
p.writable === true;
p.enumerable === false;
p.configurable === true;
p.value === BigInt;
