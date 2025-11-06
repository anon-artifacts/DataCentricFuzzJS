const v2 = new Function("return this;");
let global = v2();
console.log(global.toString());
console.log(global[Symbol.toStringTag]);
let descriptor = Object.getOwnPropertyDescriptor(global, Symbol.toStringTag);
console.log(descriptor.writable);
console.log(descriptor.enumerable);
console.log(descriptor.configurable);
