function f() {
    print("this         : " + this);
    print("typeof(this) : " + typeof this);
}
f();
f.call();
f.call(undefined);
f.call(null);
f.call(this);
f.call(10);
const v23 = new Number(10);
f.call(v23);
