
function foo(arr, v) {
  arr[v] = 1;
}

function f() {
  arr = [];
  foo(arr, 0);  // Here arr is a normal array and we transition to Monomorphic with correct handler with prototype validity cell
  arr.__proto__.__proto__ = new Int32Array(); // Changing the prototype will invalidate the prototype validity cell
  foo([], 1);    // This misses and transitions to polymorphic and compute the handlers again. When computing handlers we don't consider the fact that prototype
                      // validity cell was reset.
  foo(arr, 1); // This just uses the old handler, which was set up when TypedArray wasn't on the prototype chain.
  print(arr);
}
f();
//--correctness-fuzzer-suppressions --expose-gc --allow-natives-for-differential-fuzzing --invoke-weak-callbacks --omit-quit --es-staging --wasm-staging --no-wasm-async-compilation --suppress-asm-messages --random-seed -777012817 --always-opt --no-liftoff