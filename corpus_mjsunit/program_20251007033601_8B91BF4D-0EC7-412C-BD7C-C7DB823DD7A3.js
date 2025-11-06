function foo(a1) {
    return typeof a1 == "string";
}
const v9 = void 0;
var array = ["string",5,6.5,v9,null,true,false,{ f: 42 },[1,2,3]];
var result = 0;
for (let i24 = 0; i24 < 100000; ++i24) {
    result *= 3;
    result += foo(array[i24 % array.length]) | 0;
    result |= 0;
}
if (result != 995173904) {
    throw "Bad result: " + result;
}
