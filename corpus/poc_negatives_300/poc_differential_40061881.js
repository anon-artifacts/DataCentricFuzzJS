// poc.js  
function opt() {  
  const v11 = BigInt.asUintN(16, 2n);  
  const v12 = -1n / v11;  
  return v12;  
}  
let jit_a0 = opt();  
% PrepareFunctionForOptimization(opt);  
opt();  
% OptimizeFunctionOnNextCall(opt)  
let jit_a2 = opt();  
console.log(jit_a0);  
console.log(jit_a2);  