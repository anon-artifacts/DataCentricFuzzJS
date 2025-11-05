function Method() {
    class C1 {
        eval() {
            return 1;
        }
        arguments() {
            return 2;
        }
        static eval() {
            return 3;
        }
        static arguments() {
            return 4;
        }
    }
    const v11 = new C1();
    v11.eval();
    const v14 = new C1();
    v14.arguments();
    C1.eval();
    C1.arguments();
}
Method();
function Getters() {
    class C22 {
        get eval() {
            return 1;
        }
        get arguments() {
            return 2;
        }
        static get eval() {
            return 3;
        }
        static get arguments() {
            return 4;
        }
    }
    const v32 = new C22();
    v32.eval;
    const v35 = new C22();
    v35.arguments;
    C22.eval;
    C22.arguments;
}
Getters();
function Setters() {
    var x = 0;
    class C45 {
        set eval(a47) {
            x = a47;
        }
        set arguments(a49) {
            x = a49;
        }
        static set eval(a51) {
            x = a51;
        }
        static set arguments(a53) {
            x = a53;
        }
    }
    const v55 = new C45();
    v55.eval = 1;
    const v58 = new C45();
    v58.arguments = 2;
    C45.eval = 3;
    C45.arguments = 4;
}
Setters();
