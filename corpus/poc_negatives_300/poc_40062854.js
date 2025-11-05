const ab = new ArrayBuffer(100, {maxByteLength: 200});
var dv = new DataView(ab, 0, 8); // "var" is important

function foo() {
  console.log(dv.getInt8(0));
}

%PrepareFunctionForOptimization(foo);
foo();

%OptimizeFunctionOnNextCall(foo);
foo();

ab.resize(0);

foo();
