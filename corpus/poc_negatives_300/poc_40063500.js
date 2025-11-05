function main() {
  function f0() { }

  function f1(v5, v6) {
    try {
      for (var v7 = 0; v7 < v5.length; ++v7) {
        try {
          f0(v5.codePointAt(v7));
        } catch (e) { }

        try {
          f0(v5.codePointAt(v7));
        } catch (e) { }
      }
    } catch (e) { }
  }

  for (var v0 = 0; v0 < 1e5; ++v0) {
    f1("𠮷", []);
  }
}
main();
% PrepareFunctionForOptimization(main);
main();
% OptimizeFunctionOnNextCall(main);
main();