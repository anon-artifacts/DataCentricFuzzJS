let obj = { foo: 1 };
delete obj?.foo;
obj.foo = 1;
obj.bar = 2;
delete obj?.foo;
let v8;
try { v8 = Object.create(obj); } catch (e) {}
let o = v8;
function foo() {
    let v11;
    try { v11 = o.toString(); } catch (e) {}
    return v11;
}
try { noInline(foo); } catch (e) {}
for (let i15 = 0; i15 < 10000; i15++) {
    try { foo(); } catch (e) {}
}
