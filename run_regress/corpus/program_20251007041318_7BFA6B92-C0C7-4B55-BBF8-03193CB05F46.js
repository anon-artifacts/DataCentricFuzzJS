const v0 = () => {
    var x = 1;
    x.a = "a";
};
v0();
`can't assign to property "a" on 1: not an object`;
const v6 = () => {
    var x = "hello";
    x.b = "a";
};
v6();
`can't assign to property "b" on "hello": not an object`;
const v12 = () => {
    var x = false;
    x.c = "a";
};
v12();
`can't assign to property "c" on false: not an object`;
const v18 = () => {
    var x = Symbol();
    x.d = "a";
};
v18();
`can't assign to property "d" on Symbol(): not an object`;
const v25 = () => {
    var x = Symbol("abc");
    x.d = "a";
};
v25();
`can't assign to property "d" on Symbol("abc"): not an object`;
const v33 = () => {
    var x = 1;
    x[15] = "a";
};
v33();
`can't assign to property 15 on 1: not an object`;
const v39 = () => {
    var x = 1;
    x[Symbol("abc")] = "a";
};
v39();
`can't assign to property Symbol("abc") on 1: not an object`;
