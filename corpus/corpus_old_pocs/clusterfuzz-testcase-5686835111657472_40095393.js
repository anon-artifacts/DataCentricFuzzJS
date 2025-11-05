// Original: C:\snapshot\ochang_js_fuzzer\resources\stubs.js
function nop() {
  return false;
}

try {
  gc;
} catch (e) {
  this.gc = function () {
    for (let i = 0; i < 10000; i++) {
      let s = new String("AAAA" + Math.random());
    }
  };
}

try {
  uneval;
} catch (e) {
  this.uneval = this.nop;
}

try {
  WScript;
} catch (e) {
  this.WScript = new Proxy({}, {
    get(target, name) {
      switch (name) {
        case 'Echo':
          return print;

        default:
          return {};
      }
    }

  });
}

try {
  this.alert = console.log;
} catch (e) {}

try {
  this.print = console.log;
} catch (e) {}

// Original: c:\clusterfuzz\bot\inputs\fuzzer-common-data-bundles\v8\test\mjsunit\mjsunit.js
function MjsUnitAssertionError(message) {
  this.message = message;
  let prevPrepareStackTrace = Error.prepareStackTrace;

  try {
    Error.prepareStackTrace = MjsUnitAssertionError.prepareStackTrace;
    this.stack = new Error("MjsUnitAssertionError").stack;
  } finally {
    Error.prepareStackTrace = prevPrepareStackTrace;
  }
}

MjsUnitAssertionError.prototype.toString = function () {
  return this.message + "\n\nStack: " + this.stack;
};

var assertSame;
var assertNotSame;
var assertEquals;
var deepEquals;
var assertNotEquals;
var assertEqualsDelta;
var assertArrayEquals;
var assertPropertiesEqual;
var assertToStringEquals;
var assertTrue;
var assertFalse;
var assertNull;
var assertNotNull;
var assertThrows;
var assertThrowsEquals;
var assertThrowsAsync;
var assertDoesNotThrow;
var assertInstanceof;
var assertUnreachable;
var assertOptimized;
var assertUnoptimized;
var assertContains;
var assertMatches;
var assertPromiseResult;
var promiseTestChain;
var promiseTestCount = 0;
var V8OptimizationStatus = {
  kIsFunction: 1 << 0,
  kNeverOptimize: 1 << 1,
  kAlwaysOptimize: 1 << 2,
  kMaybeDeopted: 1 << 3,
  kOptimized: 1 << 4,
  kTurboFanned: 1 << 5,
  kInterpreted: 1 << 6,
  kMarkedForOptimization: 1 << 7,
  kMarkedForConcurrentOptimization: 1 << 8,
  kOptimizingConcurrently: 1 << 9,
  kIsExecuting: 1 << 10,
  kTopmostFrameIsTurboFanned: 1 << 11,
  kLiteMode: 1 << 12
};
var isNeverOptimizeLiteMode;
var isNeverOptimize;
var isAlwaysOptimize;
var isInterpreted;
var isOptimized;
var isTurboFanned;
var failWithMessage;
var formatFailureText;
var prettyPrinted;

(function () {
  var ObjectPrototypeToString = Object.prototype.toString;
  var NumberPrototypeValueOf = Number.prototype.valueOf;
  var BooleanPrototypeValueOf = Boolean.prototype.valueOf;
  var StringPrototypeValueOf = String.prototype.valueOf;
  var DatePrototypeValueOf = Date.prototype.valueOf;
  var RegExpPrototypeToString = RegExp.prototype.toString;
  var ArrayPrototypeForEach = Array.prototype.forEach;
  var ArrayPrototypeJoin = Array.prototype.join;
  var ArrayPrototypeMap = Array.prototype.map;
  var ArrayPrototypePush = Array.prototype.push;
  var BigIntPrototypeValueOf;

  try {
    BigIntPrototypeValueOf = BigInt.prototype.valueOf;
  } catch (e) {}

  function classOf(object) {
    var string = ObjectPrototypeToString.call(object);
    return string.substring(8, string.length - 1);
  }

  function ValueOf(value) {
    switch (classOf(value)) {
      case "Number":
        return NumberPrototypeValueOf.call(value);

      case "BigInt":
        return BigIntPrototypeValueOf.call(value);

      case "String":
        return StringPrototypeValueOf.call(value);

      case "Boolean":
        return BooleanPrototypeValueOf.call(value);

      case "Date":
        return DatePrototypeValueOf.call(value);

      default:
        return value;
    }
  }

  prettyPrinted = function prettyPrinted(value) {
    switch (typeof value) {
      case "string":
        return JSON.stringify(value);

      case "bigint":
        return String(value) + "n";

      case "number":
        if (value === 0 && 1 / value < 0) return "-0";

      case "boolean":
      case "undefined":
      case "function":
      case "symbol":
        return String(value);

      case "object":
        if (value === null) return "null";
        var objectClass = classOf(value);

        switch (objectClass) {
          case "Number":
          case "BigInt":
          case "String":
          case "Boolean":
          case "Date":
            return objectClass + "(" + prettyPrinted(ValueOf(value)) + ")";

          case "RegExp":
            return RegExpPrototypeToString.call(value);

          case "Array":
            var mapped = ArrayPrototypeMap.call(value, prettyPrintedArrayElement);
            var joined = ArrayPrototypeJoin.call(mapped, ",");
            return "[" + joined + "]";

          case "Uint8Array":
          case "Int8Array":
          case "Int16Array":
          case "Uint16Array":
          case "Uint32Array":
          case "Int32Array":
          case "Float32Array":
          case "Float64Array":
            var joined = ArrayPrototypeJoin.call(value, ",");
            return objectClass + "([" + joined + "])";

          case "Object":
            break;

          default:
            return objectClass + "(" + String(value) + ")";
        }

        var name = value.constructor.name;
        if (name) return name + "()";
        return "Object()";

      default:
        return "-- unknown value --";
    }
  };

  function prettyPrintedArrayElement(value, index, array) {
    if (value === undefined && !(index in array)) return "";
    return prettyPrinted(value);
  }

  failWithMessage = function failWithMessage(message) {
    throw new MjsUnitAssertionError(message);
  };

  formatFailureText = function (expectedText, found, name_opt) {
    var message = "Fail" + "ure";

    if (name_opt) {
      message += " (" + name_opt + ")";
    }

    var foundText = prettyPrinted(found);

    if (expectedText.length <= 40 && foundText.length <= 40) {
      message += ": expected <" + expectedText + "> found <" + foundText + ">";
    } else {
      message += ":\nexpected:\n" + expectedText + "\nfound:\n" + foundText;
    }

    return message;
  };

  function fail(expectedText, found, name_opt) {
    return failWithMessage(formatFailureText(expectedText, found, name_opt));
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

  deepEquals = function deepEquals(a, b) {
    if (a === b) {
      if (a === 0) return 1 / a === 1 / b;
      return true;
    }

    if (typeof a !== typeof b) return false;
    if (typeof a === "number") return isNaN(a) && isNaN(b);
    if (typeof a !== "object" && typeof a !== "function") return false;
    var objectClass = classOf(a);
    if (objectClass !== classOf(b)) return false;

    if (objectClass === "RegExp") {
      return RegExpPrototypeToString.call(a) === RegExpPrototypeToString.call(b);
    }

    if (objectClass === "Function") return false;

    if (objectClass === "Array") {
      var elementCount = 0;

      if (a.length !== b.length) {
        return false;
      }

      for (var i = 0; i < a.length; i++) {
        if (!deepEquals(a[i], b[i])) return false;
      }

      return true;
    }

    if (objectClass === "String" || objectClass === "Number" || objectClass === "BigInt" || objectClass === "Boolean" || objectClass === "Date") {
      if (ValueOf(a) !== ValueOf(b)) return false;
    }

    return deepObjectEquals(a, b);
  };

  assertSame = function assertSame(expected, found, name_opt) {
    if (found === expected) {
      if (expected !== 0 || 1 / expected === 1 / found) return;
    } else if (expected !== expected && found !== found) {
      return;
    }

    fail(prettyPrinted(expected), found, name_opt);
  };

  assertNotSame = function assertNotSame(expected, found, name_opt) {
    if (found !== expected) {
      if (expected === 0 || 1 / expected !== 1 / found) return;
    } else if (!(expected !== expected && found !== found)) {
      return;
    }

    fail(prettyPrinted(expected), found, name_opt);
  };

  assertEquals = function assertEquals(expected, found, name_opt) {
    if (!deepEquals(found, expected)) {
      fail(prettyPrinted(expected), found, name_opt);
    }
  };

  assertNotEquals = function assertNotEquals(expected, found, name_opt) {
    if (deepEquals(found, expected)) {
      fail("not equals to " + prettyPrinted(expected), found, name_opt);
    }
  };

  assertEqualsDelta = function assertEqualsDelta(expected, found, delta, name_opt) {
    if (Math.abs(expected - found) > delta) {
      fail(prettyPrinted(expected) + " +- " + prettyPrinted(delta), found, name_opt);
    }
  };

  assertArrayEquals = function assertArrayEquals(expected, found, name_opt) {
    var start = "";

    if (name_opt) {
      start = name_opt + " - ";
    }

    assertEquals(expected.length, found.length, start + "array length");

    if (expected.length === found.length) {
      for (var i = 0; i < expected.length; ++i) {
        assertEquals(expected[i], found[i], start + "array element at index " + i);
      }
    }
  };

  assertPropertiesEqual = function assertPropertiesEqual(expected, found, name_opt) {
    if (!deepObjectEquals(expected, found)) {
      fail(expected, found, name_opt);
    }
  };

  assertToStringEquals = function assertToStringEquals(expected, found, name_opt) {
    if (expected !== String(found)) {
      fail(expected, found, name_opt);
    }
  };

  assertTrue = function assertTrue(value, name_opt) {
    assertEquals(true, value, name_opt);
  };

  assertFalse = function assertFalse(value, name_opt) {
    assertEquals(false, value, name_opt);
  };

  assertNull = function assertNull(value, name_opt) {
    if (value !== null) {
      fail("null", value, name_opt);
    }
  };

  assertNotNull = function assertNotNull(value, name_opt) {
    if (value === null) {
      fail("not null", value, name_opt);
    }
  };

  function executeCode(code) {
    if (typeof code === 'function') return code();
    if (typeof code === 'string') return eval(code);
    failWithMessage('Given code is neither function nor string, but ' + typeof code + ': <' + prettyPrinted(code) + '>');
  }

  function checkException(e, type_opt, cause_opt) {
    if (type_opt !== undefined) {
      assertEquals('function', typeof type_opt);
      assertInstanceof(e, type_opt);
    }

    if (RegExp !== undefined && cause_opt instanceof RegExp) {
      assertMatches(cause_opt, e.message, 'Error message');
    } else if (cause_opt !== undefined) {
      assertEquals(cause_opt, e.message, 'Error message');
    }
  }

  assertThrows = function assertThrows(code, type_opt, cause_opt) {
    if (arguments.length > 1 && type_opt === undefined) {
      failWithMessage('invalid use of assertThrows, unknown type_opt given');
    }

    if (type_opt !== undefined && typeof type_opt !== 'function') {
      failWithMessage('invalid use of assertThrows, maybe you want assertThrowsEquals');
    }

    try {
      executeCode(code);
    } catch (e) {
      checkException(e, type_opt, cause_opt);
      return;
    }

    let msg = 'Did not throw exception';
    if (type_opt !== undefined && type_opt.name !== undefined) msg += ', expected ' + type_opt.name;
    failWithMessage(msg);
  };

  assertThrowsEquals = function assertThrowsEquals(fun, val) {
    try {
      fun();
    } catch (e) {
      assertSame(val, e);
      return;
    }

    failWithMessage('Did not throw exception, expected ' + prettyPrinted(val));
  };

  assertThrowsAsync = function assertThrowsAsync(promise, type_opt, cause_opt) {
    if (arguments.length > 1 && type_opt === undefined) {
      failWithMessage('invalid use of assertThrows, unknown type_opt given');
    }

    if (type_opt !== undefined && typeof type_opt !== 'function') {
      failWithMessage('invalid use of assertThrows, maybe you want assertThrowsEquals');
    }

    let msg = 'Promise did not throw exception';
    if (type_opt !== undefined && type_opt.name !== undefined) msg += ', expected ' + type_opt.name;
    return assertPromiseResult(promise, res => setTimeout(_ => fail('<throw>', res, msg), 0), e => checkException(e, type_opt, cause_opt));
  };

  assertInstanceof = function assertInstanceof(obj, type) {
    if (!(obj instanceof type)) {
      var actualTypeName = null;
      var actualConstructor = Object.getPrototypeOf(obj).constructor;

      if (typeof actualConstructor === "function") {
        actualTypeName = actualConstructor.name || String(actualConstructor);
      }

      failWithMessage("Object <" + prettyPrinted(obj) + "> is not an instance of <" + (type.name || type) + ">" + (actualTypeName ? " but of <" + actualTypeName + ">" : ""));
    }
  };

  assertDoesNotThrow = function assertDoesNotThrow(code, name_opt) {
    try {
      executeCode(code);
    } catch (e) {
      if (e instanceof MjsUnitAssertionError) throw e;
      failWithMessage("threw an exception: " + (e.message || e));
    }
  };

  assertUnreachable = function assertUnreachable(name_opt) {
    var message = "Fail" + "ure: unreachable";

    if (name_opt) {
      message += " - " + name_opt;
    }

    failWithMessage(message);
  };

  assertContains = function (sub, value, name_opt) {
    if (value == null ? sub != null : value.indexOf(sub) == -1) {
      fail("contains '" + String(sub) + "'", value, name_opt);
    }
  };

  assertMatches = function (regexp, str, name_opt) {
    if (!(regexp instanceof RegExp)) {
      regexp = new RegExp(regexp);
    }

    if (!str.match(regexp)) {
      fail("should match '" + regexp + "'", str, name_opt);
    }
  };

  function concatenateErrors(stack, exception) {
    if (!exception.stack) exception = new Error(exception);

    if (typeof exception.stack !== 'string') {
      return exception;
    }

    exception.stack = stack + '\n\n' + exception.stack;
    return exception;
  }

  assertPromiseResult = function (promise, success, fail) {
    if (success !== undefined) assertEquals('function', typeof success);
    if (fail !== undefined) assertEquals('function', typeof fail);
    assertInstanceof(promise, Promise);
    const stack = new Error().stack;
    var test_promise = promise.then(result => {
      try {
        if (--promiseTestCount == 0) testRunner.notifyDone();
        if (success !== undefined) success(result);
      } catch (e) {
        setTimeout(_ => {
          throw concatenateErrors(stack, e);
        }, 0);
      }
    }, result => {
      try {
        if (--promiseTestCount == 0) testRunner.notifyDone();
        if (fail === undefined) throw result;
        fail(result);
      } catch (e) {
        setTimeout(_ => {
          throw concatenateErrors(stack, e);
        }, 0);
      }
    });
    if (!promiseTestChain) promiseTestChain = Promise.resolve();
    testRunner.waitUntilDone();
    ++promiseTestCount;
    return promiseTestChain.then(test_promise);
  };

  var OptimizationStatusImpl = undefined;

  var OptimizationStatus = function (fun, sync_opt) {
    if (OptimizationStatusImpl === undefined) {
      try {
        OptimizationStatusImpl = new Function("fun", "sync", "return %GetOptimizationStatus(fun, sync);");
      } catch (e) {
        throw new Error("natives syntax not allowed");
      }
    }

    return OptimizationStatusImpl(fun, sync_opt);
  };

  assertUnoptimized = function assertUnoptimized(fun, sync_opt, name_opt, skip_if_maybe_deopted = true) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);
    assertFalse((opt_status & V8OptimizationStatus.kAlwaysOptimize) !== 0, "test does not make sense with --always-opt");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, name_opt);

    if (skip_if_maybe_deopted && (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      return;
    }

    assertFalse((opt_status & V8OptimizationStatus.kOptimized) !== 0, name_opt);
  };

  assertOptimized = function assertOptimized(fun, sync_opt, name_opt, skip_if_maybe_deopted = true) {
    if (sync_opt === undefined) sync_opt = "";
    var opt_status = OptimizationStatus(fun, sync_opt);

    if (opt_status & V8OptimizationStatus.kLiteMode) {
      print("Warning: Test uses assertOptimized in Lite mode, skipping test.");
      testRunner.quit(0);
    }

    assertFalse((opt_status & V8OptimizationStatus.kNeverOptimize) !== 0, "test does not make sense with --no-opt");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, 'should be a function: ' + name_opt);

    if (skip_if_maybe_deopted && (opt_status & V8OptimizationStatus.kMaybeDeopted) !== 0) {
      return;
    }

    assertTrue((opt_status & V8OptimizationStatus.kOptimized) !== 0, 'should be optimized: ' + name_opt);
  };

  isNeverOptimizeLiteMode = function isNeverOptimizeLiteMode() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kLiteMode) !== 0;
  };

  isNeverOptimize = function isNeverOptimize() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kNeverOptimize) !== 0;
  };

  isAlwaysOptimize = function isAlwaysOptimize() {
    var opt_status = OptimizationStatus(undefined, "");
    return (opt_status & V8OptimizationStatus.kAlwaysOptimize) !== 0;
  };

  isInterpreted = function isInterpreted(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) === 0 && (opt_status & V8OptimizationStatus.kInterpreted) !== 0;
  };

  isOptimized = function isOptimized(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0;
  };

  isTurboFanned = function isTurboFanned(fun) {
    var opt_status = OptimizationStatus(fun, "");
    assertTrue((opt_status & V8OptimizationStatus.kIsFunction) !== 0, "not a function");
    return (opt_status & V8OptimizationStatus.kOptimized) !== 0 && (opt_status & V8OptimizationStatus.kTurboFanned) !== 0;
  };

  MjsUnitAssertionError.prepareStackTrace = function (error, stack) {
    try {
      let filteredStack = [];
      let inMjsunit = true;

      for (let i = 0; i < stack.length; i++) {
        let frame = stack[i];

        if (inMjsunit) {
          let file = frame.getFileName();

          if (!file || !file.endsWith("mjsunit.js")) {
            inMjsunit = false;
            if (i > 0) ArrayPrototypePush.call(filteredStack, stack[i - 1]);
            ArrayPrototypePush.call(filteredStack, stack[i]);
          }

          continue;
        }

        ArrayPrototypePush.call(filteredStack, frame);
      }

      stack = filteredStack;
      let max_name_length = 0;
      ArrayPrototypeForEach.call(stack, each => {
        let name = each.getFunctionName();
        if (name == null) name = "";

        if (each.isEval()) {
          name = name;
        } else if (each.isConstructor()) {
          name = "new " + name;
        } else if (each.isNative()) {
          name = "native " + name;
        } else if (!each.isToplevel()) {
          name = each.getTypeName() + "." + name;
        }

        each.name = name;
        max_name_length = Math.max(name.length, max_name_length);
      });
      stack = ArrayPrototypeMap.call(stack, each => {
        let frame = "    at " + each.name.padEnd(max_name_length);
        let fileName = each.getFileName();
        if (each.isEval()) return frame + " " + each.getEvalOrigin();
        frame += " " + (fileName ? fileName : "");
        let line = each.getLineNumber();
        frame += " " + (line ? line : "");
        let column = each.getColumnNumber();
        frame += column ? ":" + column : "";
        return frame;
      });
      return "" + error.message + "\n" + ArrayPrototypeJoin.call(stack, "\n");
    } catch (e) {}

    ;
    return error.stack;
  };
})();

