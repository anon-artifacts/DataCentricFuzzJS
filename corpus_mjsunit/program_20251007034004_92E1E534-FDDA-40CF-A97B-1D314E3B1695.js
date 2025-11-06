if (this.Worker) {
    const v6 = new Worker("onmessage = function() {}", { type: "string" });
    var __v_7 = v6;
    __v_7.postMessage("");
}
