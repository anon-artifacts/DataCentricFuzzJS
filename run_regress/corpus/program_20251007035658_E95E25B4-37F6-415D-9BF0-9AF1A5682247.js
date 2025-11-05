const t0 = String.prototype;
delete t0[Symbol.iterator];
Int8Array.from("anything");
