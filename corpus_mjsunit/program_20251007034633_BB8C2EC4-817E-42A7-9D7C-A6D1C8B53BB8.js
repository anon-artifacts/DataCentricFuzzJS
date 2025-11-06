if (this.Worker) {
    var __v_5 = {};
    function f5() {
        try { foo(); } catch (e) {}
    }
    __v_5.__defineGetter__("byteLength", f5);
    const v13 = new Worker("onmessage = function() {};", { type: "string" });
    var __v_8 = v13;
    function f15() {
        try { __v_8.postMessage(__v_5); } catch (e) {}
    }
    f15();
}
