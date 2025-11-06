const v11 = new Map([[1,2],[2,3],[3,4]]);
var map = v11;
const v13 = () => {
    const v14 = () => {
        return { done: true };
    };
    return { next: v14 };
};
const t8 = map.__proto__;
t8[Symbol.iterator] = v13;
[];
[...map];
[[1,2],[2,3],[3,4]];
[...map.entries()];
[1,2,3];
[...map.keys()];
[2,3,4];
[...map.values()];
