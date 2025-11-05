if (this.Worker) {
    (function f0() {
        var v0 = `onmessage = function(m) {
          var sab = m;
          var ta = new Uint32Array(sab);
        };`;
        new Worker(v0, {
            type: 'string'
        });
        quit();
    })();
}