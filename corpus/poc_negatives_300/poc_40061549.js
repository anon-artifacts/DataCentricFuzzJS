function main() {
  for (let v3 = 0; v3 < 1000; v3++) {
    function v4() {
      const v15 = {"maxByteLength":8588995};
      const v17 = new ArrayBuffer(2996,v15);
      const v19 = new DataView(v17);
      const v20 = v19.byteLength;
      const v22 = v20 >= 255;
    }
    const v25 = v4();
  }
}
main();