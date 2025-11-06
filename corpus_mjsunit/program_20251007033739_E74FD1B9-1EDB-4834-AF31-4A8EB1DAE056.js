if (this.Worker) {
    function f2() {
        const v5 = Worker.prototype;
        try { v5.constructor("55"); } catch (e) {}
    }
    f2();
}
