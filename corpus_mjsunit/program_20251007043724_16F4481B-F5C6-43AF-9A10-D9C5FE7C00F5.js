try {
    function TestMaps() {
        class C1 {
        }
        class C2 extends C1 {
        }
        const v3 = new C2();
        let d1 = v3;
        const v5 = new C2();
        let d2 = v5;
    }
    TestMaps();
    function TestProtoModificationArray() {
        let called = 0;
        function F() {
            called++;
            Array.isArray(this);
        }
        class C17 extends Array {
        }
        C17.__proto__;
        const v19 = new C17();
        let d1 = v19;
        Array.isArray(d1);
        C17.__proto__ = F;
        called = 0;
        const v23 = new C17();
        let d2 = v23;
        Array.isArray(d2);
    }
    TestProtoModificationArray();
    function TestProtoModification() {
        let called = 0;
        function F() {
            called++;
            let exn = null;
            try {
                this?.byteLength;
            } catch(e37) {
                exn = e37;
            }
            exn instanceof TypeError;
        }
        class C41 extends Uint8Array {
            constructor() {
                super(10);
            }
        }
        C41.__proto__;
        const v45 = new C41();
        let d1 = v45;
        d1.byteLength;
        C41.__proto__ = F;
        called = 0;
        const v50 = new C41();
        let d2 = v50;
        function f53() {
            d2?.byteLength;
        }
        f53();
    }
    TestProtoModification();
} catch(e58) {
}
