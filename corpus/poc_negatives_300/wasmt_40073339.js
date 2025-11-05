d8.file.execute("../../v8/v8/test/mjsunit/wasm/wasm-module-builder.js");

(function MultiResultTest() {
 print("MultiResultTest");
 let builder = new WasmModuleBuilder();
 let sig_i_ii = builder.addType(kSig_i_ii);
 let sig_iii_ii = builder.addType(kSig_iii_ii);

 let except = builder.addTag(kSig_v_v);
 builder.addFunction("callee", kSig_iii_ii)
 .addBody([
 kExprBlock, kWasmVoid,
 kExprLocalGet, 0,
 kExprBrIf, 0,
 kExprThrow, except,
 kExprEnd,
 kExprLocalGet, 0,
 kExprLocalGet, 1,
 kExprLocalGet, 0,
 kExprLocalGet, 1,
 kExprI32Sub]);
 builder.addFunction("main", kSig_i_ii)
 .addBody([
 kExprTry, kWasmVoid,
 kExprLocalGet, 0,
 kExprLocalGet, 1,
 kExprCallFunction, 0,
 kExprI32Mul,
 kExprI32Add,
 kExprReturn,
 kExprCatch, except,
 kExprEnd,
 kExprI32Const, 12,
 ])
 .exportAs("main");

 let module = new WebAssembly.Module(builder.toBuffer());
 let instance = new WebAssembly.Instance(module);
 // Throws;
 print(instance.exports.main(0, 2));

 // Does not throw
 print(instance.exports.main(3, 5));
})();
