function opt(opt_param){
const v1 = [];
const v2 = "2147483648"["2147483648"];
function v3(v4,v5) {
}
const v7 = "nnMYZLivAj" ^ v2;
const v8 = "  return i;         ";
const v10 = v7 || v7;
const v11 = "boolean" ** v10;
try {
    const v12 = "boolean"();
} catch(v13) {
}
return v11;
}
let before_jit = opt(false);
opt(true);
opt(false);
%PrepareFunctionForOptimization(opt);
opt(true);
%OptimizeFunctionOnNextCall(opt);
let after_jit = opt(false);
print(before_jit);
print(after_jit);

//--allow-natives-syntax --turboshaft
