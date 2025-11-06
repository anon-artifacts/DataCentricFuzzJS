Array.prototype.push(1);
Object.freeze(([]).__proto__);
var x = [];
var c = 0;
for (let i13 = 0; i13 < 5; ++i13) {
    try {
        function f19() {
        }
        x.push(f19);
    } catch(e21) {
        c++;
    }
}
