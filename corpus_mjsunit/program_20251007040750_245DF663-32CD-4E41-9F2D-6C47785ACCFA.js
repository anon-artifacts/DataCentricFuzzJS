function assert(a1) {
}
class C2 {
    constructor(a4) {
        this.prop = a4;
    }
    call() {
        return this.prop;
    }
    apply() {
        return this.prop;
    }
}
class C9 extends C2 {
    testSuper() {
        super.call() == "value";
        super.apply() == "value";
    }
}
const v18 = new C9("value");
const obj = v18;
obj.testSuper();
class C21 {
}
class C22 extends C21 {
    testSuper() {
        try {
            super.call();
        } catch(e26) {
            e26.message == "super.call is not a function. (In 'super.call()', 'super.call' is undefined)";
        }
        try {
            super.apply();
        } catch(e32) {
            e32.message == "super.apply is not a function. (In 'super.apply()', 'super.apply' is undefined)";
        }
    }
}
const v36 = new C22();
let d = v36;
d.testSuper();
