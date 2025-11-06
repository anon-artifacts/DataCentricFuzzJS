function f0() {
    function f1(a2) {
        const v3 = [-536870912,-1787859431,-2,745033436,1024,-65537,4294967296,-16,-65537];
        function F4(a6, a7) {
            if (!new.target) { throw 'must be called with new'; }
        }
        class C8 {
            static [F4] = v3;
        }
        return C8;
    }
    this.set = f1;
}
const v10 = new f0();
for (let i = 0; i < 10; i++) {
    v10.set();
}