// Original: c:\clusterfuzz\bot\inputs\fuzzer-common-data-bundles\v8\test\mjsunit\wasm\wasm-module-builder.js
let f32_view = new Float32Array(1);
let f32_bytes_view = new Uint8Array(f32_view.buffer);
let f64_view = new Float64Array(1);
let f64_bytes_view = new Uint8Array(f64_view.buffer);

function bytes(...input) {
  if (input.length == 1 && typeof input[0] == 'array') input = input[0];

  if (input.length == 1 && typeof input[0] == 'string') {
    let len = input[0].length;
    let view = new Uint8Array(len);

    for (let i = 0; i < len; i++) view[i] = input[0].charCodeAt(i);

    return view.buffer;
  }

  let view = new Uint8Array(input.length);

  for (let i = 0; i < input.length; i++) {
    let val = input[i];

    if (typeof val == 'string') {
      assertEquals(1, val.length, 'string inputs must have length 1');
      val = val.charCodeAt(0);
    }

    view[i] = val | 0;
  }

  return view.buffer;
}

var kWasmH0 = 0;
var kWasmH1 = 0x61;
var kWasmH2 = 0x73;
var kWasmH3 = 0x6d;
var kWasmV0 = 0x1;
var kWasmV1 = 0;
var kWasmV2 = 0;
var kWasmV3 = 0;
var kHeaderSize = 8;
var kPageSize = 65536;
var kSpecMaxPages = 65535;
var kMaxVarInt32Size = 5;
var kMaxVarInt64Size = 10;
let kDeclNoLocals = 0;
let kUnknownSectionCode = 0;
let kTypeSectionCode = 1;
let kImportSectionCode = 2;
let kFunctionSectionCode = 3;
let kTableSectionCode = 4;
let kMemorySectionCode = 5;
let kGlobalSectionCode = 6;
let kExportSectionCode = 7;
let kStartSectionCode = 8;
let kElementSectionCode = 9;
let kCodeSectionCode = 10;
let kDataSectionCode = 11;
let kDataCountSectionCode = 12;
let kExceptionSectionCode = 13;
let kModuleNameCode = 0;
let kFunctionNamesCode = 1;
let kLocalNamesCode = 2;
let kWasmFunctionTypeForm = 0x60;
let kWasmAnyFunctionTypeForm = 0x70;
let kHasMaximumFlag = 1;
let kSharedHasMaximumFlag = 3;
let kActiveNoIndex = 0;
let kPassive = 1;
let kActiveWithIndex = 2;
let kDeclFunctionName = 0x01;
let kDeclFunctionImport = 0x02;
let kDeclFunctionLocals = 0x04;
let kDeclFunctionExport = 0x08;
let kWasmStmt = 0x40;
let kWasmI32 = 0x7f;
let kWasmI64 = 0x7e;
let kWasmF32 = 0x7d;
let kWasmF64 = 0x7c;
let kWasmS128 = 0x7b;
let kWasmAnyRef = 0x6f;
let kWasmAnyFunc = 0x70;
let kWasmExceptRef = 0x68;
let kExternalFunction = 0;
let kExternalTable = 1;
let kExternalMemory = 2;
let kExternalGlobal = 3;
let kExternalException = 4;
let kTableZero = 0;
let kMemoryZero = 0;
let kSegmentZero = 0;
let kExceptionAttribute = 0;
let kSig_i_i = makeSig([kWasmI32], [kWasmI32]);
let kSig_l_l = makeSig([kWasmI64], [kWasmI64]);
let kSig_i_l = makeSig([kWasmI64], [kWasmI32]);
let kSig_i_ii = makeSig([kWasmI32, kWasmI32], [kWasmI32]);
let kSig_i_iii = makeSig([kWasmI32, kWasmI32, kWasmI32], [kWasmI32]);
let kSig_v_iiii = makeSig([kWasmI32, kWasmI32, kWasmI32, kWasmI32], []);
let kSig_f_ff = makeSig([kWasmF32, kWasmF32], [kWasmF32]);
let kSig_d_dd = makeSig([kWasmF64, kWasmF64], [kWasmF64]);
let kSig_l_ll = makeSig([kWasmI64, kWasmI64], [kWasmI64]);
let kSig_i_dd = makeSig([kWasmF64, kWasmF64], [kWasmI32]);
let kSig_v_v = makeSig([], []);
let kSig_i_v = makeSig([], [kWasmI32]);
let kSig_l_v = makeSig([], [kWasmI64]);
let kSig_f_v = makeSig([], [kWasmF32]);
let kSig_d_v = makeSig([], [kWasmF64]);
let kSig_v_i = makeSig([kWasmI32], []);
let kSig_v_ii = makeSig([kWasmI32, kWasmI32], []);
let kSig_v_iii = makeSig([kWasmI32, kWasmI32, kWasmI32], []);
let kSig_v_l = makeSig([kWasmI64], []);
let kSig_v_d = makeSig([kWasmF64], []);
let kSig_v_dd = makeSig([kWasmF64, kWasmF64], []);
let kSig_v_ddi = makeSig([kWasmF64, kWasmF64, kWasmI32], []);
let kSig_ii_v = makeSig([], [kWasmI32, kWasmI32]);
let kSig_iii_v = makeSig([], [kWasmI32, kWasmI32, kWasmI32]);
let kSig_ii_i = makeSig([kWasmI32], [kWasmI32, kWasmI32]);
let kSig_iii_i = makeSig([kWasmI32], [kWasmI32, kWasmI32, kWasmI32]);
let kSig_ii_ii = makeSig([kWasmI32, kWasmI32], [kWasmI32, kWasmI32]);
let kSig_iii_ii = makeSig([kWasmI32, kWasmI32], [kWasmI32, kWasmI32, kWasmI32]);
let kSig_v_f = makeSig([kWasmF32], []);
let kSig_f_f = makeSig([kWasmF32], [kWasmF32]);
let kSig_f_d = makeSig([kWasmF64], [kWasmF32]);
let kSig_d_d = makeSig([kWasmF64], [kWasmF64]);
let kSig_r_r = makeSig([kWasmAnyRef], [kWasmAnyRef]);
let kSig_a_a = makeSig([kWasmAnyFunc], [kWasmAnyFunc]);
let kSig_e_e = makeSig([kWasmExceptRef], [kWasmExceptRef]);
let kSig_i_r = makeSig([kWasmAnyRef], [kWasmI32]);
let kSig_v_r = makeSig([kWasmAnyRef], []);
let kSig_v_a = makeSig([kWasmAnyFunc], []);
let kSig_v_e = makeSig([kWasmExceptRef], []);
let kSig_v_rr = makeSig([kWasmAnyRef, kWasmAnyRef], []);
let kSig_v_aa = makeSig([kWasmAnyFunc, kWasmAnyFunc], []);
let kSig_r_v = makeSig([], [kWasmAnyRef]);
let kSig_a_v = makeSig([], [kWasmAnyFunc]);
let kSig_a_i = makeSig([kWasmI32], [kWasmAnyFunc]);
let kSig_e_v = makeSig([], [kWasmExceptRef]);

