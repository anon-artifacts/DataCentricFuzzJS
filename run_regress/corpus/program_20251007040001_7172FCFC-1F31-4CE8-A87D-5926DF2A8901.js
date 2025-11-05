PAGES = 10;
const v3 = WebAssembly.Memory;
const v6 = new v3({ initial: PAGES });
memory = v6;
buffer = memory.buffer;
memory.grow(0);
WebAssembly.validate(buffer);
