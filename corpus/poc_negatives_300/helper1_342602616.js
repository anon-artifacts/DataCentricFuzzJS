// Shell integration.
if (typeof console === 'undefined') {
    console = { log: function() {} }; // Empty function to replace console.log
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
  
  // Set up the imports.
  var imports = {
    'fuzzing-support': {
      'log-i32': function() {},
      'log-i64': function() {},
      'log-f32': function() {},
      'log-f64': function() {},
      'log-v128': function() {},
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
      var result = func.apply(null, args);
    } catch (e) {
      // Handling exceptions without logging
    }
  }
  