function makeSig(params, results) {
  return {
    params: params,
    results: results
  };
}

function makeSig_v_x(x) {
  return makeSig([x], []);
}

function makeSig_v_xx(x) {
  return makeSig([x, x], []);
}

function makeSig_r_v(r) {
  return makeSig([], [r]);
}

function makeSig_r_x(r, x) {
  return makeSig([x], [r]);
}

function makeSig_r_xx(r, x) {
  return makeSig([x, x], [r]);
}

let kExprUnreachable = 0x00;
let kExprNop = 0x01;
let kExprBlock = 0x02;
let kExprLoop = 0x03;
let kExprIf = 0x04;
let kExprElse = 0x05;
let kExprTry = 0x06;
let kExprCatch = 0x07;
let kExprThrow = 0x08;
let kExprRethrow = 0x09;
let kExprBrOnExn = 0x0a;
let kExprEnd = 0x0b;
let kExprBr = 0x0c;
let kExprBrIf = 0x0d;
let kExprBrTable = 0x0e;
let kExprReturn = 0x0f;
let kExprCallFunction = 0x10;
let kExprCallIndirect = 0x11;
let kExprReturnCall = 0x12;
let kExprReturnCallIndirect = 0x13;
let kExprDrop = 0x1a;
let kExprSelect = 0x1b;
let kExprGetLocal = 0x20;
let kExprSetLocal = 0x21;
let kExprTeeLocal = 0x22;
let kExprGetGlobal = 0x23;
let kExprSetGlobal = 0x24;
let kExprGetTable = 0x25;
let kExprSetTable = 0x26;
let kExprI32LoadMem = 0x28;
let kExprI64LoadMem = 0x29;
let kExprF32LoadMem = 0x2a;
let kExprF64LoadMem = 0x2b;
let kExprI32LoadMem8S = 0x2c;
let kExprI32LoadMem8U = 0x2d;
let kExprI32LoadMem16S = 0x2e;
let kExprI32LoadMem16U = 0x2f;
let kExprI64LoadMem8S = 0x30;
let kExprI64LoadMem8U = 0x31;
let kExprI64LoadMem16S = 0x32;
let kExprI64LoadMem16U = 0x33;
let kExprI64LoadMem32S = 0x34;
let kExprI64LoadMem32U = 0x35;
let kExprI32StoreMem = 0x36;
let kExprI64StoreMem = 0x37;
let kExprF32StoreMem = 0x38;
let kExprF64StoreMem = 0x39;
let kExprI32StoreMem8 = 0x3a;
let kExprI32StoreMem16 = 0x3b;
let kExprI64StoreMem8 = 0x3c;
let kExprI64StoreMem16 = 0x3d;
let kExprI64StoreMem32 = 0x3e;
let kExprMemorySize = 0x3f;
let kExprMemoryGrow = 0x40;
let kExprI32Const = 0x41;
let kExprI64Const = 0x42;
let kExprF32Const = 0x43;
let kExprF64Const = 0x44;
let kExprI32Eqz = 0x45;
let kExprI32Eq = 0x46;
let kExprI32Ne = 0x47;
let kExprI32LtS = 0x48;
let kExprI32LtU = 0x49;
let kExprI32GtS = 0x4a;
let kExprI32GtU = 0x4b;
let kExprI32LeS = 0x4c;
let kExprI32LeU = 0x4d;
let kExprI32GeS = 0x4e;
let kExprI32GeU = 0x4f;
let kExprI64Eqz = 0x50;
let kExprI64Eq = 0x51;
let kExprI64Ne = 0x52;
let kExprI64LtS = 0x53;
let kExprI64LtU = 0x54;
let kExprI64GtS = 0x55;
let kExprI64GtU = 0x56;
let kExprI64LeS = 0x57;
let kExprI64LeU = 0x58;
let kExprI64GeS = 0x59;
let kExprI64GeU = 0x5a;
let kExprF32Eq = 0x5b;
let kExprF32Ne = 0x5c;
let kExprF32Lt = 0x5d;
let kExprF32Gt = 0x5e;
let kExprF32Le = 0x5f;
let kExprF32Ge = 0x60;
let kExprF64Eq = 0x61;
let kExprF64Ne = 0x62;
let kExprF64Lt = 0x63;
let kExprF64Gt = 0x64;
let kExprF64Le = 0x65;
let kExprF64Ge = 0x66;
let kExprI32Clz = 0x67;
let kExprI32Ctz = 0x68;
let kExprI32Popcnt = 0x69;
let kExprI32Add = 0x6a;
let kExprI32Sub = 0x6b;
let kExprI32Mul = 0x6c;
let kExprI32DivS = 0x6d;
let kExprI32DivU = 0x6e;
let kExprI32RemS = 0x6f;
let kExprI32RemU = 0x70;
let kExprI32And = 0x71;
let kExprI32Ior = 0x72;
let kExprI32Xor = 0x73;
let kExprI32Shl = 0x74;
let kExprI32ShrS = 0x75;
let kExprI32ShrU = 0x76;
let kExprI32Rol = 0x77;
let kExprI32Ror = 0x78;
let kExprI64Clz = 0x79;
let kExprI64Ctz = 0x7a;
let kExprI64Popcnt = 0x7b;
let kExprI64Add = 0x7c;
let kExprI64Sub = 0x7d;
let kExprI64Mul = 0x7e;
let kExprI64DivS = 0x7f;
let kExprI64DivU = 0x80;
let kExprI64RemS = 0x81;
let kExprI64RemU = 0x82;
let kExprI64And = 0x83;
let kExprI64Ior = 0x84;
let kExprI64Xor = 0x85;
let kExprI64Shl = 0x86;
let kExprI64ShrS = 0x87;
let kExprI64ShrU = 0x88;
let kExprI64Rol = 0x89;
let kExprI64Ror = 0x8a;
let kExprF32Abs = 0x8b;
let kExprF32Neg = 0x8c;
let kExprF32Ceil = 0x8d;
let kExprF32Floor = 0x8e;
let kExprF32Trunc = 0x8f;
let kExprF32NearestInt = 0x90;
let kExprF32Sqrt = 0x91;
let kExprF32Add = 0x92;
let kExprF32Sub = 0x93;
let kExprF32Mul = 0x94;
let kExprF32Div = 0x95;
let kExprF32Min = 0x96;
let kExprF32Max = 0x97;
let kExprF32CopySign = 0x98;
let kExprF64Abs = 0x99;
let kExprF64Neg = 0x9a;
let kExprF64Ceil = 0x9b;
let kExprF64Floor = 0x9c;
let kExprF64Trunc = 0x9d;
let kExprF64NearestInt = 0x9e;
let kExprF64Sqrt = 0x9f;
let kExprF64Add = 0xa0;
let kExprF64Sub = 0xa1;
let kExprF64Mul = 0xa2;
let kExprF64Div = 0xa3;
let kExprF64Min = 0xa4;
let kExprF64Max = 0xa5;
let kExprF64CopySign = 0xa6;
let kExprI32ConvertI64 = 0xa7;
let kExprI32SConvertF32 = 0xa8;
let kExprI32UConvertF32 = 0xa9;
let kExprI32SConvertF64 = 0xaa;
let kExprI32UConvertF64 = 0xab;
let kExprI64SConvertI32 = 0xac;
let kExprI64UConvertI32 = 0xad;
let kExprI64SConvertF32 = 0xae;
let kExprI64UConvertF32 = 0xaf;
let kExprI64SConvertF64 = 0xb0;
let kExprI64UConvertF64 = 0xb1;
let kExprF32SConvertI32 = 0xb2;
let kExprF32UConvertI32 = 0xb3;
let kExprF32SConvertI64 = 0xb4;
let kExprF32UConvertI64 = 0xb5;
let kExprF32ConvertF64 = 0xb6;
let kExprF64SConvertI32 = 0xb7;
let kExprF64UConvertI32 = 0xb8;
let kExprF64SConvertI64 = 0xb9;
let kExprF64UConvertI64 = 0xba;
let kExprF64ConvertF32 = 0xbb;
let kExprI32ReinterpretF32 = 0xbc;
let kExprI64ReinterpretF64 = 0xbd;
let kExprF32ReinterpretI32 = 0xbe;
let kExprF64ReinterpretI64 = 0xbf;
let kExprI32SExtendI8 = 0xc0;
let kExprI32SExtendI16 = 0xc1;
let kExprI64SExtendI8 = 0xc2;
let kExprI64SExtendI16 = 0xc3;
let kExprI64SExtendI32 = 0xc4;
let kExprRefNull = 0xd0;
let kExprRefIsNull = 0xd1;
let kExprRefFunc = 0xd2;
let kNumericPrefix = 0xfc;
let kSimdPrefix = 0xfd;
let kAtomicPrefix = 0xfe;
let kExprMemoryInit = 0x08;
let kExprDataDrop = 0x09;
let kExprMemoryCopy = 0x0a;
let kExprMemoryFill = 0x0b;
let kExprTableInit = 0x0c;
let kExprElemDrop = 0x0d;
let kExprTableCopy = 0x0e;
let kExprTableGrow = 0x0f;
let kExprTableSize = 0x10;
let kExprTableFill = 0x11;
let kExprAtomicNotify = 0x00;
let kExprI32AtomicWait = 0x01;
let kExprI64AtomicWait = 0x02;
let kExprI32AtomicLoad = 0x10;
let kExprI32AtomicLoad8U = 0x12;
let kExprI32AtomicLoad16U = 0x13;
let kExprI32AtomicStore = 0x17;
let kExprI32AtomicStore8U = 0x19;
let kExprI32AtomicStore16U = 0x1a;
let kExprI32AtomicAdd = 0x1e;
let kExprI32AtomicAdd8U = 0x20;
let kExprI32AtomicAdd16U = 0x21;
let kExprI32AtomicSub = 0x25;
let kExprI32AtomicSub8U = 0x27;
let kExprI32AtomicSub16U = 0x28;
let kExprI32AtomicAnd = 0x2c;
let kExprI32AtomicAnd8U = 0x2e;
let kExprI32AtomicAnd16U = 0x2f;
let kExprI32AtomicOr = 0x33;
let kExprI32AtomicOr8U = 0x35;
let kExprI32AtomicOr16U = 0x36;
let kExprI32AtomicXor = 0x3a;
let kExprI32AtomicXor8U = 0x3c;
let kExprI32AtomicXor16U = 0x3d;
let kExprI32AtomicExchange = 0x41;
let kExprI32AtomicExchange8U = 0x43;
let kExprI32AtomicExchange16U = 0x44;
let kExprI32AtomicCompareExchange = 0x48;
let kExprI32AtomicCompareExchange8U = 0x4a;
let kExprI32AtomicCompareExchange16U = 0x4b;
let kExprI64AtomicLoad = 0x11;
let kExprI64AtomicLoad8U = 0x14;
let kExprI64AtomicLoad16U = 0x15;
let kExprI64AtomicLoad32U = 0x16;
let kExprI64AtomicStore = 0x18;
let kExprI64AtomicStore8U = 0x1b;
let kExprI64AtomicStore16U = 0x1c;
let kExprI64AtomicStore32U = 0x1d;
let kExprI64AtomicAdd = 0x1f;
let kExprI64AtomicAdd8U = 0x22;
let kExprI64AtomicAdd16U = 0x23;
let kExprI64AtomicAdd32U = 0x24;
let kExprI64AtomicSub = 0x26;
let kExprI64AtomicSub8U = 0x29;
let kExprI64AtomicSub16U = 0x2a;
let kExprI64AtomicSub32U = 0x2b;
let kExprI64AtomicAnd = 0x2d;
let kExprI64AtomicAnd8U = 0x30;
let kExprI64AtomicAnd16U = 0x31;
let kExprI64AtomicAnd32U = 0x32;
let kExprI64AtomicOr = 0x34;
let kExprI64AtomicOr8U = 0x37;
let kExprI64AtomicOr16U = 0x38;
let kExprI64AtomicOr32U = 0x39;
let kExprI64AtomicXor = 0x3b;
let kExprI64AtomicXor8U = 0x3e;
let kExprI64AtomicXor16U = 0x3f;
let kExprI64AtomicXor32U = 0x40;
let kExprI64AtomicExchange = 0x42;
let kExprI64AtomicExchange8U = 0x45;
let kExprI64AtomicExchange16U = 0x46;
let kExprI64AtomicExchange32U = 0x47;
let kExprI64AtomicCompareExchange = 0x49;
let kExprI64AtomicCompareExchange8U = 0x4c;
let kExprI64AtomicCompareExchange16U = 0x4d;
let kExprI64AtomicCompareExchange32U = 0x4e;
let kExprF32x4Min = 0x9e;
let kCompilationHintStrategyDefault = 0x00;
let kCompilationHintStrategyLazy = 0x01;
let kCompilationHintStrategyEager = 0x02;
let kCompilationHintStrategyLazyBaselineEagerTopTier = 0x03;
let kCompilationHintTierDefault = 0x00;
let kCompilationHintTierInterpreter = 0x01;
let kCompilationHintTierBaseline = 0x02;
let kCompilationHintTierOptimized = 0x03;
let kTrapUnreachable = 0;
let kTrapMemOutOfBounds = 1;
let kTrapDivByZero = 2;
let kTrapDivUnrepresentable = 3;
let kTrapRemByZero = 4;
let kTrapFloatUnrepresentable = 5;
let kTrapFuncInvalid = 6;
let kTrapFuncSigMismatch = 7;
let kTrapTypeError = 8;
let kTrapUnalignedAccess = 9;
let kTrapDataSegmentDropped = 10;
let kTrapElemSegmentDropped = 11;
let kTrapTableOutOfBounds = 12;
let kTrapMsgs = ["unreachable", "memory access out of bounds", "divide by zero", "divide result unrepresentable", "remainder by zero", "float unrepresentable in integer range", "invalid index into function table", "function signature mismatch", "wasm function signature contains illegal type", "operation does not support unaligned accesses", "data segment has been dropped", "element segment has been dropped", "table access out of bounds"];

