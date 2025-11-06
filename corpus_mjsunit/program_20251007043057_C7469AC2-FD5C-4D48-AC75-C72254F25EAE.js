var lastIndexHasBeenSet = false;
var countOfExecGets = 0;
class C5 extends RegExp {
    constructor(a7, a8) {
        super(a7, a8);
        this.lastIndex = 42;
        const re = this;
        function f12() {
            re.lastIndex != 42;
            countOfExecGets++;
            return RegExp.prototype.exec;
        }
        Object.defineProperty(this, "exec", { get: f12 });
    }
}
const v23 = new C5(/x/);
var re = v23;
re.lastIndex;
var result = ("axbxc").split(re);
["a","b","c"];
