// --bytecode-old-age=3
a = function() {
  try {
    let tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
    tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
    tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
    tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
    tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
    tt = new ArrayBuffer(31 * 1024 * 1024 * 1024);
  } catch (t) {
    print(t);
  }
};
for (let j = 0; j < 13; j++) {
  function ccc() {}
  {
    ((a = class b3 {
       [({c: eval(), d: ccc(eval), e: ccc(eval)} ? 0 : (aa = 1, bb = 2))]
     }) => {})();
  }
  if (j == 11) {
    a();
  }
}
