let c0 = 0;

function foo(a, b) {
    function bar1() {
        b--;
        return a;
    }
    let x = a == 0xdead;

    function bar2() {}
    bar2 >>>= 1;

    let res = b !== x;
    b = x;
    let y = a > c0;
    res += c0;
    return res;
}

let r1 = foo(2n,6);
console.log(r1);
%PrepareFunctionForOptimization(foo);
let r2 = foo(2n,6);
%OptimizeFunctionOnNextCall(foo);
let r3 = foo(2n,6);
console.log(r3);
