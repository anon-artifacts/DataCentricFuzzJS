let custom_then_called = false;
function foo(a3) {
    custom_then_called = false;
    const v5 = (a6) => {
        return a6;
    };
    a3.catch(v5);
    return custom_then_called;
}
class C9 extends Promise {
    then(a11, a12) {
        custom_then_called = true;
        return super.then(a11, a12);
    }
}
const a = C9.resolve(1);
foo(a);
foo(a);
foo(a);
