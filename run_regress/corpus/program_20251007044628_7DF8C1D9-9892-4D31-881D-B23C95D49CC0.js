function write(a1) {
    print(a1);
}
write("Test case 1");
for (let i7 = 0; i7 < 10; i7++) {
    const v14 = "p" + i7;
    const t6 = Array.prototype;
    t6[i7] = v14;
}
const v19 = new Array(10);
var arr = v19;
var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i36 = 0; i36 < 10; i36++) {
    const t17 = Array.prototype;
    delete t17[i36];
}
write("");
write("Test case 2");
for (let i49 = 0; i49 < 10; i49++) {
    const v56 = "p" + i49;
    const t24 = Array.prototype;
    t24[i49] = v56;
}
const v59 = new Array(10);
var arr = v59;
var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4", "d5", "d6", "d7");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i79 = 0; i79 < 10; i79++) {
    const t35 = Array.prototype;
    delete t35[i79];
}
write("");
write("Test case 3");
for (let i92 = 0; i92 < 10; i92++) {
    i92++;
    const v100 = "p" + i92;
    const t43 = Array.prototype;
    t43[i92] = v100;
}
const v103 = new Array(10);
var arr = v103;
var newarr = arr.splice(0, 5, "d1", "d2", "d3", "d4", "d5", "d6", "d7");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i123 = 0; i123 < 10; i123++) {
    const t54 = Array.prototype;
    delete t54[i123];
}
write("");
write("Test case 4");
for (let i136 = 0; i136 < 10; i136++) {
    const v143 = "P" + i136;
    const t61 = Array.prototype;
    t61[i136] = v143;
}
const v146 = new Array(10);
var arr = v146;
var newarr = arr.splice(3, 5, "d1", "d2", "d3");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i162 = 0; i162 < 10; i162++) {
    const t72 = Array.prototype;
    delete t72[i162];
}
write("");
write("Test case 5");
for (let i175 = 0; i175 < 10; i175++) {
    const v182 = "P" + i175;
    const t79 = Array.prototype;
    t79[i175] = v182;
}
const v185 = new Array(10);
var arr = v185;
var newarr = arr.splice(3, 5, "d1", "d2", "d3");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i201 = 0; i201 < 10; i201++) {
    const t90 = Array.prototype;
    delete t90[i201];
}
write("");
write("Test case 6");
for (let i214 = 0; i214 < 10; i214++) {
    const v221 = "P" + i214;
    const t97 = Array.prototype;
    t97[i214] = v221;
}
const v224 = new Array(10);
var arr = v224;
var newarr = arr.splice(3, 1, "d1", "d2", "d3");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
for (let i240 = 0; i240 < 10; i240++) {
    const t108 = Array.prototype;
    delete t108[i240];
}
write("");
write("Test case 7");
const v253 = Array.prototype.shift;
const t114 = Object.prototype;
t114.shift = v253;
const v256 = new Object();
var obj = v256;
obj.length = 10;
obj[0] = 101;
obj[1] = "string";
obj[9] = "lastelement";
var res = obj.shift();
for (const v264 in obj) {
    write((("expando:" + v264) + "=") + obj[v264]);
}
const t126 = Object.prototype;
delete t126.shift;
write("");
write("Test case 8");
const t127 = Object.prototype;
t127[0] = "hello world";
const t132 = Array.prototype;
t132[9] = "p9";
const v283 = new Array(10);
var arr = v283;
arr[1] = 123;
var res = arr.shift();
write(res);
write(res.length);
write(arr);
write(arr.length);
const t138 = Object.prototype;
delete t138[0];
const t143 = Array.prototype;
delete t143[9];
write("");
write("Test case 9");
const v305 = new Array(2147483649);
var arr1 = v305;
arr1[2147483647] = 100;
var newarr = arr1.slice(2147483640, 2147483648);
write(newarr);
write(newarr.length);
write(arr1.length);
write("");
write("Test case 10");
for (let i322 = 0; i322 < 20; i322 = i322 + 3) {
    const v330 = "O" + i322;
    const t159 = Object.prototype;
    t159[i322] = v330;
}
for (let i333 = 1; i333 < 20; i333 = i333 + 3) {
    const v341 = "a" + i333;
    const t164 = Array.prototype;
    t164[i333] = v341;
}
var arr = [];
for (let i346 = 1; i346 < 20; i346 = i346 + 3) {
    arr[i346] = i346;
}
arr.shift();
write(arr);
write(arr.length);
arr.unshift(10);
write(arr);
write(arr.length);
var newarr = arr.splice(5, 2, "a", "b");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
newarr = arr.splice(7, 6, "a", "b");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
newarr = arr.splice(10, 2, "a", "b", "c", "e", "f");
write(arr);
write(arr.length);
write(newarr);
write(newarr.length);
write("");
write("Test case 11");
const t188 = Object.prototype;
t188[2] = 10;
const v406 = new Array(5);
var arr = v406;
write(arr);
write(arr.length);
arr.shift();
write(arr);
write(arr.length);
arr.unshift("10", "20");
arr.shift();
write(arr);
arr.shift();
write(arr);
arr.unshift(10, 40);
write(arr);
arr.unshift(50);
write(arr);
arr.shift(50);
write(arr);
const v433 = new Array(5);
var arr = v433;
write(arr);
write(arr.length);
arr.reverse();
write(arr);
write(arr.length);
const v443 = new Array(5);
var arr = v443;
arr[2] = 2;
arr[3] = 3;
arr[4] = 4;
write(arr);
write(arr.length);
arr.reverse();
write(arr);
write(arr.length);
var a = [1,2,3];
var b = [];
b.length = 3;
write(a.concat(b));
