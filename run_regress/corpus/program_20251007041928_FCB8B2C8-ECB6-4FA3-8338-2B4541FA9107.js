x = "";
function f4() {
    return x;
}
Object.defineProperty(this, "y", { get: f4 });
x = 0;
const v13 = new String();
x = v13;
y.__proto__ = [];
