function assert(a1) {
    if (!a1) {
        console.log("fail");
    }
}
const v8 = new RegExp("^[a-z]{2,2147483648}$");
let p1 = v8;
!p1.test("a");
let p2 = /^[a-z]{2,2147483648}$/;
p2.test("aaaaa");
