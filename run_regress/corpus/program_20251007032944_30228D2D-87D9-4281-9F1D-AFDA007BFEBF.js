try {
    const v3 = new ArrayBuffer(1);
    new Uint32Array(v3, 2, 3);
} catch(e7) {
    e7.message;
}
