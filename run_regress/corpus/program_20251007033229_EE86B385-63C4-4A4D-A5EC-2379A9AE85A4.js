function f0() {
}
const x = Object.freeze([1,2,3]);
const v10 = Symbol.isConcatSpreadable;
let fakeArray = { [v10]: true, length: 2, 0: "hello", 1: "world" };
x.concat(fakeArray);
[1,2,3,"hello","world"];
x.concat(fakeArray, fakeArray);
[1,2,3,"hello","world","hello","world"];
const v35 = Symbol();
for (const v38 of [true,3.41,"abc",v35,{}]) {
    const v39 = Symbol.isConcatSpreadable;
    let obj = { [v39]: v38, length: 1, 0: "hey" };
    x.concat(obj);
    [1,2,3,"hey"];
}
for (const v57 of [null,,false,0,NaN,""]) {
    const v58 = Symbol.isConcatSpreadable;
    let obj = { [v58]: v57, length: 1, 0: "hey" };
    x.concat(obj);
    [1,2,3,obj];
}
let array = [5,4];
x.concat(array);
[1,2,3,5,4];
array[Symbol.isConcatSpreadable] = false;
x.concat(array);
[1,2,3,[5,4]];
array[Symbol.isConcatSpreadable] = true;
x.concat(array);
[1,2,3,5,4];
f0(true, true);
