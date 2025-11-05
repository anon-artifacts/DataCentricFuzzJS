if (this.Worker) {
    function f2() {
        const v4 = Worker.prototype;
        try { v4.terminate(); } catch (e) {}
    }
    f2();
    function f7() {
        const v9 = Worker.prototype;
        try { v9.getMessage(); } catch (e) {}
    }
    f7();
    function f12() {
        const v13 = {};
        const v15 = Worker.prototype;
        try { v15.postMessage(v13); } catch (e) {}
    }
    f12();
    const v22 = new Worker("", { type: "string" });
    var worker = v22;
    worker.getMessage();
    worker.postMessage({});
    worker.terminate();
}
