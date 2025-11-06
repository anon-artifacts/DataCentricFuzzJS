function TestBufferByteLengthNonSmi() {
    var non_smi_byte_length = 65535 + 1;
    const v6 = new ArrayBuffer(non_smi_byte_length);
    var buffer = v6;
    const v9 = new Uint16Array(buffer);
    var arr = v9;
    arr.byteLength;
    non_smi_byte_length / 2;
    arr.length;
    const v16 = new Uint32Array(buffer);
    (arr = v16).byteLength;
    non_smi_byte_length / 4;
    arr.length;
}
TestBufferByteLengthNonSmi();
function TestByteOffsetNonSmi() {
    var non_smi_byte_length = 65535 + 11;
    const v28 = new ArrayBuffer(non_smi_byte_length);
    var buffer = v28;
    const v31 = new Uint16Array(buffer);
    var whole = v31;
    whole.byteLength;
    non_smi_byte_length / 2;
    whole.length;
    const v40 = new Uint16Array(buffer, non_smi_byte_length - 10, 5);
    var arr = v40;
    arr.buffer.byteLength;
    arr.byteLength;
    arr.length;
}
TestByteOffsetNonSmi();
