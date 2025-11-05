function opt_me(a) {
    if (!a>0) {
        a+={};
        return a; 
        
        // 虽然不会被执行到, 但是访问外部的变量a, 用于让opt_me新建一个上下文
        (() => {
            a;
        })();
    }
    return a;
}

%PrepareFunctionForOptimization(opt_me);
opt_me(0);
opt_me(1);
%OptimizeMaglevOnNextCall(opt_me);
opt_me(0);

let res = opt_me({});   // fake obj