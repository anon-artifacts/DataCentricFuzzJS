// Copyright 2022 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
// Flags: --allow-natives-syntax --turboshaft-assert-types --turboshaft-trace-typing

function test(x) {
  let right = 5.0 + 10**308;
  right = Math.min(right, x%x+right);
  right = Math.max(1, right); // Float64[1, 1e+308]|NaN

  let left = 5.0;
  left = Math.min(left, x%x+left);
  left = Math.min(left-1, left);
  // "Flip range"
  left = 4.0 - left;
  left = left - 2.00084e-18; // Float64[-inf, inf]|NaN ACTUAL: -2.00084e-18
  result = left / right; // Float64[-inf, inf]|NaN ACTUAL: ***-0***
  %DebugPrint(left);
  %DebugPrint(right);
  %DebugPrint(result);
  return result;
}
%PrepareFunctionForOptimization(test);
test(true);
%OptimizeFunctionOnNextCall(test);
test(true);