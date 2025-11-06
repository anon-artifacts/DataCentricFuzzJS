[...""];
[];
var str = "ott";
["o","t","t"];
[...str];
const v10 = {};
str[Symbol.iterator] = v10;
var iterator = str[Symbol.iterator]();
const v16 = () => {
    return { value: undefined, done: true };
};
const t11 = iterator.__proto__;
t11.next = v16;
[];
[...str];
