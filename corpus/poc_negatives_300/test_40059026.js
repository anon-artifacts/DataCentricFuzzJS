function foo(flag) {
    let x1 = 1337;
    x1 /= true;
    let y1 = x1 || NaN;
    y1 <<= 1;
    if(flag){
        /p4nda/.test({}); // deopt here
    }

    return y1;
}
console.log(foo());
console.log(foo());
%PrepareFunctionForOptimization(foo);
foo();
%OptimizeFunctionOnNextCall(foo);
console.log(foo(true));