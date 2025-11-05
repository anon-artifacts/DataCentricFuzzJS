const v5 = new Set([1,2,3]);
var set = v5;
const v7 = () => {
    const v8 = () => {
        return { done: true };
    };
    return { next: v8 };
};
const t8 = set.__proto__;
t8[Symbol.iterator] = v7;
[];
[...set];
[[1,1],[2,2],[3,3]];
[...set.entries()];
[1,2,3];
[...set.keys()];
[1,2,3];
[...set.values()];
