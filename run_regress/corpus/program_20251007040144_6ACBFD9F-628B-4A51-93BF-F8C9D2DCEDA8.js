Array.prototype.flatMap.length;
Array.prototype.flatMap.name;
const v9 = (a10) => {
    return [a10,a10 ** 2];
};
([1,2,3,4]).flatMap(v9);
[1,1,2,4,3,9,4,16];
const v29 = (a30) => {
    return [[a30,a30 ** 2]];
};
([1,2,3,4]).flatMap(v29);
[[1,1],[2,4],[3,9],[4,16]];
{
    const v56 = -Infinity;
    const v58 = -1;
    const v60 = -0;
    const v62 = +0;
    const v64 = +1;
    const v71 = /./;
    const v72 = [];
    const v73 = {};
    const v76 = Object.create(null);
    const v78 = {};
    const v80 = new Proxy(v78, {});
    const v82 = Symbol();
    const v83 = (a84) => {
        return a84 ** 2;
    };
    const v89 = new Set([v56,v58,v60,v62,v64,Infinity,null,,true,false,"","foo",v71,v72,v73,v76,v80,v82,v83,String]);
    const elements = v89;
    for (const v91 of elements) {
        const v92 = (a93) => {
            return [a93,a93];
        };
        ([v91]).flatMap(v92);
        [v91,v91];
    }
}
{
    const array = [42];
    const v101 = (a102) => {
        return [a102,a102];
    };
    ([array]).flatMap(v101);
    [array,array];
}
{
    const v109 = -Infinity;
    const v111 = -1;
    const v113 = -0;
    const v115 = +0;
    const v117 = +1;
    const v124 = /./;
    const v125 = [];
    const v126 = {};
    const v129 = Object.create(null);
    const v131 = {};
    const v133 = new Proxy(v131, {});
    const v137 = new Set([v109,v111,v113,v115,v117,Infinity,null,,true,false,"","foo",v124,v125,v126,v129,v133,Symbol()]);
    const nonCallables = v137;
    for (const v139 of nonCallables) {
        const v140 = () => {
            const v141 = [];
            try { v141.flatMap(v139); } catch (e) {}
        };
        v140();
    }
}
{
    const v149 = {
        foo: 42,
        get length() {
            object.foo = 0;
        },
    };
    const object = v149;
    const v151 = (a152) => {
        return [a152,a152];
    };
    const result = ([object]).flatMap(v151);
    [object,object];
    result[0].foo;
}
const v161 = () => {
    const v163 = (a164) => {
        return a164;
    };
    const v166 = Array.prototype.flatMap;
    try { v166.call(null, v163); } catch (e) {}
};
v161();
const v170 = () => {
    const v172 = (a173) => {
        return a173;
    };
    const v175 = Array.prototype.flatMap;
    try { v175.call(undefined, v172); } catch (e) {}
};
v170();
const v181 = { length: 1, 0: "a", 1: "b" };
const v182 = (a183) => {
    return a183;
};
Array.prototype.flatMap.call(v181, v182);
["a"];
const v192 = { length: 2, 0: "a", 1: "b" };
const v193 = (a194) => {
    return a194;
};
Array.prototype.flatMap.call(v192, v193);
["a","b"];
{
    function f201() {
        return [this];
    }
    const result = ([1,2,3]).flatMap(f201, "abc");
    result[0] == "abc";
    result[1] == "abc";
    result[2] == "abc";
}
{
    const input = { 0: "a", 1: "b", 2: "c", length: "wat" };
    const v229 = (a230) => {
        return [a230];
    };
    Array.prototype.flatMap.call(input, v229);
    [];
}
{
    let count = 0;
    const v241 = {
        get length() {
            ++count;
            return 0;
        },
    };
    const input = v241;
    const v243 = (a244) => {
        return [a244];
    };
    const result = Array.prototype.flatMap.call(input, v243);
}
{
    const descriptor = Object.getOwnPropertyDescriptor(Array.prototype, "flatMap");
    descriptor.value;
    Array.prototype.flatMap;
    descriptor.writable;
    descriptor.enumerable;
    descriptor.configurable;
}
