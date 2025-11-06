var foo = "Foo";
foo[0];
foo[1];
foo[2];
for (let i10 = 0; i10 < 10; i10++) {
    foo[0];
    foo[1];
    foo[2];
    (foo[0] + "BarBazQuuxFooBarQuux")[0];
}
foo["0" + ""];
foo["1"];
foo["2"];
typeof foo[3];
typeof foo[-1];
typeof foo[-2];
foo[0] = "f";
foo[3] = "t";
typeof foo[3];
typeof foo[-2];
const v73 = new String("foo");
var S = v73;
Object("foo");
S[0];
S["0"];
S[0] = "bente";
S[0];
S["0"];
S[-2] = "spider";
S[-2];
S[3] = "monkey";
S[3];
S["foo"] = "Fu";
S.foo;
S["0"] = "bente";
S[0];
S["0"];
0 in S;
-1 in S;
2 in S;
3 in S;
4 in S;
"0" in S;
"-1" in S;
"2" in S;
"3" in S;
"4" in S;
S.hasOwnProperty(0);
S.hasOwnProperty(-1);
S.hasOwnProperty(2);
S.hasOwnProperty(3);
S.hasOwnProperty(4);
S.hasOwnProperty("0");
S.hasOwnProperty("-1");
S.hasOwnProperty("2");
S.hasOwnProperty("3");
S.hasOwnProperty("4");
("foo").hasOwnProperty(0);
("foo").hasOwnProperty(-1);
("foo").hasOwnProperty(2);
("foo").hasOwnProperty(4);
("foo").hasOwnProperty("0");
("foo").hasOwnProperty("-1");
("foo").hasOwnProperty("2");
("foo").hasOwnProperty("4");
delete S[3];
typeof S[3];
3 in S;
"3" in S;
const v252 = new Number(43);
var N = v252;
Object(43);
N[-2] = "Alpha";
N[-2];
N[0] = "Zappa";
N[0];
N["0"];
var A = ["V","e","t","t","e","r"];
A[0] = "v";
var A2 = "v";
A[0];
const v283 = new String("Onkel");
var S = v283;
S[0] = "o";
var S2 = "o";
S[0];
var s = "Tante";
s[0] = "t";
var s2 = "t";
s[0];
S[-2] = "o";
var S2 = "o";
S[-2];
s[-2] = "t";
var s2 = "t";
typeof s[-2];
var alpha = ["@"];
for (let i320 = 1; i320 < 128; i320++) {
    var c = String.fromCharCode(i320);
    alpha[i320] = c[0];
}
var alphaStr = alpha.join("");
for (let i333 = 1; i333 < 128; i333++) {
    alpha[i333];
    alphaStr[i333];
    String.fromCharCode(i333);
    alphaStr[i333];
}
var foo = ["a12",["a",2,"c"],"a31",42];
var results = [1,2,3,NaN];
for (let i359 = 0; i359 < 200; ++i359) {
    var index = Math.floor(i359 / 50);
    var receiver = foo[index];
    var expected = results[index];
    var actual = +receiver[1];
}
var keys = [0,"1",2,3,-1,10];
var str = "abcd";
var arr = ["a","b","c","d",,,];
for (let i397 = 0; i397 < 300; ++i397) {
    var index = Math.floor(i397 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var keys = [0,Math.floor(2) * 0.5];
var str = "ab";
var arr = ["a","b"];
for (let i429 = 0; i429 < 100; ++i429) {
    var index = Math.floor(i429 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var keys = [0,-0];
var str = "ab";
var arr = ["a","a"];
for (let i457 = 0; i457 < 100; ++i457) {
    var index = Math.floor(i457 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var keys = [0,0.5];
var str = "ab";
var arr = ["a",,];
for (let i484 = 0; i484 < 100; ++i484) {
    var index = Math.floor(i484 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var keys = [0,-1];
var str = "ab";
var arr = ["a",,];
for (let i512 = 0; i512 < 100; ++i512) {
    var index = Math.floor(i512 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var keys = [0,10];
var str = "ab";
var arr = ["a",,];
for (let i539 = 0; i539 < 100; ++i539) {
    var index = Math.floor(i539 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var num = Math.floor(4) * 0.5;
var keys = [0,num];
var str = "ab";
var arr = ["a",,];
for (let i570 = 0; i570 < 100; ++i570) {
    var index = Math.floor(i570 / 50);
    var key = keys[index];
    var expected = arr[index];
    var actual = str[key];
}
var str = "Ч";
var arr = ["Ч"];
for (let i592 = 0; i592 < 50; ++i592) {
    var expected = arr[0];
    var actual = str[0];
}
