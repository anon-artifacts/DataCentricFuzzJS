var memory = new WebAssembly.Memory({ initial: 32768 });
var v = new Int32Array(memory.buffer);
var v2 = new Int32Array(128);

function f(v) {
  // Incorrectly returns "true":
  //return (v.byteLength >>> 24) <= 127;
 
  // Runs into an "int3":
  return v2[v.byteLength >>> 24];
}
%PrepareFunctionForOptimization(f);
for (var i = 0; i < 3; i++) console.log(f(v));
%OptimizeFunctionOnNextCall(f);
console.log(f(v));
