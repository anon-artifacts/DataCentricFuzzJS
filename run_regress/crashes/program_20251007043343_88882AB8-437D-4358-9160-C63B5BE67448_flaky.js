Function(`\n  let kJSEmbeddingMaxTypes = 1000000;\n  let kJSEmbeddingMaxFunctions = 1000000;\n  let kJSEmbeddingMaxImports = 100000;\n  const known_failures = {};\n  function test(func, description) {\n    known_failures[description]\n  }\n  function testLimit(name, min, limit, gen) {\n    test(() => {}, \`Validate \${name} mininum\`);\n    test(() => {}, \`Async compile \${name} over limit\`);\n  }\n  testLimit("types", 1, kJSEmbeddingMaxTypes, (builder, count) => {});\n  testLimit("functions", 1, kJSEmbeddingMaxFunctions, (builder, count) => {});\n  testLimit("imports", 1, kJSEmbeddingMaxImports, (builder, count) => {});\n`);
// CRASH INFO
// ==========
// TERMSIG: 6
// STDERR:
// 
// STDOUT:
// 
// FUZZER ARGS: .build/x86_64-unknown-linux-gnu/release/FuzzilliCli --storagePath=run_regress --importCorpus=regression_tests --corpusImportMode=full --overwrite --wasm --timeout=400 --profile=v8 --jobs=28 v8/out/fuzzbuild/d8
// TARGET ARGS: v8/out/fuzzbuild/d8 --expose-gc --expose-externalize-string --omit-quit --allow-natives-syntax --fuzzing --jit-fuzzing --future --verify-heap --harmony --js-staging --wasm-staging --wasm-fast-api --expose-fast-api --experimental-wasm-memory64
// CONTRIBUTORS: 
// EXECUTION TIME: 113ms
