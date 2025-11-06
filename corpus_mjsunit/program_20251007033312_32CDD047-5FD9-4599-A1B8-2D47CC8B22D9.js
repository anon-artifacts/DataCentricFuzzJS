const v11 = new Map([[1,2],[2,3],[3,4]]);
var map = v11;
var iterator = map.values();
const v15 = () => {
    return { done: true };
};
iterator.next = v15;
[[1,2],[2,3],[3,4]];
[...map];
[[1,2],[2,3],[3,4]];
[...map.entries()];
[1,2,3];
[...map.keys()];
[2,3,4];
[...map.values()];
[];
[...iterator];
