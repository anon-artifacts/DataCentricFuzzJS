var bytes = [255,247,255,255,255,255,255,255];
bytes.reverse();
const v13 = new Uint8Array(bytes);
const v15 = new Float64Array(v13.buffer);
var result = v15[0];
isNaN(result + 0);
