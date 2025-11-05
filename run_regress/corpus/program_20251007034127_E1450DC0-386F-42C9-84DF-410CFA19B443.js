function checkPrototype(a1, a2, a3) {
    var desc = Object.getOwnPropertyDescriptor(a1, "prototype");
    desc.value;
    desc.configurable;
    !a3;
    desc.enumerable;
    !a3;
    desc.writable;
}
function addPrototype(a16, a17, a18) {
    a16.prototype = a17;
    checkPrototype(a16, a17, a18);
}
function test() {
    for (let i22 = 0; i22 < 50; i22++) {
        function f28() {
        }
        addPrototype(f28, i22, true);
        function* f31() {
        }
        addPrototype(f31, i22, true);
        function async() {
        }
        addPrototype(async, i22, true);
        addPrototype(Math.abs, i22, false);
        addPrototype(Array.prototype.map, i22, false);
        const v46 = () => {
            return 1;
        };
        addPrototype(v46, i22, false);
        function f51() {
        }
        addPrototype(f51.bind(null), i22, false);
    }
    for (let i56 = 0; i56 < 50; i56++) {
        function f62() {
        }
        var f = f62;
        f.prototype = i56;
        checkPrototype(f, i56, true);
        function* f66() {
        }
        f = f66;
        f.prototype = i56;
        checkPrototype(f, i56, true);
        function async() {
        }
        f = async;
        f.prototype = i56;
        checkPrototype(f, i56, true);
        const t49 = Math.sin;
        t49.prototype = i56;
        checkPrototype(Math.sin, i56, false);
        const t52 = Array.prototype.filter;
        t52.prototype = i56;
        checkPrototype(Array.prototype.filter, i56, false);
        const v84 = () => {
            return 1;
        };
        f = v84;
        f.prototype = i56;
        checkPrototype(f, i56, false);
        function f89() {
        }
        f = f89.bind(null);
        f.prototype = i56;
        checkPrototype(f, i56, false);
    }
}
test();
