const v2 = new String("ott");
var str = v2;
["o","t","t"];
[...str];
function iterator_fn() {
    const v10 = () => {
        return { value: undefined, done: true };
    };
    return { next: v10 };
}
str[Symbol.iterator] = iterator_fn;
[];
[...str];
const v20 = new String("ott");
var str2 = v20;
["o","t","t"];
[...str2];
const t15 = str2.__proto__;
t15[Symbol.iterator] = iterator_fn;
[];
[...str2];
