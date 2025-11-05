function foo(b) {
    foo.bind();
    if (b) {
        %OptimizeFunctionOnNextCall(foo);
    }
    for (let i = 0; i < 10000; i++) {}
    foo instanceof foo;
}

%PrepareFunctionForOptimization(foo);
foo(false);
%OptimizeMaglevOnNextCall(foo);
foo(true);
foo.prototype = foo;
foo(true);