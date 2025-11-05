var f = () => {};
function main() {
  var v0 = [1.5,, 1.7];
  try {
    var v1 = {
      ab: 5
    };
  } catch (e) {}
  function f1(v5, v6, v7) {
    v5.ab = v6[v7];
    v5 = v6, gc();
  }
  f1(v1, v0, 1);
  f(undefined, v1.ab);
}
main();
main();
%OptimizeFunctionOnNextCall(main);
main();
//flags: --expose-gc --allow-natives-syntax --jit-fuzzing --optimize-on-next-call-optimizes-to-maglev