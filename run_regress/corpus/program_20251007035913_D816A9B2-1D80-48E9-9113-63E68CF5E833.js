if (this.Worker) {
    const t1 = Function.prototype;
    t1.toString = "foo";
    function __f_7() {
    }
    function f6() {
        let v8;
        try { v8 = __f_7.toString(); } catch (e) {}
        const v10 = { type: "string" };
        let v11;
        try { v11 = new Worker(v8, v10); } catch (e) {}
        var __v_5 = v11;
    }
    f6();
}
