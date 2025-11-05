function main() {
  const {
    getExtrasBindingObject: v0,
    getContinuationPreservedEmbedderDataViaAPIForTesting: v1
  } = d8;
  const {
    getContinuationPreservedEmbedderData: v2,
    setContinuationPreservedEmbedderData: v3
  } = v0();
  function f0(v5) {
    try {
      v3(v5);
    } catch (e) {}
    return v2();
  }
  const v4 = v6 => {
    const v7 = (%PrepareFunctionForOptimization(f0), f0(v6), f0(v6), %OptimizeFunctionOnNextCall(f0), f0(v6));
    try {
      gc();
    } catch (e) {}
    try {
      v7();
    } catch (e) {}
  };
  try {
    v4({});
  } catch (e) {}
}
main();
main();
%OptimizeFunctionOnNextCall(main);
main();
//flags: --expose-gc --allow-natives-syntax --jit-fuzzing