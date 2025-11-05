function opt(opt_param){
const v2 = new Float64Array(752);
const v5 = [];
const v6 = v2.values;
const v7 = Reflect.apply(v6,v2,v5);
switch (v7) {
    case Float64Array:
        let v8 = 1;
        do {
            function* v10(v11,v12) {
                for (const v13 of v5) {
                    const v14 = v13 >>> v8;
                }
                const v15 = yield v10;
                return 752;
            }
            const v16 = v8++;
        } while (v8 < 2);
        break;
}
return v5;
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
//d8 --allow-natives-syntax --fuzzing poc.js