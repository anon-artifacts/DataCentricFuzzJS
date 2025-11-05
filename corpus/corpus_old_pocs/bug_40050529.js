load('lib.js');
let builder1 = new WasmModuleBuilder();

function test(){
  c()
}

let func1_sig = makeSig(new Array(8).fill(kWasmI32), [kWasmI32]);
let imp = builder1.addImport('q', 'func', kSig_v_v);
let func1 = builder1.addFunction('func1', func1_sig)
                .addBody([
                  kExprGetLocal, 0,  // -
                  kExprCallFunction, imp
                ])
                .exportFunc();
let instance1 = builder1.instantiate({q: {func: test}});

let builder2 = new WasmModuleBuilder();

let func1_imp = builder2.addImport('q', 'func1', func1_sig);
let func2 = builder2.addFunction('func2', kSig_i_i)
                .addBody([
                  kExprGetLocal, 0,  // 1
                  kExprGetLocal, 0,  // 2
                  kExprGetLocal, 0,  // 3
                  kExprGetLocal, 0,  // 4
                  kExprGetLocal, 0,  // 5
                  kExprGetLocal, 0,  // 6
                  kExprGetLocal, 0,  // 7
                  kExprGetLocal, 0,  // 8
                  kExprCallFunction, func1_imp
                ])
                .exportFunc();

let instance2 = builder2.instantiate({q: {func1: instance1.exports.func1}});

%RedirectToWasmInterpreter(
        instance2, parseInt(instance2.exports.func2.name));

instance2.exports.func2(1);