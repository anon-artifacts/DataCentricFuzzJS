function BailOut(a1) {
    a1[0] = 1;
}
function DispatchCallWithThis(a4, a5) {
    a4.call(this, a5);
}
function DispatchBailout(a9) {
    DispatchCallWithThis(BailOut, a9);
}
DispatchBailout([1]);
DispatchBailout([1]);
DispatchBailout([1.1]);
function foo() {
    console.log("foo");
}
function Dispatch(a25) {
    a25.call(undefined);
}
function CallDispatch(a29) {
    Dispatch(a29);
}
CallDispatch(foo);
CallDispatch(foo);
CallDispatch(foo);
function f34() {
    console.log("bar");
}
CallDispatch(f34);
CallDispatch(foo);
const v42 = Function.prototype.call;
const t30 = Function.prototype;
t30.call = v42;
CallDispatch(foo);
CallDispatch(foo);
CallDispatch(foo);
