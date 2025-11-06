function shouldBe(a1, a2) {
    if (a1 !== a2) {
        const v7 = new Error("bad value: " + a1);
        throw v7;
    }
}
class C8 {
    get cocoa() {
        return "Cocoa";
    }
    get cappuccino() {
        return "Cappuccino";
    }
}
const v13 = new C8();
let a = v13;
shouldBe(JSON.stringify(a), `{}`);
shouldBe(JSON.stringify(a, ["cocoa","cappuccino"]), `{"cocoa":"Cocoa","cappuccino":"Cappuccino"}`);
let array = [0,1,2,3,4];
const v32 = array.__proto__;
function f34() {
    return "Cocoa";
}
Object.defineProperty(v32, 1, { get: f34 });
function f40() {
    delete array[1];
    return "Cappuccino";
}
Object.defineProperty(array, 0, { get: f40 });
shouldBe(JSON.stringify(array), `["Cappuccino","Cocoa",2,3,4]`);
