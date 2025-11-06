if (this.Worker) {
    let v4;
    try { v4 = new Worker("test/mjsunit/d8/d8-worker-script.txt"); } catch (e) {}
    var w = v4;
    try { w.getMessage(); } catch (e) {}
    try { w.postMessage(""); } catch (e) {}
    try { w.getMessage(); } catch (e) {}
    try { w.terminate(); } catch (e) {}
}
