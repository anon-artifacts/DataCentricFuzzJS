// Shell integration.
if (typeof console === 'undefined') {
  console = { log: print };
}
var tempRet0;
var binary;

// Argument handling
var args;
if (typeof scriptArgs != 'undefined') {
  args = scriptArgs;
} else if (typeof arguments != 'undefined') {
  args = arguments;
}

var wasmFilePath = args[0];

// Read the WebAssembly binary
if (typeof readbuffer === 'function') {
  binary = new Uint8Array(readbuffer(wasmFilePath));
} else {
  binary = read(wasmFilePath, 'binary');
}

// Utilities.
function assert(x, y) {
  if (!x) throw (y || 'assertion failed');
}

// Deterministic randomness.
var detrand = (function() {
  var hash = 5381;
  var x = 0;
  return function() {
    hash = (((hash << 5) + hash) ^ (x & 0xff)) >>> 0;
    x = (x + 1) % 256;
    return (hash % 256) / 256;
  };
})();

// Print out a value in a way that works well for fuzzing.
function printed(x, y) {
  if (typeof y !== 'undefined') {
    return x + ' ' + y;
  } else if (x === null) {
    return 'null';
  } else if (typeof x === 'string') {
    var escaped = '';
    for (u of x) {
      switch (u) {
        case '"':
          escaped += '\\"';
          continue;
        case '\\':
          escaped += '\\\\';
          continue;
        case '\b':
          escaped += '\\b';
          continue;
        case '\f':
          escaped += '\\f';
          continue;
        case '\n':
          escaped += '\\n';
          continue;
        case '\r':
          escaped += '\\r';
          continue;
        case '\t':
          escaped += '\\t';
          continue;
        default:
          break;
      }

      var codePoint = u.codePointAt(0);
      if (32 <= codePoint && codePoint < 127) {
        escaped += u;
        continue;
      }

      var printEscape = (codePoint) => {
        escaped += '\\u';
        escaped += ((codePoint & 0xF000) >> 12).toString(16);
        escaped += ((codePoint & 0x0F00) >> 8).toString(16);
        escaped += ((codePoint & 0x00F0) >> 4).toString(16);
        escaped += (codePoint & 0x000F).toString(16);
      };

      if (codePoint < 0x10000) {
        printEscape(codePoint);
      } else {
        printEscape(0xD800 + ((codePoint - 0x10000) >> 10));
        printEscape(0xDC00 + ((codePoint - 0x10000) & 0x3FF));
      }
    }
    return 'string("' + escaped + '")';
  } else if (typeof x === 'bigint') {
    return (Number(x) | 0) + ' ' + (Number(x >> 32n) | 0);
  } else if (typeof x !== 'number') {
    return typeof x;
  } else {
    return '' + x;
  }
}

// Fuzzer integration.
function logValue(x, y) {
  console.log('[logging ' + printed(x, y) + ']');
}

// Set up the imports.
var imports = {
  'fuzzing-support': {
    'log-i32': logValue,
    'log-i64': logValue,
    'log-f32': logValue,
    'log-f64': logValue,
    'log-v128': logValue,
  },
  'env': {
    'setTempRet0': function(x) { tempRet0 = x },
    'getTempRet0': function() { return tempRet0 },
  },
};

// If Tags are available, add the import j2wasm expects.
if (typeof WebAssembly.Tag !== 'undefined') {
  imports['imports'] = {
    'j2wasm.ExceptionUtils.tag': new WebAssembly.Tag({
      'parameters': ['externref']
    }),
  };
}

// Create the wasm.
var module = new WebAssembly.Module(binary);

var instance;
try {
  instance = new WebAssembly.Instance(module, imports);
} catch (e) {
  console.log('exception thrown: failed to instantiate module');
  quit();
}

// Handle the exports.
var exports = instance.exports;

var view;

function refreshView() {
  if (exports.memory) {
    view = new Int32Array(exports.memory.buffer);
  }
}

// Run the wasm.
for (var e in exports) {
  if (typeof exports[e] !== 'function') {
    continue;
  }
  var func = exports[e];
  var args = [];
  for (var i = 0; i < func.length; i++) {
    args.push(null);
  }
  try {
    console.log('calling ' + e);
    var result = func.apply(null, args);
    if (typeof result !== 'undefined') {
      console.log('note result: ' + e + ' => ' + printed(result));
    }
  } catch (e) {
    console.log('exception thrown: ' + e);
  }
}
