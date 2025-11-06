function f0() {
}
for (const v7 of [0,0,0,0,0]) {
    try {
        function f8() {
            this.c = this;
            this.e = arguments;
            const v16 = Math.pow;
            Object.defineProperty(this, "d", { get: v16, configurable: true });
            delete this.e;
            delete this.c;
            Object.defineProperty(this, "d", { writable: true });
            if (Math.tan(-1)) {
                Object.defineProperty(this, {});
            }
        }
        f8(v7);
    } catch(e37) {
    }
}
f0(0, 0, "ok");
