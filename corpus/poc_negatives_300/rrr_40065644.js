function classOf(object) {
   var string = Object.prototype.toString.call(object);
   return string.substring(8, string.length - 1);
}
function deepObjectEquals(a, b) {
  var aProps = Object.keys(a);
  aProps.sort();
  var bProps = Object.keys(b);
  bProps.sort();
  if (!deepEquals(aProps, bProps)) {
    return false;
  }
  for (var i = 0; i < aProps.length; i++) {
    if (!deepEquals(a[aProps[i]], b[aProps[i]])) {
      return false;
    }
  }
  return true;
}
function deepEquals(a, b) {
  if (a === b) {
    if (a === 0) return (1 / a) === (1 / b);
    return true;
  }
  if (typeof a != typeof b) return false;
  if (typeof a == 'number') return (isNaN(a) && isNaN(b)) || (a===b);
  if (typeof a !== 'object' && typeof a !== 'function' && typeof a !== 'symbol') return false;
  var objectClass = classOf(a);
  if (objectClass === 'Array') {
    if (a.length != b.length) {
      return false;
    }
    for (var i = 0; i < a.length; i++) {
      if (!deepEquals(a[i], b[i])) return false;
    }
    return true;
  }                
  if (objectClass !== classOf(b)) return false;
  if (objectClass === 'RegExp') {
    return (a.toString() === b.toString());
  }
  if (objectClass === 'Function') return true;
  
  if (objectClass == 'String' || objectClass == 'Number' ||
      objectClass == 'Boolean' || objectClass == 'Date') {
    if (a.valueOf() !== b.valueOf()) return false;
  }
  return deepObjectEquals(a, b);
}
function opt(opt_param){
const v0 = [];
let v1 = Infinity;
const v2 = v1.E;
for (const v3 in v1) {
    v2.valueOf = v3;
}
for (let v5 = -1; v5 > v0; v5 = v5 & -1) {
    for (let v6 = v5; v6 <= -1; v6 = v6 + v2) {
        const v7 = v1++;
        const v8 = -v5;
        for (let v9 = v6; v9 <= v7; v9 = v9 + v5) {
        }
    }
}
return v2;
}
let jit_a0 = opt(false);
opt(true);
let jit_a0_0 = opt(false);
%PrepareFunctionForOptimization(opt);
let jit_a1 = opt(true);
%OptimizeFunctionOnNextCall(opt);
let jit_a2 = opt(false);
if (jit_a0 === undefined && jit_a2 === undefined) {
    opt(true);
} else {
    if (jit_a0_0===jit_a0 && !deepEquals(jit_a0, jit_a2)) {
        fuzzilli('FUZZILLI_CRASH', 0);
    }
}
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// #
// # Fatal error in ../../src/compiler/turboshaft/types.h, line 501
// # Debug check failed: 0 != special_values (0 vs. 0).
// #
// #
// #
// #FailureMessage Object: 0x7ffd812d14a0
// ==== C stack trace ===============================
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x7ab4c2) [0x55e1ca1054c2]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x7a9fd7) [0x55e1ca103fd7]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x79c6df) [0x55e1ca0f66df]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x79c075) [0x55e1ca0f6075]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x32c4c2f) [0x55e1ccc1ec2f]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x32c6fd2) [0x55e1ccc20fd2]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x32c8d5d) [0x55e1ccc22d5d]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x320bc95) [0x55e1ccb65c95]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x3209d55) [0x55e1ccb63d55]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x3204108) [0x55e1ccb5e108]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x32039ee) [0x55e1ccb5d9ee]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x3203202) [0x55e1ccb5d202]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x31ff89c) [0x55e1ccb5989c]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x31ff2a8) [0x55e1ccb592a8]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x31fe880) [0x55e1ccb58880]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x29e2299) [0x55e1cc33c299]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x29dbb9f) [0x55e1cc335b9f]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x29da19a) [0x55e1cc33419a]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0xa716c1) [0x55e1ca3cb6c1]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0xa95f37) [0x55e1ca3eff37]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0xa80fde) [0x55e1ca3dafde]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0xa833a3) [0x55e1ca3dd3a3]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x1ac462a) [0x55e1cb41e62a]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x1ac3ef8) [0x55e1cb41def8]
//     /home/pwn/code/v8/out/fuzzbuild/d8(+0x338b1f6) [0x55e1ccce51f6]
// Received signal 6
// STDOUT:
// ARGS: /home/pwn/code/v8/out/fuzzbuild/d8 --expose-gc --future --harmony --harmony-rab-gsab --allow-natives-syntax --fuzzing --assert-types --turboshaft-assert-types --turboshaft --turboshaft-wasm --always-turbofan --maglev --maglev-inlining --maglev-reuse-stack-slots --stress-maglev --maglev-assert --maglev-function-context-specialization --sparkplug --lazy --no-always-osr --force-slow-path --turbo-move-optimization --turbo-jt --turbo-loop-peeling --turbo-loop-variable --turbo-loop-rotation --turbo-cf-optimization --turbo-escape --turbo-allocation-folding --turbo-instruction-scheduling --turbo-stress-instruction-scheduling --turbo-store-elimination --turbo-rewrite-far-jumps --turbo-optimize-apply --no-enable-sse4-2 --turbo-load-elimination --turbo-inlining --turbo-splitting
