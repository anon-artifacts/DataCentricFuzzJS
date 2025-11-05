function foo(o) {
  return o.x;
}

let s1 = new String("abc");
s1.x = 42;

let s2 = new String("def");
s2.y = 17;

%PrepareFunctionForOptimization(foo);
print(foo(s1));

%OptimizeFunctionOnNextCall(foo);
print(foo(s2));