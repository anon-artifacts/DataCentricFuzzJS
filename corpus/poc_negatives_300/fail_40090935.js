function makeWasmImportCaller(imp) {
  let builder = new WasmModuleBuilder();
  builder.addImport('', 'baz', kSig_v_v);
  builder.addFunction('bar', kSig_v_v)
    .addBody([
      kExprCallFunction, 0,
    ]).exportAs('bar');
  let module = new WebAssembly.Module(builder.toBuffer());
  let instance = new WebAssembly.Instance(module, {'': { baz: imp }});
  return instance.exports.bar;
}

function makeWasmIndirectCaller(table) {
  let builder = new WasmModuleBuilder();
  builder.addImportedTable("imp", "table", 2);
  const sig = builder.addType(kSig_v_v);
  builder.addFunction('bar', kSig_v_v)
    .addBody([
      kExprI32Const, 0,
      kExprCallIndirect, sig, 0,
    ]).exportAs('bar');
  let module = new WebAssembly.Module(builder.toBuffer());
  let instance = new WebAssembly.Instance(module,
    {
      'imp': {
        'table': table,
      },
    },
  );
  return instance.exports.bar;
}

function makeWasmTableReseter(table, func) {
  let builder = new WasmModuleBuilder();
  builder.addImport('', 'baz', kSig_v_v);
  builder.addFunction('bar', kSig_v_v)
    .addBody([
      kExprCallFunction, 0,
    ]).exportAs('bar');
  builder.addImportedTable("imp", "table", 2);
  builder.addFunctionTableInit(0, false, [0, 0], true);
  let module = new WebAssembly.Module(builder.toBuffer());
  let instance = new WebAssembly.Instance(module,
    {
      'imp': {
        'table': table,
      },
      '': { baz: func },
    },
  );
  return instance.exports.bar;
}

(function() {
  var table = new WebAssembly.Table({initial:2, element: 'anyfunc'});
  let a = makeWasmIndirectCaller(table);
  table.set(0, makeWasmImportCaller(function() {
    print('changing table 0 entries to "bad"');
    print('changed table 0 entries to "bad"');
    makeWasmTableReseter(table, makeWasmImportCaller(function() {
      print('bad');
    }))();
    table = null;
    gc();
    gc();
    gc();
    print('Returning');
  }));
  for (var i = 0; i < 4; i++) {
    gc();
    gc();
    gc();
    a();
    print('run ' + i);
  }
})();
