function f0() {
}
f0.prototype = Array.prototype;
const v3 = new f0();
v3[6] = Object;
v3.length = 10;
v3.indexOf("esg");
const v8 = v3.indexOf(Object);
const v9 = [v8,v8,v8];
const v10 = Array.prototype;
Object.defineProperty(v10, "4", {});
v9.length = 6;
v9.indexOf(30);
Array(5.5, 5.6).indexOf(5.7);
([0]).indexOf("foo");
