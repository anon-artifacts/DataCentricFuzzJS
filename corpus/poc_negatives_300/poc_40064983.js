function opt(opt_param){
 const v1 = [];
 const v2 = v1 < 3022160464;
 const v3 = v2 << 3022160464;
 const v4 = v2 >>> 3022160464;
 const v5 = v3 & v4;
 const v7 = Math.max(v5);
 const v9 = new Int16Array();
 for (const v10 in v1) {
     v7.b = v10;
 }
 return v7;
 }
 let jit_a0 = opt(false);
 opt(true);
 let jit_a0_0 = opt(false);
 %PrepareFunctionForOptimization(opt);
 let jit_a1 = opt(true);
 %OptimizeFunctionOnNextCall(opt);
 let jit_a2 = opt(false);
 print(jit_a0);
 print(jit_a2);
 //d8 --future --allow-natives-syntax -jitless poc.js