function f0(v11) {
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11 += v11;
  v11.includes(4.4, {
    toString: () => v11.length = 0
  });
}
var v3 = [0, 1];
for (var v4 in v3) {
  var v5 = v4[v4];
  %PrepareFunctionForOptimization(f0);
  f0(v5);
  f0(v5);
  %OptimizeFunctionOnNextCall(f0);
  f0(v5);
}