function assertTraps(trap, code) {
  assertThrows(code, WebAssembly.RuntimeError, kTrapMsgs[trap]);
}

class Binary {
  constructor() {
    this.length = 0;
    this.buffer = new Uint8Array(8192);
  }

  ensure_space(needed) {
    if (this.buffer.length - this.length >= needed) return;
    let new_capacity = this.buffer.length * 2;

    while (new_capacity - this.length < needed) new_capacity *= 2;

    let new_buffer = new Uint8Array(new_capacity);
    new_buffer.set(this.buffer);
    this.buffer = new_buffer;
  }

  trunc_buffer() {
    return new Uint8Array(this.buffer.buffer, 0, this.length);
  }

  reset() {
    this.length = 0;
  }

  emit_u8(val) {
    this.ensure_space(1);
    this.buffer[this.length++] = val;
  }

  emit_u16(val) {
    this.ensure_space(2);
    this.buffer[this.length++] = val;
    this.buffer[this.length++] = val >> 8;
  }

  emit_u32(val) {
    this.ensure_space(4);
    this.buffer[this.length++] = val;
    this.buffer[this.length++] = val >> 8;
    this.buffer[this.length++] = val >> 16;
    this.buffer[this.length++] = val >> 24;
  }

  emit_leb(val, max_len) {
    this.ensure_space(max_len);

    for (let i = 0; i < max_len; ++i) {
      let v = val & 0xff;
      val = val >>> 7;

      if (val == 0) {
        this.buffer[this.length++] = v;
        return;
      }

      this.buffer[this.length++] = v | 0x80;
    }

    throw new Error("Leb value exceeds maximum length of " + max_len);
  }

  emit_u32v(val) {
    this.emit_leb(val, kMaxVarInt32Size);
  }

  emit_u64v(val) {
    this.emit_leb(val, kMaxVarInt64Size);
  }

  emit_bytes(data) {
    this.ensure_space(data.length);
    this.buffer.set(data, this.length);
    this.length += data.length;
  }

  emit_string(string) {
    if (string instanceof Array) {
      this.emit_u32v(string.length);
      this.emit_bytes(string);
      return;
    }

    let string_utf8 = unescape(encodeURIComponent(string));
    this.emit_u32v(string_utf8.length);

    for (let i = 0; i < string_utf8.length; i++) {
      this.emit_u8(string_utf8.charCodeAt(i));
    }
  }

  emit_header() {
    this.emit_bytes([kWasmH0, kWasmH1, kWasmH2, kWasmH3, kWasmV0, kWasmV1, kWasmV2, kWasmV3]);
  }

  emit_section(section_code, content_generator) {
    this.emit_u8(section_code);
    const section = new Binary();
    content_generator(section);
    this.emit_u32v(section.length);
    this.emit_bytes(section.trunc_buffer());
  }

}

class WasmFunctionBuilder {
  constructor(module, name, type_index) {
    this.module = module;
    this.name = name;
    this.type_index = type_index;
    this.body = [];
    this.locals = [];
    this.local_names = [];
  }

  numLocalNames() {
    let num_local_names = 0;

    for (let loc_name of this.local_names) {
      if (loc_name !== undefined) ++num_local_names;
    }

    return num_local_names;
  }

  exportAs(name) {
    this.module.addExport(name, this.index);
    return this;
  }

  exportFunc() {
    this.exportAs(this.name);
    return this;
  }

  setCompilationHint(strategy, baselineTier, topTier) {
    this.module.setCompilationHint(strategy, baselineTier, topTier, this.index);
    return this;
  }

  addBody(body) {
    for (let b of body) {
      if (typeof b !== 'number' || (b & ~0xFF) !== 0) throw new Error('invalid body (entries must be 8 bit numbers): ' + body);
    }

    this.body = body.slice();
    this.body.push(kExprEnd);
    return this;
  }

  addBodyWithEnd(body) {
    this.body = body;
    return this;
  }

  getNumLocals() {
    let total_locals = 0;

    for (let l of this.locals) {
      for (let type of ["i32", "i64", "f32", "f64", "s128"]) {
        total_locals += l[type + "_count"] || 0;
      }
    }

    return total_locals;
  }

  addLocals(locals, names) {
    const old_num_locals = this.getNumLocals();
    this.locals.push(locals);

    if (names) {
      const missing_names = old_num_locals - this.local_names.length;
      this.local_names.push(...new Array(missing_names), ...names);
    }

    return this;
  }

  end() {
    return this.module;
  }

}

class WasmGlobalBuilder {
  constructor(module, type, mutable) {
    this.module = module;
    this.type = type;
    this.mutable = mutable;
    this.init = 0;
  }

  exportAs(name) {
    this.module.exports.push({
      name: name,
      kind: kExternalGlobal,
      index: this.index
    });
    return this;
  }

}

class WasmTableBuilder {
  constructor(module, type, initial_size, max_size) {
    this.module = module;
    this.type = type;
    this.initial_size = initial_size;
    this.has_max = max_size != undefined;
    this.max_size = max_size;
  }

  exportAs(name) {
    this.module.exports.push({
      name: name,
      kind: kExternalTable,
      index: this.index
    });
    return this;
  }

}

class WasmModuleBuilder {
  constructor() {
    this.types = [];
    this.imports = [];
    this.exports = [];
    this.globals = [];
    this.tables = [];
    this.exceptions = [];
    this.functions = [];
    this.compilation_hints = [];
    this.element_segments = [];
    this.data_segments = [];
    this.explicit = [];
    this.num_imported_funcs = 0;
    this.num_imported_globals = 0;
    this.num_imported_tables = 0;
    this.num_imported_exceptions = 0;
    return this;
  }

  addStart(start_index) {
    this.start_index = start_index;
    return this;
  }

  addMemory(min, max, exp, shared) {
    this.memory = {
      min: min,
      max: max,
      exp: exp,
      shared: shared
    };
    return this;
  }

  addExplicitSection(bytes) {
    this.explicit.push(bytes);
    return this;
  }

  stringToBytes(name) {
    var result = new Binary();
    result.emit_u32v(name.length);

    for (var i = 0; i < name.length; i++) {
      result.emit_u8(name.charCodeAt(i));
    }

    return result.trunc_buffer();
  }

  createCustomSection(name, bytes) {
    name = this.stringToBytes(name);
    var section = new Binary();
    section.emit_u8(0);
    section.emit_u32v(name.length + bytes.length);
    section.emit_bytes(name);
    section.emit_bytes(bytes);
    return section.trunc_buffer();
  }

  addCustomSection(name, bytes) {
    this.explicit.push(this.createCustomSection(name, bytes));
  }

  addType(type) {
    this.types.push(type);
    var pl = type.params.length;
    var rl = type.results.length;
    return this.types.length - 1;
  }

  addGlobal(local_type, mutable) {
    let glob = new WasmGlobalBuilder(this, local_type, mutable);
    glob.index = this.globals.length + this.num_imported_globals;
    this.globals.push(glob);
    return glob;
  }

  addTable(type, initial_size, max_size = undefined) {
    if (type != kWasmAnyRef && type != kWasmAnyFunc) {
      throw new Error('Tables must be of type kWasmAnyRef or kWasmAnyFunc');
    }

    let table = new WasmTableBuilder(this, type, initial_size, max_size);
    table.index = this.tables.length + this.num_imported_tables;
    this.tables.push(table);
    return table;
  }

  addException(type) {
    let type_index = typeof type == "number" ? type : this.addType(type);
    let except_index = this.exceptions.length + this.num_imported_exceptions;
    this.exceptions.push(type_index);
    return except_index;
  }

  addFunction(name, type) {
    let type_index = typeof type == "number" ? type : this.addType(type);
    let func = new WasmFunctionBuilder(this, name, type_index);
    func.index = this.functions.length + this.num_imported_funcs;
    this.functions.push(func);
    return func;
  }

  addImport(module, name, type) {
    if (this.functions.length != 0) {
      throw new Error('Imported functions must be declared before local ones');
    }

    let type_index = typeof type == "number" ? type : this.addType(type);
    this.imports.push({
      module: module,
      name: name,
      kind: kExternalFunction,
      type: type_index
    });
    return this.num_imported_funcs++;
  }

  addImportedGlobal(module, name, type, mutable = false) {
    if (this.globals.length != 0) {
      throw new Error('Imported globals must be declared before local ones');
    }

    let o = {
      module: module,
      name: name,
      kind: kExternalGlobal,
      type: type,
      mutable: mutable
    };
    this.imports.push(o);
    return this.num_imported_globals++;
  }

  addImportedMemory(module, name, initial = 0, maximum, shared) {
    let o = {
      module: module,
      name: name,
      kind: kExternalMemory,
      initial: initial,
      maximum: maximum,
      shared: shared
    };
    this.imports.push(o);
    return this;
  }

  addImportedTable(module, name, initial, maximum, type) {
    if (this.tables.length != 0) {
      throw new Error('Imported tables must be declared before local ones');
    }

    let o = {
      module: module,
      name: name,
      kind: kExternalTable,
      initial: initial,
      maximum: maximum,
      type: type || kWasmAnyFunctionTypeForm
    };
    this.imports.push(o);
    return this.num_imported_tables++;
  }

  addImportedException(module, name, type) {
    if (this.exceptions.length != 0) {
      throw new Error('Imported exceptions must be declared before local ones');
    }

    let type_index = typeof type == "number" ? type : this.addType(type);
    let o = {
      module: module,
      name: name,
      kind: kExternalException,
      type: type_index
    };
    this.imports.push(o);
    return this.num_imported_exceptions++;
  }

  addExport(name, index) {
    this.exports.push({
      name: name,
      kind: kExternalFunction,
      index: index
    });
    return this;
  }

  addExportOfKind(name, kind, index) {
    this.exports.push({
      name: name,
      kind: kind,
      index: index
    });
    return this;
  }

  setCompilationHint(strategy, baselineTier, topTier, index) {
    this.compilation_hints[index] = {
      strategy: strategy,
      baselineTier: baselineTier,
      topTier: topTier
    };
    return this;
  }

