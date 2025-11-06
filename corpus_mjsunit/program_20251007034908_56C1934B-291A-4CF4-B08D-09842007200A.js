function t1() {
    class C1 {
        bar() {
            return "bar";
        }
        constructor(a5) {
            this.val = a5;
            this.foo = "Simple";
        }
    }
    const v8 = new C1("val");
    let result = v8;
    console.log("Simple", result.foo);
    console.log("val", result.val);
    console.log("bar", result.bar());
    console.log(result instanceof C1);
}
t1();
function t2() {
    class C24 {
        constructor(a26) {
            const v27 = () => {
                this.val = a26;
                this.foo = "Simple";
            };
            let arrow = v27;
            arrow();
        }
    }
    const v32 = new C24("val");
    let result = v32;
    console.log("Simple", result.foo);
    console.log("val", result.val);
    console.log(result instanceof C24);
}
t2();
function t3() {
    class C45 {
        constructor(a47) {
            this.foo = "ReturnArgumentBaseClass";
            return a47;
        }
    }
    const v50 = new C45(null);
    let result = v50;
    console.log("ReturnArgumentBaseClass", result.foo);
    console.log(result instanceof C45);
    const v59 = new C45(undefined);
    result = v59;
    console.log("ReturnArgumentBaseClass", result.foo);
    console.log(result instanceof C45);
    const v65 = new C45();
    result = v65;
    console.log("ReturnArgumentBaseClass", result.foo);
    console.log(result instanceof C45);
    const v72 = new C45("string");
    result = v72;
    console.log("ReturnArgumentBaseClass", result.foo);
    console.log(result instanceof C45);
    const v79 = new C45(5);
    result = v79;
    console.log("ReturnArgumentBaseClass", result.foo);
    console.log(result instanceof C45);
}
t3();
function t4() {
    class C87 {
        constructor(a89) {
            this.foo = "ReturnArgumentBaseClass";
            return a89;
        }
    }
    const v93 = new C87({ foo: "test" });
    let result = v93;
    console.log("test", result.foo);
    console.log(result instanceof C87);
    const v103 = new Boolean(false);
    const v104 = new C87(v103);
    result = v104;
    const v106 = new Boolean(false);
    console.log(v106, result);
    console.log(result instanceof Boolean);
}
t4();
function t5() {
    class C113 extends null {
    }
    console.log(Function.prototype, Object.getPrototypeOf(C113));
    console.log(null, Object.getPrototypeOf(C113.prototype));
}
t5();
function t6() {
    class C127 extends null {
        constructor() {
        }
    }
    try {
        new C127();
    } catch(e130) {
    }
}
t6();
function t7() {
    var beforeSuper = 0;
    var afterSuper = 0;
    class C138 extends null {
        constructor() {
            beforeSuper++;
            super();
            afterSuper++;
        }
    }
    try {
        new C138();
    } catch(e143) {
    }
    console.log(1, beforeSuper);
    console.log(0, afterSuper);
}
t7();
function t8() {
    class C152 extends null {
        constructor() {
            return {};
        }
    }
    var a;
    try {
        const v157 = new C152();
        a = v157;
    } catch(e158) {
    }
    console.log(Object.prototype, Object.getPrototypeOf(a));
}
t8();
function t9() {
    class C167 extends null {
        constructor() {
            super["prop"] = "something";
            return {};
        }
    }
    try {
        new C167();
    } catch(e173) {
    }
    var prop = "prop";
    class C177 extends null {
        constructor() {
            super[prop] = "something";
            return {};
        }
    }
    try {
        new C177();
    } catch(e182) {
    }
    class C184 extends null {
        constructor() {
            super["prop"];
            return {};
        }
    }
    try {
        new C184();
    } catch(e190) {
    }
    class C192 extends null {
        constructor() {
            super[prop];
            return {};
        }
    }
    try {
        new C192();
    } catch(e197) {
    }
}
t9();
