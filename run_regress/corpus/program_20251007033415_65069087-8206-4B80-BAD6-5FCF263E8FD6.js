const v1 = new Map();
v1.set(NaN, "ok");
const v8 = new Set(v1.get(NaN).normalize());
v8.intersection(v8);
