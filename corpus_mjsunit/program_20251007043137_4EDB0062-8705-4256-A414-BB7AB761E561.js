const v4 = new Int32Array(10 + 1);
const v12 = new Uint8Array(v4.buffer, ((10 + 1) * 4) - 10);
v4.set(v12);