  addDataSegment(addr, data, is_global = false) {
    this.data_segments.push({
      addr: addr,
      data: data,
      is_global: is_global,
      is_active: true
    });
    return this.data_segments.length - 1;
  }

  addPassiveDataSegment(data) {
    this.data_segments.push({
      data: data,
      is_active: false
    });
    return this.data_segments.length - 1;
  }

  exportMemoryAs(name) {
    this.exports.push({
      name: name,
      kind: kExternalMemory,
      index: 0
    });
  }

  addElementSegment(table, base, is_global, array) {
    this.element_segments.push({
      table: table,
      base: base,
      is_global: is_global,
      array: array,
      is_active: true
    });
    return this;
  }

  addPassiveElementSegment(array, is_import = false) {
    this.element_segments.push({
      array: array,
      is_active: false
    });
    return this;
  }

  appendToTable(array) {
    for (let n of array) {
      if (typeof n != 'number') throw new Error('invalid table (entries have to be numbers): ' + array);
    }

    if (this.tables.length == 0) {
      this.addTable(kWasmAnyFunc, 0);
    }

    let table = this.tables[0];
    const base = table.initial_size;
    const table_size = base + array.length;
    table.initial_size = table_size;

    if (table.has_max && table_size > table.max_size) {
      table.max_size = table_size;
    }

    return this.addElementSegment(0, base, false, array);
  }

  setTableBounds(min, max = undefined) {
    if (this.tables.length != 0) {
      throw new Error("The table bounds of table '0' have already been set.");
    }

    this.addTable(kWasmAnyFunc, min, max);
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  toBuffer(debug = false) {
    let binary = new Binary();
    let wasm = this;
    binary.emit_header();

    if (wasm.types.length > 0) {
      if (debug) print("emitting types @ " + binary.length);
      binary.emit_section(kTypeSectionCode, section => {
        section.emit_u32v(wasm.types.length);

        for (let type of wasm.types) {
          section.emit_u8(kWasmFunctionTypeForm);
          section.emit_u32v(type.params.length);

          for (let param of type.params) {
            section.emit_u8(param);
          }

          section.emit_u32v(type.results.length);

          for (let result of type.results) {
            section.emit_u8(result);
          }
        }
      });
    }

    if (wasm.imports.length > 0) {
      if (debug) print("emitting imports @ " + binary.length);
      binary.emit_section(kImportSectionCode, section => {
        section.emit_u32v(wasm.imports.length);

        for (let imp of wasm.imports) {
          section.emit_string(imp.module);
          section.emit_string(imp.name || '');
          section.emit_u8(imp.kind);

          if (imp.kind == kExternalFunction) {
            section.emit_u32v(imp.type);
          } else if (imp.kind == kExternalGlobal) {
            section.emit_u32v(imp.type);
            section.emit_u8(imp.mutable);
          } else if (imp.kind == kExternalMemory) {
            var has_max = typeof imp.maximum != "undefined";
            var is_shared = typeof imp.shared != "undefined";

            if (is_shared) {
              section.emit_u8(has_max ? 3 : 2);
            } else {
              section.emit_u8(has_max ? 1 : 0);
            }

            section.emit_u32v(imp.initial);
            if (has_max) section.emit_u32v(imp.maximum);
          } else if (imp.kind == kExternalTable) {
            section.emit_u8(imp.type);
            var has_max = typeof imp.maximum != "undefined";
            section.emit_u8(has_max ? 1 : 0);
            section.emit_u32v(imp.initial);
            if (has_max) section.emit_u32v(imp.maximum);
          } else if (imp.kind == kExternalException) {
            section.emit_u32v(kExceptionAttribute);
            section.emit_u32v(imp.type);
          } else {
            throw new Error("unknown/unsupported import kind " + imp.kind);
          }
        }
      });
    }

    if (wasm.functions.length > 0) {
      if (debug) print("emitting function decls @ " + binary.length);
      binary.emit_section(kFunctionSectionCode, section => {
        section.emit_u32v(wasm.functions.length);

        for (let func of wasm.functions) {
          section.emit_u32v(func.type_index);
        }
      });
    }

    if (wasm.tables.length > 0) {
      if (debug) print("emitting tables @ " + binary.length);
      binary.emit_section(kTableSectionCode, section => {
        section.emit_u32v(wasm.tables.length);

        for (let table of wasm.tables) {
          section.emit_u8(table.type);
          section.emit_u8(table.has_max);
          section.emit_u32v(table.initial_size);
          if (table.has_max) section.emit_u32v(table.max_size);
        }
      });
    }

    if (wasm.memory !== undefined) {
      if (debug) print("emitting memory @ " + binary.length);
      binary.emit_section(kMemorySectionCode, section => {
        section.emit_u8(1);
        const has_max = wasm.memory.max !== undefined;
        const is_shared = wasm.memory.shared !== undefined;

        if (is_shared) {
          section.emit_u8(has_max ? kSharedHasMaximumFlag : 2);
        } else {
          section.emit_u8(has_max ? kHasMaximumFlag : 0);
        }

        section.emit_u32v(wasm.memory.min);
        if (has_max) section.emit_u32v(wasm.memory.max);
      });
    }

    if (wasm.globals.length > 0) {
      if (debug) print("emitting globals @ " + binary.length);
      binary.emit_section(kGlobalSectionCode, section => {
        section.emit_u32v(wasm.globals.length);

        for (let global of wasm.globals) {
          section.emit_u8(global.type);
          section.emit_u8(global.mutable);

          if (typeof global.init_index == "undefined") {
            switch (global.type) {
              case kWasmI32:
                section.emit_u8(kExprI32Const);
                section.emit_u32v(global.init);
                break;

              case kWasmI64:
                section.emit_u8(kExprI64Const);
                section.emit_u64v(global.init);
                break;

              case kWasmF32:
                section.emit_u8(kExprF32Const);
                f32_view[0] = global.init;
                section.emit_bytes(f32_bytes_view);
                break;

              case kWasmF64:
                section.emit_u8(kExprF64Const);
                f64_view[0] = global.init;
                section.emit_bytes(f64_bytes_view);
                break;

              case kWasmAnyFunc:
              case kWasmAnyRef:
                if (global.function_index !== undefined) {
                  section.emit_u8(kExprRefFunc);
                  section.emit_u32v(global.function_index);
                } else {
                  section.emit_u8(kExprRefNull);
                }

                break;

              case kWasmExceptRef:
                section.emit_u8(kExprRefNull);
                break;
            }
          } else {
            section.emit_u8(kExprGetGlobal);
            section.emit_u32v(global.init_index);
          }

          section.emit_u8(kExprEnd);
        }
      });
    }

    if (wasm.exceptions.length > 0) {
      if (debug) print("emitting exceptions @ " + binary.length);
      binary.emit_section(kExceptionSectionCode, section => {
        section.emit_u32v(wasm.exceptions.length);

        for (let type of wasm.exceptions) {
          section.emit_u32v(kExceptionAttribute);
          section.emit_u32v(type);
        }
      });
    }

    var mem_export = wasm.memory !== undefined && wasm.memory.exp;
    var exports_count = wasm.exports.length + (mem_export ? 1 : 0);

    if (exports_count > 0) {
      if (debug) print("emitting exports @ " + binary.length);
      binary.emit_section(kExportSectionCode, section => {
        section.emit_u32v(exports_count);

        for (let exp of wasm.exports) {
          section.emit_string(exp.name);
          section.emit_u8(exp.kind);
          section.emit_u32v(exp.index);
        }

        if (mem_export) {
          section.emit_string("memory");
          section.emit_u8(kExternalMemory);
          section.emit_u8(0);
        }
      });
    }

    if (wasm.start_index !== undefined) {
      if (debug) print("emitting start function @ " + binary.length);
      binary.emit_section(kStartSectionCode, section => {
        section.emit_u32v(wasm.start_index);
      });
    }

    if (wasm.element_segments.length > 0) {
      if (debug) print("emitting element segments @ " + binary.length);
      binary.emit_section(kElementSectionCode, section => {
        var inits = wasm.element_segments;
        section.emit_u32v(inits.length);

        for (let init of inits) {
          if (init.is_active) {
            if (init.table == 0) {
              section.emit_u32v(kActiveNoIndex);
            } else {
              section.emit_u32v(kActiveWithIndex);
              section.emit_u32v(init.table);
            }

            if (init.is_global) {
              section.emit_u8(kExprGetGlobal);
            } else {
              section.emit_u8(kExprI32Const);
            }

            section.emit_u32v(init.base);
            section.emit_u8(kExprEnd);
            section.emit_u32v(init.array.length);

            for (let index of init.array) {
              section.emit_u32v(index);
            }
          } else {
            section.emit_u8(kPassive);
            section.emit_u8(kWasmAnyFunc);
            section.emit_u32v(init.array.length);

            for (let index of init.array) {
              if (index === null) {
                section.emit_u8(kExprRefNull);
                section.emit_u8(kExprEnd);
              } else {
                section.emit_u8(kExprRefFunc);
                section.emit_u32v(index);
                section.emit_u8(kExprEnd);
              }
            }
          }
        }
      });
    }

    if (wasm.data_segments.some(seg => !seg.is_active)) {
      binary.emit_section(kDataCountSectionCode, section => {
        section.emit_u32v(wasm.data_segments.length);
      });
    }

    if (wasm.compilation_hints.length > 0) {
      if (debug) print("emitting compilation hints @ " + binary.length);
      let payloadBinary = new Binary();
      let implicit_compilation_hints_count = wasm.functions.length;
      payloadBinary.emit_u32v(implicit_compilation_hints_count);
      let defaultHintByte = kCompilationHintStrategyDefault | kCompilationHintTierDefault << 2 | kCompilationHintTierDefault << 4;

      for (let i = 0; i < implicit_compilation_hints_count; i++) {
        let index = wasm.num_imported_funcs + i;
        var hintByte;

        if (index in wasm.compilation_hints) {
          let hint = wasm.compilation_hints[index];
          hintByte = hint.strategy | hint.baselineTier << 2 | hint.topTier << 4;
        } else {
          hintByte = defaultHintByte;
        }

        payloadBinary.emit_u8(hintByte);
      }

      let name = "compilationHints";
      let bytes = this.createCustomSection(name, payloadBinary.trunc_buffer());
      binary.emit_bytes(bytes);
    }

    if (wasm.functions.length > 0) {
      if (debug) print("emitting code @ " + binary.length);
      binary.emit_section(kCodeSectionCode, section => {
        section.emit_u32v(wasm.functions.length);
        let header = new Binary();

        for (let func of wasm.functions) {
          header.reset();
          let local_decls = [];

          for (let l of func.locals || []) {
            if (l.i32_count > 0) {
              local_decls.push({
                count: l.i32_count,
                type: kWasmI32
              });
            }

            if (l.i64_count > 0) {
              local_decls.push({
                count: l.i64_count,
                type: kWasmI64
              });
            }

            if (l.f32_count > 0) {
              local_decls.push({
                count: l.f32_count,
                type: kWasmF32
              });
            }

            if (l.f64_count > 0) {
              local_decls.push({
                count: l.f64_count,
                type: kWasmF64
              });
            }

            if (l.s128_count > 0) {
              local_decls.push({
                count: l.s128_count,
                type: kWasmS128
              });
            }

            if (l.anyref_count > 0) {
              local_decls.push({
                count: l.anyref_count,
                type: kWasmAnyRef
              });
            }

            if (l.anyfunc_count > 0) {
              local_decls.push({
                count: l.anyfunc_count,
                type: kWasmAnyFunc
              });
            }

            if (l.except_count > 0) {
              local_decls.push({
                count: l.except_count,
                type: kWasmExceptRef
              });
            }
          }

          header.emit_u32v(local_decls.length);

          for (let decl of local_decls) {
            header.emit_u32v(decl.count);
            header.emit_u8(decl.type);
          }

          section.emit_u32v(header.length + func.body.length);
          section.emit_bytes(header.trunc_buffer());
          section.emit_bytes(func.body);
        }
      });
    }

    if (wasm.data_segments.length > 0) {
      if (debug) print("emitting data segments @ " + binary.length);
      binary.emit_section(kDataSectionCode, section => {
        section.emit_u32v(wasm.data_segments.length);

        for (let seg of wasm.data_segments) {
          if (seg.is_active) {
            section.emit_u8(0);

            if (seg.is_global) {
              section.emit_u8(kExprGetGlobal);
              section.emit_u32v(seg.addr);
            } else {
              section.emit_u8(kExprI32Const);
              section.emit_u32v(seg.addr);
            }

            section.emit_u8(kExprEnd);
          } else {
            section.emit_u8(kPassive);
          }

          section.emit_u32v(seg.data.length);
          section.emit_bytes(seg.data);
        }
      });
    }

    for (let exp of wasm.explicit) {
      if (debug) print("emitting explicit @ " + binary.length);
      binary.emit_bytes(exp);
    }

    let num_function_names = 0;
    let num_functions_with_local_names = 0;

    for (let func of wasm.functions) {
      if (func.name !== undefined) ++num_function_names;
      if (func.numLocalNames() > 0) ++num_functions_with_local_names;
    }

    if (num_function_names > 0 || num_functions_with_local_names > 0 || wasm.name !== undefined) {
      if (debug) print('emitting names @ ' + binary.length);
      binary.emit_section(kUnknownSectionCode, section => {
        section.emit_string('name');

        if (wasm.name !== undefined) {
          section.emit_section(kModuleNameCode, name_section => {
            name_section.emit_string(wasm.name);
          });
        }

        if (num_function_names > 0) {
          section.emit_section(kFunctionNamesCode, name_section => {
            name_section.emit_u32v(num_function_names);

            for (let func of wasm.functions) {
              if (func.name === undefined) continue;
              name_section.emit_u32v(func.index);
              name_section.emit_string(func.name);
            }
          });
        }

        if (num_functions_with_local_names > 0) {
          section.emit_section(kLocalNamesCode, name_section => {
            name_section.emit_u32v(num_functions_with_local_names);

            for (let func of wasm.functions) {
              if (func.numLocalNames() == 0) continue;
              name_section.emit_u32v(func.index);
              name_section.emit_u32v(func.numLocalNames());

              for (let i = 0; i < func.local_names.length; ++i) {
                if (func.local_names[i] === undefined) continue;
                name_section.emit_u32v(i);
                name_section.emit_string(func.local_names[i]);
              }
            }
          });
        }
      });
    }

    return binary.trunc_buffer();
  }

  toArray(debug = false) {
    return Array.from(this.toBuffer(debug));
  }

  instantiate(ffi) {
    let module = this.toModule();
    let instance = new WebAssembly.Instance(module, ffi);
    return instance;
  }

  asyncInstantiate(ffi) {
    return WebAssembly.instantiate(this.toBuffer(), ffi).then(({
      module,
      instance
    }) => instance);
  }

  toModule(debug = false) {
    return new WebAssembly.Module(this.toBuffer(debug));
  }

}

function wasmI32Const(val) {
  let bytes = [kExprI32Const];

  for (let i = 0; i < 4; ++i) {
    bytes.push(0x80 | val >> 7 * i & 0x7f);
  }

  bytes.push(val >> 7 * 4 & 0x7f);
  return bytes;
}

function wasmF32Const(f) {
  f32_view[0] = f;
  return [kExprF32Const, f32_bytes_view[0], f32_bytes_view[1], f32_bytes_view[2], f32_bytes_view[3]];
}

function wasmF64Const(f) {
  f64_view[0] = f;
  return [kExprF64Const, f64_bytes_view[0], f64_bytes_view[1], f64_bytes_view[2], f64_bytes_view[3], f64_bytes_view[4], f64_bytes_view[5], f64_bytes_view[6], f64_bytes_view[7]];
}

// Original: C:\snapshot\ochang_js_fuzzer\resources\fuzz_library.js
function __isPropertyOfType(obj, name, type) {
  let desc;

  try {
    desc = Object.getOwnPropertyDescriptor(obj, name);
  } catch (e) {
    return false;
  }

  if (!desc) return false;
  return typeof type === 'undefined' || typeof desc.value === type;
}

function __getProperties(obj, type) {
  if (typeof obj === "undefined" || obj === null) return [];
  let properties = [];

  for (let name of Object.getOwnPropertyNames(obj)) {
    if (__isPropertyOfType(obj, name, type)) properties.push(name);
  }

  let proto = Object.getPrototypeOf(obj);

  while (proto && proto != Object.prototype) {
    Object.getOwnPropertyNames(proto).forEach(name => {
      if (name !== 'constructor') {
        if (__isPropertyOfType(proto, name, type)) properties.push(name);
      }
    });
    proto = Object.getPrototypeOf(proto);
  }

  return properties;
}

function* __getObjects(root = this, level = 0) {
  if (level > 4) return;

  let obj_names = __getProperties(root, 'object');

  for (let obj_name of obj_names) {
    let obj = root[obj_name];
    if (obj === root) continue;
    yield obj;
    yield* __getObjects(obj, level + 1);
  }
}

function __getRandomObject(seed) {
  let objects = [];

  for (let obj of __getObjects()) {
    objects.push(obj);
  }

  return objects[seed % objects.length];
}

function __getRandomProperty(obj, seed) {
  let properties = __getProperties(obj);

  if (!properties.length) return undefined;
  return properties[seed % properties.length];
}

function __callRandomFunction(obj, seed, ...args) {
  let functions = __getProperties(obj, 'function');

  if (!functions.length) return;
  let random_function = functions[seed % functions.length];

  try {
    obj[random_function](...args);
  } catch (e) {}
}

function runNearStackLimit(f) {
  function t() {
    try {
      return t();
    } catch (e) {
      return f();
    }
  }

  ;

  try {
    return t();
  } catch (e) {}
}

try {
  this.failWithMessage = nop;
} catch (e) {}

try {
  this.triggerAssertFalse = nop;
} catch (e) {}

try {
  this.quit = nop;
} catch (e) {}

// Original: c:\clusterfuzz\bot\inputs\fuzzer-common-data-bundles\WebKit\JSTests\es6\Math_methods_Math.clz32.js
function __f_19416() {
  return typeof Math.clz32 === "function";
}

if (!__f_19416()) throw new Error("Test failed");

// Original: c:\clusterfuzz\bot\inputs\fuzzer-common-data-bundles\v8\test\mjsunit\wasm\import-function.js
function __f_19417(__v_97844, __v_97845) {
  var __v_97846 = new WasmModuleBuilder();

  var __v_97847 = __v_97846.addType(kSig_i_dd);

  try {
    __v_97846.addImport("q", "func", __v_97847);
  } catch (e) {}

  /* ExpressionMutator: Cloned sibling */
  try {
    __v_97846.addImport("q", "func", __v_97847);
  } catch (e) {}

  try {
    __v_97846.addFunction("main", __v_97847).addBody([kExprGetLocal, 0, kExprGetLocal, 1, kExprCallFunction, 0]).exportAs("main");
  } catch (e) {}

  var __v_97848 = __v_97846.instantiate({
    q: {
      func: __v_97844
    }
  }).exports.main;

  for (var __v_97849 = 0; __v_97849 < 100000; __v_97849 += 10003) {
    var __v_97850 =
    /* NumberMutator: Replaced 22.5 with 25.5 */
    25.5 + __v_97849,
        __v_97851 = 10.5 + __v_97849;

    var __v_97852 = __v_97848(__v_97850, __v_97851);

    try {
      __v_97845(__v_97852, __v_97850, __v_97851);
    } catch (e) {}
  }
}

var __v_97839 = function () {
  return this;
}();

var __v_97840 = [-99, -99, -99, -99];
var __v_97841 = false;

var __v_97842 = -1;

function __f_19418(__v_97853, __v_97854) {
  try {
    print("FOREIGN_SUB(" + __v_97853 + ", " + __v_97854 + ")");
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97840[
    /* NumberMutator: Replaced 0 with -57 */
    -57] = this;
  } catch (e) {}

  try {
    __v_97840[1] = __v_97853;
  } catch (e) {}

  try {
    /* VariableMutator: Replaced __v_97840 with __v_97842 */
    __v_97842[2] = __v_97854;
  } catch (e) {}

  return __v_97853 - __v_97854 | 0;
}

function __f_19419(__v_97855, __v_97856, __v_97857) {
  try {
    assertEquals(__v_97856 - __v_97857 | 0, __v_97855);
  } catch (e) {}

  /* ExpressionMutator: Repeated */

  /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/WebKit/JSTests/stress/array-push-array-storage-beyond-int32.js */
  try {
    __v_97841.length = 0x7fffffff;
  } catch (e) {}

  try {
    __v_97841.length = 0x7fffffff;
  } catch (e) {}

  try {
    assertTrue(__v_97841);
  } catch (e) {}

  /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/chakra/es6/ES6Symbol.js */
  try {
    __v_97855[__v_97857] = 'something';
  } catch (e) {}

  try {
    assertEquals(__v_97839, __v_97840[0]);
  } catch (e) {}

  try {
    assertEquals(__v_97856, __v_97840[1]);
  } catch (e) {}

  try {
    assertEquals(__v_97857, __v_97840[2]);
  } catch (e) {}

  try {
    __v_97841 = false;
  } catch (e) {}

  /* VariableOrObjectMutator: Random mutation */
  try {
    delete __v_97841[__getRandomProperty(__v_97841, 974002)], gc();
  } catch (e) {}

  try {
    delete __v_97855[__getRandomProperty(__v_97855, 146736)], gc();
  } catch (e) {}
}

try {
  __f_19417(__f_19418, __f_19419);
} catch (e) {}

function __f_19420(__v_97858, __v_97859, __v_97860, __v_97861) {
  try {
    print("FOREIGN_ABCD(" + __v_97858 + ", " +
    /* VariableMutator: Replaced __v_97859 with __v_97842 */
    __v_97842 + ", " + __v_97860 + ", " +
    /* VariableMutator: Replaced __v_97861 with __v_97858 */
    __v_97858 + ")");
  } catch (e) {}

  /* ExpressionMutator: Repeated */
  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97840[0] = this;
  } catch (e) {}

