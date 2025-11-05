function customconstructor() {
    class C1 {
        constructor() {
        }
        a() {
        }
    }
    Object.getOwnPropertyDescriptor(C1, "prototype").configurable;
    Object.getOwnPropertyDescriptor(C1.prototype, "constructor").enumerable;
}
function defaultconstructor() {
    class C15 {
        a() {
        }
    }
    Object.getOwnPropertyDescriptor(C15, "prototype").configurable;
    Object.getOwnPropertyDescriptor(C15.prototype, "constructor").enumerable;
}
function run() {
    for (let i29 = 0; i29 < 100; i29++) {
        customconstructor();
        defaultconstructor();
    }
}
run();
