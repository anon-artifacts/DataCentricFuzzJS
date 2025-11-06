var a = { x: 1.1 };
a.x = 0;
var G = a.x;
const v6 = {};
var o = { x: v6 };
function func() {
    return { x: G };
}
func();
func();
func().x;