  /* VariableOrObjectMutator: Random mutation */
  try {
    delete __v_97840[__getRandomProperty(__v_97840, 338058)], gc();
  } catch (e) {}

  try {
    __callRandomFunction(__getRandomObject(672537), 148388, __getRandomObject(280915), -1e-15, 2147483648, __getRandomObject(48591), __getRandomObject(484633), __v_97861);
  } catch (e) {}

  try {
    __v_97840[
    /* NumberMutator: Replaced 1 with -11 */
    -11] = __v_97858;
  } catch (e) {}

  try {
    __v_97840[2] = __v_97859;
  } catch (e) {}

  try {
    __v_97840[3] = __v_97860;
  } catch (e) {}

  try {
    __v_97840[4] = __v_97861;
  } catch (e) {}

  return __v_97858 * __v_97859 * 6 | 0;
}

function __f_19421(__v_97862, __v_97863, __v_97864) {
  try {
    assertEquals(__v_97863 * __v_97864 *
    /* NumberMutator: Replaced 6 with 9 */
    9 | 0, __v_97862);
  } catch (e) {}

  try {
    assertTrue(__v_97841);
  } catch (e) {}

  try {
    assertEquals(__v_97839, __v_97840[0]);
  } catch (e) {}

  try {
    assertEquals(__v_97863, __v_97840[
    /* NumberMutator: Replaced 1 with -2 */
    -2]);
  } catch (e) {}

  /* ExpressionMutator: Cloned sibling */
  try {
    assertEquals(__v_97863, __v_97840[-2]);
  } catch (e) {}

  try {
    assertEquals(__v_97864, __v_97840[2]);
  } catch (e) {}

  /* VariableOrObjectMutator: Random mutation */
  try {
    __v_97842[__getRandomProperty(__v_97842, 39138)] = Array(0x8000).join("a"), gc();
  } catch (e) {}

  try {
    assertEquals(undefined,
    /* VariableMutator: Replaced __v_97840 with __v_97839 */
    __v_97839[3]);
  } catch (e) {}

  try {
    assertEquals(undefined, __v_97840[4]);
  } catch (e) {}

  /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/spidermonkey/non262/object/propertyIsEnumerable.js */
  try {
    propertyIsEnumerable.call(null, {});
  } catch (e) {}

  try {
    /* VariableMutator: Replaced __v_97841 with __v_97863 */
    __v_97863 = false;
  } catch (e) {}
}

try {
  __f_19417(__f_19420, __f_19421);
} catch (e) {}

function __f_19422() {
  try {
    print("FOREIGN_ARGUMENTS0");
  } catch (e) {}

  /* ExpressionMutator: Repeated */
  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97842 = arguments.length;
  } catch (e) {}

  for (var __v_97865 = 0; __v_97865 < arguments.length; __v_97865++) {
    try {
      __v_97840[__v_97865] = arguments[__v_97865];
    } catch (e) {}
  }

  return arguments[0] * arguments[1] * 7 | 0;
}

