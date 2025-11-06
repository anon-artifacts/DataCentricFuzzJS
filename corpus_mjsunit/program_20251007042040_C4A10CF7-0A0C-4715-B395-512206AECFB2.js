if (!this.parseInt) {
    function f3() {
        return 5;
    }
    var parseInt = f3;
}
parseInt(10);
