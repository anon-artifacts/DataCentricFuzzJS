function write(a1) {
    print(a1);
}
write(null);
write(undefined);
write(10);
write(1.24);
write(true);
write(false);
const v17 = new Object();
var o = v17;
write(o);
write(Object.prototype.toString.apply(null));
write(Object.prototype.toString.apply(undefined));