function __f_19423(__v_97866) {
  try {
    print("FOREIGN_ARGUMENTS1", __v_97866);
  } catch (e) {}

  try {
    /* VariableMutator: Replaced __v_97841 with __v_97840 */
    __v_97840 = true;
  } catch (e) {}

  try {
    __v_97842 = arguments.length;
  } catch (e) {}

  for (var __v_97867 = 0; __v_97867 < arguments.length; __v_97867++) {
    try {
      __v_97840[__v_97867] = arguments[__v_97867];
    } catch (e) {}
  }

  return arguments[0] * arguments[1] * 7 |
  /* NumberMutator: Replaced 0 with NaN */
  NaN;
}

function __f_19424(__v_97868, __v_97869) {
  try {
    print("FOREIGN_ARGUMENTS2", __v_97868, __v_97869);
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97842 = arguments.length;
  } catch (e) {}

  for (var __v_97870 = 0; __v_97870 < arguments.length; __v_97870++) {
    /* VariableOrObjectMutator: Random mutation */
    if (__v_97841 != null && typeof __v_97841 == "object") try {
      Object.defineProperty(__v_97841, __getRandomProperty(__v_97841, 338648), {
        get: function () {
          try {
            delete __v_97841[__getRandomProperty(__v_97841, 639590)], gc();
          } catch (e) {}

          if (__v_97870 != null && typeof __v_97870 == "object") try {
            Object.defineProperty(__v_97870, __getRandomProperty(__v_97870, 367473), {
              value: __v_97841
            });
          } catch (e) {}
          return -1.7976931348623157e+308;
        },
        set: function (value) {
          try {
            __callRandomFunction(__v_97869, 534406, Math.PI, -2147483648, __v_97840, 0, Array(0x8000).fill("a"));
          } catch (e) {}
        }
      });
    } catch (e) {}

    try {
      __v_97840[__v_97870] = arguments[__v_97870];
    } catch (e) {}
  }

  return __v_97868 *
  /* VariableMutator: Replaced __v_97869 with __v_97839 */
  __v_97839 * 7 | 0;
}

function __f_19425(__v_97871, __v_97872, __v_97873) {
  /* ExpressionMutator: Repeated */
  try {
    print("FOREIGN_ARGUMENTS3", __v_97871, __v_97872, __v_97873);
  } catch (e) {}

  try {
    print("FOREIGN_ARGUMENTS3", __v_97871, __v_97872, __v_97873);
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97842 = arguments.length;
  } catch (e) {}

  for (var __v_97874 = 0; __v_97874 < arguments.length; __v_97874++) {
    /* ExpressionMutator: Repeated */
    try {
      __v_97840[__v_97874] = arguments[__v_97874];
    } catch (e) {}

    try {
      __v_97840[__v_97874] = arguments[__v_97874];
    } catch (e) {}
  }

  return __v_97871 * __v_97872 * 7 | 0;
}

function __f_19426(__v_97875, __v_97876, __v_97877, __v_97878) {
  /* ExpressionMutator: Repeated */
  try {
    print("FOREIGN_ARGUMENTS4", __v_97875, __v_97876,
    /* VariableMutator: Replaced __v_97877 with __v_97839 */
    __v_97839, __v_97878);
  } catch (e) {}

  /* VariableOrObjectMutator: Random mutation */
  try {
    delete __v_97877[__getRandomProperty(__v_97877, 349319)], gc();
  } catch (e) {}

  try {
    print("FOREIGN_ARGUMENTS4", __v_97875, __v_97876, __v_97839, __v_97878);
  } catch (e) {}

  try {
    __v_97841 = true;
  } catch (e) {}

  try {
    __v_97842 = arguments.length;
  } catch (e) {}

  for (var __v_97879 = 0; __v_97879 < arguments.length; __v_97879++) {
    try {
      __v_97840[__v_97879] = arguments[__v_97879];
    } catch (e) {}
  }

  return __v_97875 * __v_97876 * 7 | 0;
}

function __f_19427(__v_97880, __v_97881, __v_97882) {
  /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/chakra/Array/memop_alias.js */
  try {
    __v_97842[__v_97839] = 5;
  } catch (e) {}

  try {
    assertEquals(__v_97881 * __v_97882 * 7 | 0, __v_97880);
  } catch (e) {}

  try {
    assertTrue(__v_97841);
  } catch (e) {}

  /* ExpressionMutator: Repeated */
  try {
    assertEquals(2, __v_97842);
  } catch (e) {}

  try {
    assertEquals(2, __v_97842);
  } catch (e) {}

  try {
    assertEquals(__v_97881, __v_97840[0]);
  } catch (e) {}

  try {
    assertEquals(__v_97882, __v_97840[1]);
  } catch (e) {}

  /* ExpressionMutator: Repeated */
  try {
    __v_97841 = false;
  } catch (e) {}

  try {
    __v_97841 = false;
  } catch (e) {}
}

/* ExpressionMutator: Repeated */
try {
  __f_19417(__f_19422, __f_19427);
} catch (e) {}

try {
  __f_19417(__f_19422, __f_19427);
} catch (e) {}

try {
  __f_19417(__f_19423, __f_19427);
} catch (e) {}

/* VariableOrObjectMutator: Random mutation */
try {
  delete __v_97840[__getRandomProperty(__v_97840, 57012)], gc();
} catch (e) {}

try {
  __f_19417(__f_19424, __f_19427);
} catch (e) {}

/* ExpressionMutator: Cloned sibling */
try {
  __f_19417(__f_19422, __f_19427);
} catch (e) {}

try {
  __f_19417(__f_19425, __f_19427);
} catch (e) {}

try {
  __f_19417(__f_19426, __f_19427);
} catch (e) {}

function __f_19428(__v_97883) {
  return function (__v_97884, __v_97885) {
    try {
      print("RETURN_VALUE ", __v_97883);
    } catch (e) {}

    return __v_97883;
  };
}

function __f_19429(__v_97886) {
  return function (__v_97887, __v_97888, __v_97889) {
    try {
      assertEquals(__v_97886, __v_97887);
    } catch (e) {}
  };
}

try {
  __f_19417(__f_19428(undefined), __f_19429(0));
} catch (e) {}

try {
  __f_19417(__f_19428(null), __f_19429(0));
} catch (e) {}

try {
  __f_19417(__f_19428("0"), __f_19429(0));
} catch (e) {}

try {
  __f_19417(__f_19428("-77"), __f_19429(-77));
} catch (e) {}

var __v_97843 = {
  valueOf: function () {
    return 198;
  }
};

/* VariableOrObjectMutator: Random mutation */
try {
  delete __v_97839[__getRandomProperty(__v_97839, 927031)], gc();
} catch (e) {}

try {
  __f_19417(
  /* FunctionCallMutator: Replaced __f_19428 with __f_19427 */
  __f_19427(__v_97843), __f_19429(198));
} catch (e) {}

function __f_19430(__v_97890, __v_97891, __v_97892) {
  var __v_97893 = -1;

  var __v_97894 = -1;

  var __v_97895 = -1;

  var __v_97896 = -1;

  var __v_97897 = -1;

  var __v_97898 = {
    q: {
      func: function (__v_97907, __v_97908) {
        /* VariableOrObjectMutator: Random mutation */
        try {
          __v_97891 = __v_97897, gc();
        } catch (e) {}

        try {
          __v_97893 = arguments.length;
        } catch (e) {}

        try {
          __v_97894 = __v_97907;
        } catch (e) {}

        try {
          __v_97895 = __v_97908;
        } catch (e) {}

        /* VariableOrObjectMutator: Random mutation */
        if (__v_97841 != null && typeof __v_97841 == "object") try {
          Object.defineProperty(__v_97841, __getRandomProperty(__v_97841, 164357), {
            value: __v_97890
          });
        } catch (e) {}

        try {
          __v_97896 = arguments[0];
        } catch (e) {}

        /* ExpressionMutator: Repeated */

        /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/chakra/es6/ES6StringAPIs.js */
        try {
          __v_97842.findIndex();
        } catch (e) {}

        try {
          __v_97842.findIndex();
        } catch (e) {}

        try {
          __v_97897 = arguments[1];
        } catch (e) {}
      }
    }
  };

  var __v_97899 = new WasmModuleBuilder();

  try {
    /* VariableMutator: Replaced __v_97899 with __v_97890 */
    __v_97890.addImport("q", "func", makeSig_v_xx(__v_97890));
  } catch (e) {}

  try {
    __v_97899.addFunction("main", makeSig_r_xx(kWasmI32, __v_97890)).addBody([kExprGetLocal, 0, kExprGetLocal, 1, kExprCallFunction, 0, kExprI32Const,
    /* NumberMutator: Replaced 39 with 39 */
    39]).exportFunc("main");
  } catch (e) {}

  var __v_97900 = __v_97899.instantiate(__v_97898).exports.main;

  try {
    print("testCallBinopVoid", __v_97890);
  } catch (e) {}

  for (var __v_97901 = 0; __v_97901 < 100000; __v_97901 += 10003.1) {
    var __v_97902 = 22.5 + __v_97901,
        __v_97903 = 10.5 + __v_97901;

    var __v_97904 = __v_97900(__v_97902,
    /* VariableMutator: Replaced __v_97903 with __v_97894 */
    __v_97894);

    try {
      assertEquals(
      /* NumberMutator: Replaced 39 with 41 */
      41, __v_97904);
    } catch (e) {}

    try {
      assertEquals(2, __v_97893);
    } catch (e) {}

    var __v_97905, __v_97906;

    switch (
    /* VariableMutator: Replaced __v_97890 with __v_97841 */
    __v_97841) {
      case kWasmI32:
        {
          try {
            __v_97905 = __v_97902 |
            /* NumberMutator: Replaced 0 with -9 */
            -9;
          } catch (e) {}

          try {
            __v_97906 = __v_97903 | 0;
          } catch (e) {}

          break;
        }

      case kWasmF32:
        {
          try {
            __v_97905 = Math.fround(__v_97902);
          } catch (e) {}

          try {
            __v_97906 = Math.fround(__v_97903);
          } catch (e) {}

          break;
        }

      case kWasmF64:
        {
          try {
            __v_97905 = __v_97902;
          } catch (e) {}

          try {
            __v_97906 = __v_97903;
          } catch (e) {}

          break;
        }
    }

    try {
      assertEquals(__v_97905, __v_97896);
    } catch (e) {}

    /* VariableOrObjectMutator: Random mutation */
    try {
      __v_97901[__getRandomProperty(__v_97901, 1004208)] = Symbol("foo"), gc();
    } catch (e) {}

    try {
      assertEquals(__v_97906, __v_97897);
    } catch (e) {}

    /* ExpressionMutator: Repeated */
    try {
      assertEquals(__v_97905, __v_97894);
    } catch (e) {}

    try {
      assertEquals(__v_97905, __v_97894);
    } catch (e) {}

    try {
      assertEquals(__v_97906, __v_97895);
    } catch (e) {}
  }
}

try {
  __f_19430(kWasmI32);
} catch (e) {}

/* VariableOrObjectMutator: Random mutation */
try {
  __v_97840[__getRandomProperty(__v_97840, 221312)] = __f_19425, gc();
} catch (e) {}

try {
  __f_19430(kWasmF32);
} catch (e) {}

try {
  __f_19430(kWasmF64);
} catch (e) {}

try {
  __f_19430(kWasmF64);
} catch (e) {}

try {
  %OptimizeFunctionOnNextCall(__f_19430);
} catch (e) {}

/* VariableOrObjectMutator: Random mutation */
if (__v_97839 != null && typeof __v_97839 == "object") try {
  Object.defineProperty(__v_97839, __getRandomProperty(__v_97842, 11241), {
    value: __v_97840
  });
} catch (e) {}

try {
  delete __v_97842[__getRandomProperty(__v_97842, 6073)], gc();
} catch (e) {}

try {
  /* FunctionCallMutator: Optimizing __f_19430 */
  __f_19430(kWasmF64);
} catch (e) {}

function __f_19431() {
  var __v_97909 = new WasmModuleBuilder();

  try {
    /* VariableMutator: Replaced __v_97909 with __v_97839 */
    __v_97839.addImport("q", "print", makeSig_v_x(kWasmI32));
  } catch (e) {}

  try {
    __v_97909.addImport("q", "print", makeSig_r_x(kWasmF64, kWasmF64));
  } catch (e) {}

  try {
    __v_97909.addFunction("main", makeSig_r_x(kWasmF64, kWasmF64)).addBody([kExprI32Const, 27, kExprCallFunction, 0, kExprGetLocal, 0, kExprCallFunction, 1]).exportFunc();
  } catch (e) {}

  var __v_97910 = __v_97909.instantiate({
    q: {
      print: print
    }
  }).exports.main;

  for (var __v_97911 = -9; __v_97911 < 900; __v_97911 += 16.125) {
    try {
      /* VariableMutator: Replaced __v_97910 with __v_97911 */
      __v_97911(__v_97911);
    } catch (e) {}

    /* VariableOrObjectMutator: Random mutation */
    try {
      __callRandomFunction(__v_97843, 381090, __getRandomObject(320982), __getRandomObject(828485), __v_97841);
    } catch (e) {}

    if (__v_97841 != null && typeof __v_97841 == "object") try {
      Object.defineProperty(__v_97841, __getRandomProperty(__v_97841, 719239), {
        value: __v_97840
      });
    } catch (e) {}
  }
}

