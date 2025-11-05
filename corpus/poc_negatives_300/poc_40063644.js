function f5(v20, v21) {
    try {
        v20[0] = v21;
    } catch (e) { }

    return v20;
}
  
% PrepareFunctionForOptimization(f5);
f5([0, 3, 2], 1.5), f5([0, 3, 2], 1.5), 
% OptimizeMaglevOnNextCall(f5), f5([0, 3, 2], 1.5);
f5(233333333);