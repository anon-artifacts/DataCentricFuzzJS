class C1 extends Object {
    constructor() {
        try {
            super();
        } catch(e3) {
        }
        return 1;
    }
}
class C5 extends C1 {
    constructor() {
        super();
        const v8 = new Error();
        throw v8;
        const v9 = () => {
            return this;
        };
        return { get: v9 };
    }
}
try {
    Reflect.construct(C5, [], D);
} catch(e15) {
}
try {
    Reflect.construct(C5, [], D);
} catch(e20) {
}