try {
  __f_19431();
} catch (e) {}

try {
  __f_19431();
} catch (e) {}

function __f_19432(__v_97912, __v_97913, __v_97914) {
  var __v_97915 = new WasmModuleBuilder();

  try {
    __v_97915.addImport("q", "foo", kSig_i_v);
  } catch (e) {}

  /* ExpressionMutator: Cloned sibling */
  try {
    assertEquals(__v_97914, __v_97916());
  } catch (e) {}

  try {
    __v_97915.addImport("t", "bar", kSig_i_v);
  } catch (e) {}

  try {
    __v_97915.addFunction("main", kSig_i_v).addBody([kExprCallFunction, 0, kExprCallFunction, 1, kExprI32Add]).exportFunc();
  } catch (e) {}

  var __v_97916 = __v_97915.instantiate({
    q: {
      foo: __v_97912
    },
    t: {
      bar: __v_97913
    }
  }).exports.main;

  try {
    assertEquals(__v_97914, __v_97916());
  } catch (e) {}
}

try {
  __f_19432(function () {
    return 33;
  }, function () {
    return 44;
  },
  /* NumberMutator: Replaced 77 with 75 */
  75);
} catch (e) {}

function __f_19433(__v_97917) {
  var __v_97918 = new WasmModuleBuilder();

  try {
    __v_97918.addImport("M", __v_97917, kSig_i_v);
  } catch (e) {}

  /* VariableOrObjectMutator: Random mutation */
  try {
    __v_97840[__getRandomProperty(__v_97840, 703041)], gc();
  } catch (e) {}

  try {
    __v_97918.addFunction("main", kSig_i_v).addBody([kExprCallFunction, 0]).exportFunc();
  } catch (e) {}

  /* ExpressionMutator: Cloned sibling */
  try {
    assertEquals(
    /* NumberMutator: Replaced 42 with 26 */
    26, __v_97919());
  } catch (e) {}

  let __v_97919 =
  /* VariableMutator: Replaced __v_97918 with __v_97843 */
  __v_97843.instantiate({
    M: {
      [__v_97917]: () =>
      /* NumberMutator: Replaced 42 with 45 */
      45
    }
  }).exports.main;

  try {
    assertEquals(26, __v_97919());
  } catch (e) {}
}

try {
  __f_19433('bla');
} catch (e) {}

try {
  __f_19433('0');
} catch (e) {}

try {
  __f_19433('  a @#$2 324 ');
} catch (e) {}

try {
  __f_19433('');
} catch (e) {}

/* VariableOrObjectMutator: Random mutation */
if (__v_97842 != null && typeof __v_97842 == "object") try {
  Object.defineProperty(__v_97842, __getRandomProperty(__v_97842, 304126), {
    get: function () {
      try {
        __v_97839[__getRandomProperty(__v_97839, 423670)] = /0/, gc();
      } catch (e) {}

      try {
        __v_97841[__getRandomProperty(__v_97841, 808342)] = -1073741824, gc();
      } catch (e) {}

      try {
        __v_97841[__getRandomProperty(__v_97841, 439896)], gc();
      } catch (e) {}

      if (__v_97839 != null && typeof __v_97839 == "object") try {
        Object.defineProperty(__v_97839, __getRandomProperty(__v_97839, 423115), {
          get: function () {
            return __getRandomObject(429229);
          },
          set: function (value) {}
        });
      } catch (e) {}
      return __v_97842;
    },
    set: function (value) {
      try {
        __callRandomFunction(__v_97840, 414435, __getRandomObject(402424), -9007199254740990, __getRandomObject(708548), __getRandomObject(505290), /0/, __v_97839);
      } catch (e) {}
    }
  });
} catch (e) {}

try {
  (function __f_19434() {
    try {
      print(arguments.callee.name);
    } catch (e) {}

    const __v_97920 = function () {
      const __v_97928 = new WasmModuleBuilder();

      try {
        __v_97928.addFunction('f11', kSig_i_v).addBody([kExprI32Const, 11]).exportFunc();
      } catch (e) {}

      try {
        __v_97928.addFunction('f17', kSig_i_v).addBody([kExprI32Const, 17]).exportFunc();
      } catch (e) {}

      return __v_97928.instantiate().exports;
    }();

    const __v_97921 = new WasmModuleBuilder();

    const __v_97922 = __v_97921.addImport('q', 'imp', kSig_i_v);

    try {
      /* VariableMutator: Replaced __v_97921 with __v_97840 */
      __v_97840.addExport('exp', __v_97922);
    } catch (e) {}

    const __v_97923 = __v_97921.toModule();

    const __v_97924 = new WebAssembly.Instance(__v_97923, {
      q: {
        imp: __v_97920.f11
      }
    });

    const __v_97925 = new WebAssembly.Instance(__v_97923, {
      q: {
        imp: __v_97920.f17
      }
    });

    const __v_97926 = new WebAssembly.Instance(
    /* VariableMutator: Replaced __v_97923 with __v_97923 */
    __v_97923, {
      q: {
        imp: __v_97929 => 21
      }
    });

    const __v_97927 = new WebAssembly.Instance(__v_97923, {
      q: {
        imp: __v_97930 => 27
      }
    });

    try {
      assertEquals(11, __v_97924.exports.exp());
    } catch (e) {}

    try {
      assertEquals(17, __v_97925.exports.exp());
    } catch (e) {}

    try {
      assertEquals(21, __v_97926.exports.exp());
    } catch (e) {}

    try {
      assertEquals(27, __v_97927.exports.exp());
    } catch (e) {}
  })();
} catch (e) {}

try {
  (function __f_19435() {
    try {
      print(arguments.callee.name);
    } catch (e) {}

    var __v_97931 = 0;

    const __v_97932 = __v_97937 => __v_97931 = __v_97937;

    const __v_97933 = function () {
      const __v_97938 = new WasmModuleBuilder();

      const __v_97939 = __v_97938.addImport('q', 'imp', kSig_v_i);

      try {
        __v_97938.addFunction('f11', kSig_v_v).addBody([kExprI32Const, 11, kExprCallFunction,
        /* VariableMutator: Replaced __v_97939 with __v_97938 */
        __v_97938]).exportFunc();
      } catch (e) {}

      try {
        __v_97938.addFunction('f17', kSig_v_v).addBody([kExprI32Const, 17, kExprCallFunction, __v_97939]).exportFunc();
      } catch (e) {}

      return __v_97938.instantiate({
        q: {
          imp: __v_97932
        }
      }).exports;
    }();

    const __v_97934 = new WasmModuleBuilder();

    const __v_97935 = __v_97934.addImport('q', 'imp', kSig_v_v);

    /* VariableOrObjectMutator: Random mutation */
    if (__v_97839 != null && typeof __v_97839 == "object") try {
      Object.defineProperty(__v_97839, __getRandomProperty(__v_97839, 559769), {
        value: __getRandomObject(853229)
      });
    } catch (e) {}

    try {
      __v_97934.addStart(__v_97935);
    } catch (e) {}

    const __v_97936 = __v_97934.toModule();

    try {
      assertEquals(0, __v_97931);
    } catch (e) {}

    /* CrossOverMutator: Crossover from /usr/local/google/home/ochang/Downloads/web_tests/v8/test/mjsunit/regress/regress-350863.js */
    try {
      __v_97842[__v_97934 + 18] = 0;
    } catch (e) {}

    try {
      new WebAssembly.Instance(
      /* VariableMutator: Replaced __v_97936 with __v_97934 */
      __v_97934, {
        q: {
          imp: __v_97933.f11
        }
      });
    } catch (e) {}

    /* VariableOrObjectMutator: Random mutation */
    if (__v_97936 != null && typeof __v_97936 == "object") try {
      Object.defineProperty(__v_97936, __getRandomProperty(__v_97936, 758392), {
        value: -4294967296
      });
    } catch (e) {}

    try {
      assertEquals(11, __v_97931);
    } catch (e) {}

    try {
      new WebAssembly.Instance(__v_97936, {
        q: {
          imp: __v_97933.f17
        }
      });
    } catch (e) {}

    try {
      assertEquals(17, __v_97931);
    } catch (e) {}

    try {
      new WebAssembly.Instance(__v_97936, {
        q: {
          imp: __v_97940 => __v_97932(21)
        }
      });
    } catch (e) {}

    try {
      assertEquals(21, __v_97931);
    } catch (e) {}

    /* VariableOrObjectMutator: Random mutation */
    try {
      __callRandomFunction(__v_97842, 245171, {
        valueOf: function () {
          return "0";
        }
      });
    } catch (e) {}

    try {
      __v_97936[__getRandomProperty(__v_97936, 784494)] = __getRandomObject(1004413), gc();
    } catch (e) {}

    if (__v_97842 != null && typeof __v_97842 == "object") try {
      Object.defineProperty(__v_97842, __getRandomProperty(__v_97842, 583664), {
        get: function () {
          try {
            __callRandomFunction(__v_97839, 714111, 9007199254740990, __v_97933, Symbol("foo"), new Number(0), 5e-324, 0, -9007199254740992, __v_97843, __v_97840, __getRandomObject(728718));
          } catch (e) {}

          return __v_97935;
        },
        set: function (value) {
          try {
            delete __v_97840[__getRandomProperty(__v_97840, 781863)], gc();
          } catch (e) {}

          if (__v_97936 != null && typeof __v_97936 == "object") try {
            Object.defineProperty(__v_97936, __getRandomProperty(__v_97840, 859318), {
              value: this[0]
            });
          } catch (e) {}
        }
      });
    } catch (e) {}

    try {
      __v_97935 = __v_97841, gc();
    } catch (e) {}

    try {
      __callRandomFunction(__v_97843, 458468, __getRandomObject(6880), __getRandomObject(657523), -2147483649, __v_97931, 2147483647);
    } catch (e) {}

    try {
      new WebAssembly.Instance(__v_97936, {
        q: {
          imp: __v_97941 => __v_97932(27)
        }
      });
    } catch (e) {}

    /* VariableOrObjectMutator: Random mutation */
    if (__getRandomObject(140363) != null && typeof __getRandomObject(140363) == "object") try {
      Object.defineProperty(__getRandomObject(140363), __getRandomProperty(__getRandomObject(140363), 802066), {
        value: __v_97842
      });
    } catch (e) {}

    try {
      assertEquals(27, __v_97931);
    } catch (e) {}
  })();
} catch (e) {}

/* VariableOrObjectMutator: Random mutation */
try {
  delete __v_97843[__getRandomProperty(__v_97843, 416698)], gc();
} catch (e) {}

try {
  (function __f_19436() {
    try {
      print(arguments.callee.name);
    } catch (e) {}

    var __v_97942 = 0;

    const __v_97943 = __v_97948 => __v_97942 = __v_97948;

    const __v_97944 = function () {
      const __v_97949 = new WasmModuleBuilder();

      try {
        __v_97949.addMemory(1, 1);
      } catch (e) {}

      try {
        __v_97949.exportMemoryAs('mem');
      } catch (e) {}

      const __v_97950 = __v_97949.addImport('q', 'imp', kSig_v_i);

      try {
        __v_97949.addFunction('f', kSig_v_v).addBody([kExprI32Const, 0, kExprI32Const, 11, kExprI32StoreMem8, 0, 0]).exportFunc();
      } catch (e) {}

      return __v_97949.instantiate({
        q: {
          imp: __v_97943
        }
      }).exports;
    }();

    const __v_97945 = new WasmModuleBuilder();

    const __v_97946 = __v_97945.addImport('q', 'imp', kSig_v_v);

    try {
      __v_97945.addStart(__v_97946);
    } catch (e) {}

    const __v_97947 = __v_97945.toModule();

    try {
      assertEquals(0, new Uint8Array(__v_97944.mem.buffer)[0], 'memory initially 0');
    } catch (e) {}

    try {
      new WebAssembly.Instance(__v_97947, {
        q: {
          imp: __v_97944.f
        }
      });
    } catch (e) {}

    try {
      assertEquals(11, new Uint8Array(__v_97944.mem.buffer)[0], 'memory changed to 11');
    } catch (e) {}
  })();
} catch (e) {}