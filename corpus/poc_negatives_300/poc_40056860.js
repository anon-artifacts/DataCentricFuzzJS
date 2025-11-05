load('../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js');

const builder = new WasmModuleBuilder();
builder.addMemory(16, 32, false);
builder.addFunction('main', kSig_i_iii)
  .addBody([
    kExprLocalGet, 0,                                // local.get
    kExprI32Const, 0x7f,                             // i32.const
    kAtomicPrefix, kExprI32AtomicAdd8U, 0x00, 0x28,  // i32.atomic.add8_u
    kExprI32Const, 0,                                // i32.const
    kExprI32LoadMem8S, 0x00, 0x6c,                   // i32.load8_s
    kExprI32LoadMem, 0x00, 0x68,                     // i32.load
    kExprI32Const, 0,                                // i32.const
    kExprCallFunction, 0,                            // call function 0
]).exportFunc();
const instance = builder.instantiate();
instance.exports.main()