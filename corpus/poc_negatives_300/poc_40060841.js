deepEquals = function deepEquals(a, b) {
    if (a === b) {
      if (a === 0) return 1 / a === 1 / b;
    }
  };
  assertEquals = function assertEquals(expected, found) {
    if (deepEquals(found, expected)) {
    }
  };
  var __v_0 = Array(10000).join("X");
  __v_0.replace(/^|X/g, function (__v_1, __v_2) {
        assertEquals("X", __v_1, "at position 0x" + __v_2.toString());
  });

  __v_0.replace(/^|X/g, function (__v_1, __v_2, __v_3) {
          assertEquals("X", __v_1, "at position 0x" + __v_2.toString());
  });
let __v_5 = Uint8Array.__proto__;
let __v_6 = __v_5.prototype;

  assertEquals();
  assertEquals(__v_6.__proto__, Object.prototype);
function __f_0() {
}

//d8 --random-seed=-1983051303 --fuzzing --fuzzing --disable-abortjs --disable-in-process-stack-traces --assert-types --stress-flush-code --no-enable-ssse3 --maglev --no-enable-lzcnt --no-lazy-feedback-allocation --fuzzing /mnt/scratch0/clusterfuzz/bot/inputs/fuzzer-testcases-disk/fuzz-404.js