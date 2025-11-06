const v2 = new Set([]);
var s = v2;
s.size;
s.has(undefined);
const v13 = new Set(["one","two","three"]);
s = v13;
s.size;
s.has("one");
s.has("eleventeen");
const v22 = {};
const v23 = {};
var a = [v22,v23,{}];
const v27 = new Set(a);
s = v27;
s.size;
for (const v30 of a) {
    s.has(v30);
}
s.has({});
s.has("three");
