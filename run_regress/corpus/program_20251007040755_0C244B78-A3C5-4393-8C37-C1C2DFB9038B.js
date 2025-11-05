if (this.Worker) {
    function __f_0() {
        const v4 = new Object();
        this.s = v4;
    }
    function __f_1() {
        const v7 = new __f_0();
        const v8 = new __f_0();
        this.l = [v7,v8];
    }
    const v11 = new __f_1();
    __v_6 = v11;
    const v17 = new Worker("", { type: "string" });
    var __v_9 = v17;
    __v_9.postMessage(__v_6);
}
