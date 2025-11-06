const v4 = { a: 1, b: 2, c: 3 };
const v12 = {
    enumerate() {
    },
    ownKeys() {
        return ["a","b"];
    },
};
const v13 = new Proxy(v4, v12);
let proxy = v13;
let object = Object.create(proxy);
object.d = 4;
let a = [];
for (const v21 in object) {
    a.push(v21);
}
a.toString();
