var target = Object.create(null);
function f5() {
    return ["a"];
}
const v9 = new Proxy(target, { ownKeys: f5 });
var proxy = v9;
for (const v11 in proxy) {
}
