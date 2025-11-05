var kWasmH0 = 0;
var kWasmH1 = 0x61;
var kWasmH2 = 0x73;
var kWasmH3 = 0x6d;
var kWasmV0 = 0x1;
var kWasmV1 = 0;
var kWasmV2 = 0;
var kWasmV3 = 0;
let kTypeSectionCode = 1;
let kImportSectionCode = 2;
let kExportSectionCode = 7;
let kWasmFunctionTypeForm = 0x60;
let kWasmI32 = 0x7f;
let kSig_i_dd = makeSig([], [kWasmI32]);
function makeSig(params, results) {
  return {
    results: results
  };
}
class Binary {
  constructor() {
    this.length = 0;
    this.buffer = new Uint8Array(8192);
  }
  trunc_buffer() {
    return new Uint8Array(this.buffer.buffer, 0, this.length);
  }
  emit_u8(val) {
    this.buffer[this.length++] = val;
  }
  emit_leb(val) {
      let v = val & 0xff;
        this.buffer[this.length++] = v;
  }
  emit_u32v(val) {
    this.emit_leb(val);
  }
  emit_bytes(data) {
    this.buffer.set(data, this.length);
    this.length += data.length;
  }
  emit_string(string) {
    let string_utf8 = unescape(string);
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
  constructor(module) {
    this.module = module;
  }
  exportAs(name) {
    this.module.addExport(name);
  }
  addBody() {
  }
}
class WasmModuleBuilder {
  constructor() {
    this.types = [];
    this.imports = [];
    this.exports = [];
  }
  addType(type) {
    this.types.push(type);
  }
  addFunction(name, type) {
    let func = new WasmFunctionBuilder(this);
    return func;
  }
  addImport(module, name) {
    this.imports.push({
      module: module,
      name: name,
    });
  }
  addExport(name) {
    this.exports.push({
      name: name    });
  }
  toBuffer() {
    let binary = new Binary();
    let wasm = this;
    binary.emit_header();
      binary.emit_section(kTypeSectionCode, section => {
        section.emit_u32v(wasm.types.length);
        for (let type of wasm.types) {
          section.emit_u8(kWasmFunctionTypeForm);
          section.emit_u32v();
          section.emit_u32v(type.results.length);
          for (let result of type.results) {
            section.emit_u8(result);
          }
        }
      });
      binary.emit_section(kImportSectionCode, section => {
        section.emit_u32v(wasm.imports.length);
        for (let imp of wasm.imports) {
          section.emit_string(imp.module);
          section.emit_string(imp.name || '');
          section.emit_u8();
            section.emit_u32v();
        }
      });
    var mem_export = wasm.memory !== undefined && wasm.memory.exp;
    var exports_count = wasm.exports.length + (mem_export ? 1 : 0);
      binary.emit_section(kExportSectionCode, section => {
        section.emit_u32v(exports_count);
        for (let exp of wasm.exports) {
          section.emit_string(exp.name);
          section.emit_u8();
          section.emit_u32v();
        }
      });
    return binary.trunc_buffer();
  }
  instantiate(ffi) {
    let module = this.toModule();
    let instance = new WebAssembly.Instance(module, ffi);
    return instance;
  }
  toModule() {
    return new WebAssembly.Module(this.toBuffer());
  }
}
function __isPropertyOfType(obj, name, type) {
    desc = Object.getOwnPropertyDescriptor(obj, name)
  return typeof type === 'undefined' || typeof desc.value === type;
}
function __getProperties(obj, type) {
  let properties = [];
  for (let name of Object.getOwnPropertyNames(obj)) {
    if (__isPropertyOfType(obj, name, type)) properties.push(name);
  }
  return properties;
}
function* __getObjects(root = this) {
  let obj_names = __getProperties(root, 'object');
  for (let obj_name of obj_names) {
    let obj = root[obj_name];
    yield obj;
  }
}
function __getRandomObject(seed) {
  let objects = [];
  for (let obj of __getObjects()) {
    objects.push(obj);
  }
  return objects[seed % objects.length];
}
function __callRandomFunction(obj, seed) {
  let functions = __getProperties(obj);
  let random_function = functions[seed % functions.length];
    obj[random_function]()
}
function __f_19417(__v_97844) {
  var __v_97846 = new WasmModuleBuilder();
  var __v_97847 = __v_97846.addType(kSig_i_dd);
    __v_97846.addImport("q", "func")
    __v_97846.addFunction("main", __v_97847).exportAs("main")
  var __v_97848 = __v_97846.instantiate({
    q: {
      func: __v_97844
    }
  }).exports.main;
  for (var __v_97849 = 0; __v_97849 < 100000; __v_97849 += 10003) {
    var __v_97852 = __v_97848();
  }
}
try {
  __f_19417();
} catch (e) {}
function __f_19420( __v_97861) {
  try {
    __callRandomFunction(__getRandomObject(672537), 148388, __getRandomObject(), __getRandomObject(), __getRandomObject());
  } catch (e) {}
  try {
  } catch (e) {}
}
  __f_19417(__f_19420);