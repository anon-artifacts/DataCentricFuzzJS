function main() {
  function get_thin_string(a, b) {
    var str = a + b;
    var o = {};
    o[str];
    return str;
  }
  var str = get_thin_string("foo", "bar");
  function CheckCS() {
    print("f".charCodeAt(0), str.charCodeAt(0));
  }
  %PrepareFunctionForOptimization(CheckCS);
  CheckCS();
  %OptimizeFunctionOnNextCall(CheckCS);
  CheckCS();
}
main();
//flags: --allow-natives-syntax --turboshaft-loop-peeling --stress-gc-during-compilation
